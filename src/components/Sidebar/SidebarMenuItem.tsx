import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type SidebarMenuItem = ComponentProps<'li'>;

export function SidebarMenuItem({ className, ...props }: SidebarMenuItem) {
  return (
    <li data-sidebar="menu-item" className={cn('group/menu-item relative', className)} {...props} />
  );
}
