"use client";

import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import { ChartDataArray } from './types';
import './DemographicChart.scss';

export type ChartType = 'PieChart' | 'BarChart' | 'ColumnChart' | 'GeoChart';

interface GenericChartProps {
  title: string;
  subtitle?: string;
  dataUrl: string;
  chartType: ChartType;
  options?: Record<string, any>;
  width?: string;
  height?: string;
}

const GenericChart: React.FC<GenericChartProps> = ({
  title,
  subtitle,
  dataUrl,
  chartType,
  options = {},
  width = '100%',
  height = '400px',
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
        const dataRows = lines.slice(1).map(line => {
          const [label, countStr] = line.split(',');
          return [label.trim(), Number(countStr.trim())];
        }).filter(row => !isNaN(row[1] as number));
        setData([[lines[0].split(',')[0], lines[0].split(',')[1]], ...dataRows]);
      } catch (e) {
        setError(e instanceof Error ? e.message : String(e));
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [dataUrl]);

  const defaultOptions = {
    title: title,
    backgroundColor: 'transparent',
    legend: { position: chartType === 'GeoChart' ? 'none' : 'right' },
    chartArea: { width: '70%', height: '70%' },
    ...options,
  };

  if (loading) {
    return (
      <div className="chart-container">
        <h3 className="chart-title">{title}</h3>
        <div className="loading-state">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="chart-container">
        <h3 className="chart-title">{title}</h3>
        <div className="error-state">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="chart-container">
      <h3 className="chart-title">{title}</h3>
      {subtitle && <p className="chart-subtitle">{subtitle}</p>}
      <div className="chart-wrapper" style={{ width, height }}>
        <Chart chartType={chartType} data={data} options={defaultOptions} width={width} height={height} />
      </div>
    </div>
  );
};

export default GenericChart;
