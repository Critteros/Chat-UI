import type { ComponentProps } from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';

import { cn } from '@/lib/utils';

export type ToastTitleProps = ComponentProps<typeof ToastPrimitives.Title>;

export function ToastTitle({ className, ...props }: ToastTitleProps) {
  return (
    <ToastPrimitives.Title
      className={cn('text-sm font-semibold [&+div]:text-xs', className)}
      {...props}
    />
  );
}
