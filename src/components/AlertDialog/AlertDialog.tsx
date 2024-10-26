import type { ComponentProps } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

export type AlertDialogProps = ComponentProps<typeof AlertDialogPrimitive.Root>;

export const AlertDialog = AlertDialogPrimitive.Root;
