import type { ComponentProps } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

export type DialogProps = ComponentProps<typeof DialogPrimitive.Root>;

export const Dialog = DialogPrimitive.Root;
