import type { ComponentProps } from 'react';
import * as RechartsPrimitive from 'recharts';

export type ChartLegendProps = ComponentProps<typeof RechartsPrimitive.Legend>;

export const ChartLegend = RechartsPrimitive.Legend;
