import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type DrawerFooterProps = ComponentProps<'div'>;

export function DrawerFooter({ className, ...props }: DrawerFooterProps) {
  return <div className={cn('mt-auto flex flex-col gap-2 p-4', className)} {...props} />;
}
