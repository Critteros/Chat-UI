import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type ContextMenuShortcutProps = ComponentProps<'span'>;

export function ContextMenuShortcut({ className, ...props }: ContextMenuShortcutProps) {
  return (
    <span
      className={cn('ml-auto text-xs tracking-widest text-muted-foreground', className)}
      {...props}
    />
  );
}
