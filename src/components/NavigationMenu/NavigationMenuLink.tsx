import type { ComponentProps } from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';

export type NavigationMenuLinkProps = ComponentProps<typeof NavigationMenuPrimitive.Link>;

export const NavigationMenuLink = NavigationMenuPrimitive.Link;
