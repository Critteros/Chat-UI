import type { ComponentProps } from 'react';

import { Separator } from '@/components/Separator';
import { cn } from '@/lib/utils';

export type SidebarSeparatorProps = ComponentProps<typeof Separator>;

export function SidebarSeparator({ className, ...props }: SidebarSeparatorProps) {
  return (
    <Separator
      data-sidebar="separator"
      className={cn('mx-2 w-auto bg-sidebar-border', className)}
      {...props}
    />
  );
}
