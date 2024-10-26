import type { ComponentProps } from 'react';
import * as MenubarPrimitive from '@radix-ui/react-menubar';

import { cn } from '@/lib/utils';

export type MenubarItemProps = ComponentProps<typeof MenubarPrimitive.Item> & {
  inset?: boolean;
};

export function MenubarItem({ className, inset, ...props }: MenubarItemProps) {
  return (
    <MenubarPrimitive.Item
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        inset && 'pl-8',
        className,
      )}
      {...props}
    />
  );
}
