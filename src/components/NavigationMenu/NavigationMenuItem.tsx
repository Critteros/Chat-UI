import type { ComponentProps } from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';

export type NavigationMenuItemProps = ComponentProps<typeof NavigationMenuPrimitive.Item>;

export const NavigationMenuItem = NavigationMenuPrimitive.Item;
