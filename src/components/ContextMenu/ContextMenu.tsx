import type { ComponentProps } from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';

export type ContextMenuProps = ComponentProps<typeof ContextMenuPrimitive.Root>;

export const ContextMenu = ContextMenuPrimitive.Root;
