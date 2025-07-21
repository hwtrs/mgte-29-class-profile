// Chart data types for react-google-charts
export type ChartDataRow = (string | number)[];
export type ChartDataArray = ChartDataRow[];

export interface DemographicChartData {
  response: string;
  count: number;
}

export interface ChartLoadingState {
  data: ChartDataArray;
  loading: boolean;
  error: string | null;
}
