import type { ComponentProps } from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';

import { cn } from '@/lib/utils';

export type ToastViewportProps = ComponentProps<typeof ToastPrimitives.Viewport>;

export function ToastViewport({ className, ...props }: ToastViewportProps) {
  return (
    <ToastPrimitives.Viewport
      className={cn(
        'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
        className,
      )}
      {...props}
    />
  );
}
