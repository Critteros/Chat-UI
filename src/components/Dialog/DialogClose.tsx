import type { ComponentProps } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

export type DialogCloseProps = ComponentProps<typeof DialogPrimitive.Close>;

export const DialogClose = DialogPrimitive.Close;
