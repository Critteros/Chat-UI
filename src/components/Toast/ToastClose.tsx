import type { ComponentProps } from 'react';
import { Cross2Icon } from '@radix-ui/react-icons';
import * as ToastPrimitives from '@radix-ui/react-toast';

import { cn } from '@/lib/utils';

export type ToastCloseProps = ComponentProps<typeof ToastPrimitives.Close>;

export function ToastClose({ className, ...props }: ToastCloseProps) {
  return (
    <ToastPrimitives.Close
      className={cn(
        'absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
        className,
      )}
      toast-close=""
      {...props}
    >
      <Cross2Icon className="h-4 w-4" />
    </ToastPrimitives.Close>
  );
}
