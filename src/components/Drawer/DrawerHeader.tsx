import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type DrawerHeaderProps = ComponentProps<'div'>;

export function DrawerHeader({ className, ...props }: DrawerHeaderProps) {
  return <div className={cn('grid gap-1.5 p-4 text-center sm:text-left', className)} {...props} />;
}
