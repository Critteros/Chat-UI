import * as React from 'react';
import type { ComponentProps } from 'react';
import * as MenubarPrimitive from '@radix-ui/react-menubar';

import { cn } from '@/lib/utils';

export type MenubarTriggerProps = ComponentProps<typeof MenubarPrimitive.Trigger>;

export function MenubarTrigger({ className, ...props }: MenubarTriggerProps) {
  return (
    <MenubarPrimitive.Trigger
      className={cn(
        'flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
        className,
      )}
      {...props}
    />
  );
}
