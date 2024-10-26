import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type AlertTitleProps = ComponentProps<'h5'>;

export function AlertTitle({ className, ...props }: AlertTitleProps) {
  return (
    <h5 className={cn('mb-1 font-medium leading-none tracking-tight', className)} {...props} />
  );
}
