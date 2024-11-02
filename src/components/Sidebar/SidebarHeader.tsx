import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type SidebarHeaderProps = ComponentProps<'div'>;

export function SidebarHeader({ className, ...props }: SidebarHeaderProps) {
  return (
    <div data-sidebar="header" className={cn('flex flex-col gap-2 p-2', className)} {...props} />
  );
}
