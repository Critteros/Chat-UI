import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type CommandShortcutProps = ComponentProps<'span'>;

export function CommandShortcut({ className, ...props }: CommandShortcutProps) {
  return (
    <span
      className={cn('ml-auto text-xs tracking-widest text-muted-foreground', className)}
      {...props}
    />
  );
}
