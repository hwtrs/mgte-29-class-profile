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

  const defaultOptions = {
    backgroundColor: 'transparent',
    legend: { position: chartType === 'GeoChart' ? 'none' : chartType == 'PieChart' ? 'bottom' : 'top' },
    chartArea: { width: '70%', height: '70%' },
    ...(chartType === 'BarChart' || chartType === 'ColumnChart' || chartType === 'LineChart'
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
      {subtitle && <p className="chart-subtitle">{subtitle}</p>}
      <div className="chart-wrapper" style={{ width, height }}>
        <Chart chartType={chartType} data={data} options={defaultOptions} width={width} height={height} />
      </div>
    </div>
  );
};

export default GenericChart2;