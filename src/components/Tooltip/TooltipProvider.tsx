import type { ComponentProps } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

export type TooltipProviderProps = ComponentProps<typeof TooltipPrimitive.Provider>;

export const TooltipProvider = TooltipPrimitive.Provider;
