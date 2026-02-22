"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Chart } from 'react-google-charts';
import { ChartDataArray } from './types';
import './DemographicChart.scss';

export type ChartType = 'PieChart' | 'BarChart' | 'ColumnChart' | 'GeoChart' | 'LineChart';

interface GenericChartProps {
  title: string;
  subtitle?: string;
  showRespondents?: boolean;
  dataUrl: string;
  chartType: ChartType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: Record<string, any>;
  width?: string;
  height?: string;
  xAxisLabel?: string;
  yAxisLabel?: string;
  multiSeries?: boolean;
}

const GenericChart: React.FC<GenericChartProps> = ({
  title,
  subtitle,
  showRespondents,
  dataUrl,
  chartType,
  options = {},
  width = '100%',
  height = '400px',
  xAxisLabel,
  yAxisLabel,
  multiSeries = false,
}) => {
  const [data, setData] = useState<ChartDataArray>([]);
  const [respondentCount, setRespondentCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch(dataUrl);
        if (!res.ok) throw new Error(`Failed to load data from ${dataUrl}`);
        const text = await res.text();
        const lines = text.trim().split('\n');

        if (multiSeries) {
          const header = lines[0].split(',').map(col => col.trim());
          const dataRows = lines.slice(1).map(line => {
            const values = line.split(',');
            return [
              values[0].trim(),
              ...values.slice(1).map(val => Number(val.trim()))
            ];
          }).filter(row => {
            return row.slice(1).every(val => !isNaN(val as number));
          });
          setData([header, ...dataRows]);
        } else {
          const dataRows = lines.slice(1).map(line => {
            const [label, countStr] = line.split(',');
            return [label.trim(), Number(countStr.trim())];
          }).filter(row => !isNaN(row[1] as number));
          setData([[lines[0].split(',')[0], lines[0].split(',')[1]], ...dataRows]);
          if (showRespondents) {
            const total = dataRows.reduce((sum, row) => sum + (row[1] as number), 0);
            setRespondentCount(total);
          }
        }
      } catch (e) {
        setError(e instanceof Error ? e.message : String(e));
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [dataUrl, showRespondents, multiSeries]);

  // After the pie chart renders, inject an SVG <circle> at the exact pie boundary
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleReady = useCallback(({ chartWrapper }: { chartWrapper: any }) => {
    if (chartType !== 'PieChart' || !wrapperRef.current || !chartWrapper) return;
    try {
      const chart = chartWrapper.getChart();
      const layout = chart.getChartLayoutInterface();
      const area = layout.getChartAreaBoundingBox();

      const svg = wrapperRef.current.querySelector('svg');
      if (!svg) return;

      // Remove any previously injected border circle
      svg.querySelectorAll('.pie-border-circle').forEach(el => el.remove());

      const cx = area.left + area.width / 2;
      const cy = area.top + area.height / 2;
      const r = Math.min(area.width, area.height) / 2;

      // Read the page's --pie-border-color CSS variable
      const borderColor = getComputedStyle(wrapperRef.current).getPropertyValue('--pie-border-color').trim() || '#999';

      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', String(cx));
      circle.setAttribute('cy', String(cy));
      circle.setAttribute('r', String(r));
      circle.setAttribute('fill', 'none');
      circle.setAttribute('stroke', borderColor);
      circle.setAttribute('stroke-width', '3');
      circle.setAttribute('class', 'pie-border-circle');
      circle.style.pointerEvents = 'none';

      svg.appendChild(circle);
    } catch {
      // Silently fail — border is cosmetic
    }
  }, [chartType]);

  const isPie = chartType === 'PieChart';
  const isAxisChart = chartType === 'BarChart' || chartType === 'ColumnChart' || chartType === 'LineChart';
  const defaultLegend = { position: chartType === 'GeoChart' ? 'none' : isPie ? 'bottom' : 'right' };

  const axisTextStyle = { fontName: 'Nunito', fontSize: 12, color: '#6B5F54' };
  const axisTitleStyle = { fontName: 'Nunito', fontSize: 13, color: '#4A4039', italic: false, bold: true };
  const gridlineStyle = { color: '#E0D6CC', count: -1 };
  const minorGridlines = { color: 'transparent' };

  const defaultOptions = {
    backgroundColor: 'transparent',
    pieSliceText: 'none',
    pieSliceBorderColor: 'transparent',
    tooltip: { isHtml: true, textStyle: { fontName: 'Nunito' } },
    legend: { ...defaultLegend, ...options.legend, textStyle: { fontName: 'Nunito', ...options.legend?.textStyle } },
    chartArea: {
      width: '70%', height: '70%',
      ...(isAxisChart ? { backgroundColor: { fill: '#FAF6F1', stroke: '#E0D6CC', strokeWidth: 1 } } : {}),
    },
    ...(isAxisChart
      ? {
        bar: { groupWidth: '65%' },
        hAxis: { title: xAxisLabel || '', titleTextStyle: axisTitleStyle, textStyle: axisTextStyle, gridlines: gridlineStyle, minorGridlines, baselineColor: '#C4B6A6' },
        vAxis: { title: yAxisLabel || '', titleTextStyle: axisTitleStyle, textStyle: axisTextStyle, gridlines: gridlineStyle, minorGridlines, baselineColor: '#C4B6A6' },
      }
      : {}),
    ...options,
  };
  defaultOptions.legend = { ...defaultLegend, ...options.legend, textStyle: { fontName: 'Nunito', ...options.legend?.textStyle } };
  if (options.chartArea) {
    const bgDefault = isAxisChart ? { fill: '#FAF6F1', stroke: '#E0D6CC', strokeWidth: 1 } : undefined;
    defaultOptions.chartArea = { ...defaultOptions.chartArea, ...options.chartArea, ...(bgDefault ? { backgroundColor: { ...bgDefault, ...options.chartArea?.backgroundColor } } : {}) };
  }
  if (options.hAxis) {
    defaultOptions.hAxis = { ...defaultOptions.hAxis, ...options.hAxis, titleTextStyle: { ...axisTitleStyle, ...options.hAxis?.titleTextStyle }, textStyle: { ...axisTextStyle, ...options.hAxis?.textStyle }, gridlines: { ...gridlineStyle, ...options.hAxis?.gridlines }, minorGridlines };
  }
  if (options.vAxis) {
    defaultOptions.vAxis = { ...defaultOptions.vAxis, ...options.vAxis, titleTextStyle: { ...axisTitleStyle, ...options.vAxis?.titleTextStyle }, textStyle: { ...axisTextStyle, ...options.vAxis?.textStyle }, gridlines: { ...gridlineStyle, ...options.vAxis?.gridlines }, minorGridlines };
  }

  if (loading) {
    return (
      <div className="chart-container">
        <h3 className="chart-title">{title}</h3>
        <div className="loading-state"><div className="loading-spinner" /><span className="loading-text">Loading chart...</span></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="chart-container">
        <h3 className="chart-title">{title}</h3>
        <div className="error-state"><span className="error-title">Unable to load chart</span><span className="error-message">{error}</span></div>
      </div>
    );
  }

  const chartEvents = chartType === 'PieChart'
    ? [{ eventName: 'ready' as const, callback: handleReady }]
    : [];

  return (
    <div className="chart-container">
      <h3 className="chart-title">{title}</h3>
      {(subtitle || respondentCount !== null) && (
        <p className="chart-subtitle">
          {subtitle || `number of respondents: ${respondentCount}`}
        </p>
      )}
      <div ref={wrapperRef} className={`chart-wrapper ${chartType === 'PieChart' ? 'pie-chart' : ''}`} style={{ width, height }}>
        <Chart chartType={chartType} data={data} options={defaultOptions} width={width} height={height} chartEvents={chartEvents} />
      </div>
    </div>
  );
};

export default GenericChart;
