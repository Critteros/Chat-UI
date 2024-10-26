import type { ComponentProps } from 'react';
import * as RechartsPrimitive from 'recharts';

export type ChartTooltipProps = ComponentProps<typeof RechartsPrimitive.Tooltip>;

export const ChartTooltip = RechartsPrimitive.Tooltip;
