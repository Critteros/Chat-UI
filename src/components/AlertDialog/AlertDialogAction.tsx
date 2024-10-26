import type { ComponentProps } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import { buttonVariants } from '@/components/Button';
import { cn } from '@/lib/utils';

export type AlertDialogActionProps = ComponentProps<typeof AlertDialogPrimitive.Action>;

export function AlertDialogAction({ className, ...props }: AlertDialogActionProps) {
  return <AlertDialogPrimitive.Action className={cn(buttonVariants(), className)} {...props} />;
}
