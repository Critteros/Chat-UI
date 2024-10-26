import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type DropdownMenuShortcutProps = ComponentProps<'span'>;

export function DropdownMenuShortcut({ className, ...props }: DropdownMenuShortcutProps) {
  return (
    <span className={cn('ml-auto text-xs tracking-widest opacity-60', className)} {...props} />
  );
}
