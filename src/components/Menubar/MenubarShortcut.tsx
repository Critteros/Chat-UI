import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type MenubarShortcutProps = ComponentProps<'span'>;

export function MenubarShortcut({ className, ...props }: MenubarShortcutProps) {
  return (
    <span
      className={cn('ml-auto text-xs tracking-widest text-muted-foreground', className)}
      {...props}
    />
  );
}
