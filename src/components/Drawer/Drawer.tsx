import type { ComponentProps } from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';

export type DrawerProps = ComponentProps<typeof DrawerPrimitive.Root>;

export function Drawer({ shouldScaleBackground = true, ...props }: DrawerProps) {
  return <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />;
}
