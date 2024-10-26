import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type DialogHeaderProps = ComponentProps<'div'>;

export function DialogHeader({ className, ...props }: DialogHeaderProps) {
  return (
    <div
      className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)}
      {...props}
    />
  );
}
