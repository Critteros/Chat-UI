import type { ComponentProps } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

export type TooltipProps = ComponentProps<typeof TooltipPrimitive.Root>;

export const Tooltip = TooltipPrimitive.Root;
