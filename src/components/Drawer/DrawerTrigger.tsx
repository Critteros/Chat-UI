import type { ComponentProps } from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';

export type DrawerTriggerProps = ComponentProps<typeof DrawerPrimitive.Trigger>;

export const DrawerTrigger = DrawerPrimitive.Trigger;
