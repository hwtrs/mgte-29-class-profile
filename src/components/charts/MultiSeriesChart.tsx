"use client";

import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import { ChartDataArray } from './types';
import './DemographicChart.scss';

export type ChartType = 'PieChart' | 'BarChart' | 'ColumnChart' | 'GeoChart' | 'LineChart';

interface GenericChart2Props {
  title: string;
  subtitle?: string;
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

const GenericChart2: React.FC<GenericChart2Props> = ({
  title,
  subtitle,
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
        }
      } catch (e) {
        setError(e instanceof Error ? e.message : String(e));
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [dataUrl, multiSeries]);

  const isAxisChart = chartType === 'BarChart' || chartType === 'ColumnChart' || chartType === 'LineChart';
  const defaultLegend = { position: chartType === 'GeoChart' ? 'none' : chartType == 'PieChart' ? 'bottom' : 'top' };

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

  return (
    <div className="chart-container">
      <h3 className="chart-title">{title}</h3>
      {subtitle && <p className="chart-subtitle">{subtitle}</p>}
      <div className={`chart-wrapper ${chartType === 'PieChart' ? 'pie-chart' : ''}`} style={{ width, height }}>
        <Chart chartType={chartType} data={data} options={defaultOptions} width={width} height={height} />
      </div>
    </div>
  );
};

export default GenericChart2;