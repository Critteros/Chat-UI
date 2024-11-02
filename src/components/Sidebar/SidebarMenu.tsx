import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type SidebarMenuProps = ComponentProps<'ul'>;

export function SidebarMenu({ className, ...props }: SidebarMenuProps) {
  return (
    <ul
      data-sidebar="menu"
      className={cn('flex w-full min-w-0 flex-col gap-1', className)}
      {...props}
    />
  );
}
