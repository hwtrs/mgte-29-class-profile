"use client";

import React, { useState, useEffect } from 'react';
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
}) => {
  const [data, setData] = useState<ChartDataArray>([]);
  const [respondentCount, setRespondentCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch(dataUrl);
        if (!res.ok) throw new Error(`Failed to load data from ${dataUrl}`);
        const text = await res.text();
        const lines = text.trim().split('\n');
        const dataRows = lines.slice(1).map(line => {
          const [label, countStr] = line.split(',');
          return [label.trim(), Number(countStr.trim())];
        }).filter(row => !isNaN(row[1] as number));
        setData([[lines[0].split(',')[0], lines[0].split(',')[1]], ...dataRows]);
        if (showRespondents) {
          const total = dataRows.reduce((sum, row) => sum + (row[1] as number), 0);
          setRespondentCount(total);
        }
      } catch (e) {
        setError(e instanceof Error ? e.message : String(e));
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [dataUrl, showRespondents]);

  const defaultOptions = {
    // title: title,
    backgroundColor: 'transparent',
    pieSliceText: 'none',
    pieSliceBorderColor: 'transparent',
    tooltip: { isHtml: true },
    legend: { position: chartType === 'GeoChart' ? 'none' : chartType == 'PieChart' ? 'bottom' : 'right' },
    chartArea: { width: '70%', height: '70%' },
    ...(chartType === 'BarChart' || chartType === 'ColumnChart'
      ? {
        hAxis: { title: xAxisLabel || '' },
        vAxis: { title: yAxisLabel || '' },
      }
      : {}),
    ...options,
  };

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
      {(subtitle || respondentCount !== null) && (
        <p className="chart-subtitle">
          {subtitle || `number of respondents: ${respondentCount}`}
        </p>
      )}
      <div className={`chart-wrapper ${chartType === 'PieChart' ? 'pie-chart' : ''}`} style={{ width, height }}>
        <Chart chartType={chartType} data={data} options={defaultOptions} width={width} height={height} />
      </div>
    </div>
  );
};

export default GenericChart;
