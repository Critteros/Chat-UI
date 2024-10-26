import type { ComponentProps } from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';

export type SheetPortalProps = ComponentProps<typeof SheetPrimitive.Portal>;

export const SheetPortal = SheetPrimitive.Portal;
