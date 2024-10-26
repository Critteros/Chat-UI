import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type AlertDialogFooterProps = ComponentProps<'div'>;

export function AlertDialogFooter({ className, ...props }: AlertDialogFooterProps) {
  return (
    <div
      className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
      {...props}
    />
  );
}
