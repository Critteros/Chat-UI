import type { ComponentProps } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

export type DropdownMenuProps = ComponentProps<typeof DropdownMenuPrimitive.Root>;

export const DropdownMenu = DropdownMenuPrimitive.Root;
