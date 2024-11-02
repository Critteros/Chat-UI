import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type SidebarFooterProps = ComponentProps<'div'>;

export function SidebarFooter({ className, ...props }: SidebarFooterProps) {
  return (
    <div data-sidebar="footer" className={cn('flex flex-col gap-2 p-2', className)} {...props} />
  );
}
