import type { ComponentProps } from 'react';

import { Input } from '@/components/Input';
import { cn } from '@/lib/utils';

export type SidebarInputProps = ComponentProps<typeof Input>;

export function SidebarInput({ className, ...props }: SidebarInputProps) {
  return (
    <Input
      data-sidebar="input"
      className={cn(
        'h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring',
        className,
      )}
      {...props}
    />
  );
}
