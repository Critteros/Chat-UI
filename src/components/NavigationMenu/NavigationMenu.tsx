import type { ComponentProps } from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';

import { cn } from '@/lib/utils';

import { NavigationMenuViewport } from './NavigationMenuViewport';

export type NavigationMenuProps = ComponentProps<typeof NavigationMenuPrimitive.Root>;

export function NavigationMenu({ className, children, ...props }: NavigationMenuProps) {
  return (
    <NavigationMenuPrimitive.Root
      className={cn('relative z-10 flex max-w-max flex-1 items-center justify-center', className)}
      {...props}
    >
      {children}
      <NavigationMenuViewport />
    </NavigationMenuPrimitive.Root>
  );
}
