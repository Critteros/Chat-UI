import type { ComponentProps } from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';

export type SheetCloseProps = ComponentProps<typeof SheetPrimitive.Close>;

export const SheetClose = SheetPrimitive.Close;
