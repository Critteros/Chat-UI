import type { ComponentProps } from 'react';
import * as ResizablePrimitive from 'react-resizable-panels';

import { cn } from '@/lib/utils';

export type ResizablePanelGroupProps = ComponentProps<typeof ResizablePrimitive.PanelGroup>;

export function ResizablePanelGroup({ className, ...props }: ResizablePanelGroupProps) {
  return (
    <ResizablePrimitive.PanelGroup
      className={cn('flex h-full w-full data-[panel-group-direction=vertical]:flex-col', className)}
      {...props}
    />
  );
}
