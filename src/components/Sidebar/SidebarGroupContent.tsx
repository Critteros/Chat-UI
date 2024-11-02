import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type SidebarGroupContentProps = ComponentProps<'div'>;

export function SidebarGroupContent({ className, ...props }: SidebarGroupContentProps) {
  return (
    <div data-sidebar="group-content" className={cn('w-full text-sm', className)} {...props} />
  );
}
