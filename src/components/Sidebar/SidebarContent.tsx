import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type SidebarContentProps = ComponentProps<'div'>;

export function SidebarContent({ className, ...props }: SidebarContentProps) {
  return (
    <div
      data-sidebar="content"
      className={cn(
        'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden',
        className,
      )}
      {...props}
    />
  );
}
