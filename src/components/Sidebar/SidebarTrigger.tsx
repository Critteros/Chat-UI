import type { ComponentProps } from 'react';
import { PanelLeft } from 'lucide-react';

import { Button } from '@/components/Button';
import { cn } from '@/lib/utils';

import { useSidebar } from './use-sidebar';

export type SidebarTriggerProps = ComponentProps<typeof Button>;

export function SidebarTrigger({ className, onClick, ...props }: SidebarTriggerProps) {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn('h-7 w-7', className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}
