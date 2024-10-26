import type { ComponentProps } from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';

export type ContextMenuPortalProps = ComponentProps<typeof ContextMenuPrimitive.Portal>;

export const ContextMenuPortal = ContextMenuPrimitive.Portal;
