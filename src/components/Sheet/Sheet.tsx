import type { ComponentProps } from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';

export type SheetProps = ComponentProps<typeof SheetPrimitive.Root>;

export const Sheet = SheetPrimitive.Root;
