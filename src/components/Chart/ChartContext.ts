import { createContext, use } from 'react';

import type { ChartConfig } from './config';

type ChartContextProps = {
  config: ChartConfig;
};

export const ChartContext = createContext<ChartContextProps | null>(null);

export function useChart() {
  const context = use(ChartContext);

  if (!context) {
    throw new Error('useChart must be used within a <ChartContainer />');
  }

  return context;
}
