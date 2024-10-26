import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type AlertDialogHeaderProps = ComponentProps<'div'>;

export function AlertDialogHeader({ className, ...props }: AlertDialogHeaderProps) {
  return (
    <div className={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />
  );
}
