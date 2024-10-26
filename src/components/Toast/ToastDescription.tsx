import type { ComponentProps } from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';

import { cn } from '@/lib/utils';

export type ToastDescriptionProps = ComponentProps<typeof ToastPrimitives.Description>;

export function ToastDescription({ className, ...props }: ToastDescriptionProps) {
  return <ToastPrimitives.Description className={cn('text-sm opacity-90', className)} {...props} />;
}
