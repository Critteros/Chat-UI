import type { ComponentProps } from 'react';
import * as MenubarPrimitive from '@radix-ui/react-menubar';

import { cn } from '@/lib/utils';

export type MenubarProps = ComponentProps<typeof MenubarPrimitive.Root>;

export function Menubar({ className, ...props }: MenubarProps) {
  return (
    <MenubarPrimitive.Root
      className={cn(
        'flex h-9 items-center space-x-1 rounded-md border bg-background p-1 shadow-sm',
        className,
      )}
      {...props}
    />
  );
}
