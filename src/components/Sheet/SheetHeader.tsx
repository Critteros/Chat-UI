import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type SheetHeaderProps = ComponentProps<'div'>;

export function SheetHeader({ className, children, ...props }: SheetHeaderProps) {
  return (
    <div className={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...props}>
      {children}
    </div>
  );
}
