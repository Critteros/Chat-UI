import type { ComponentProps } from 'react';
import { Command as CommandPrimitive } from 'cmdk';

import { cn } from '@/lib/utils';

export type CommandGroupProps = ComponentProps<typeof CommandPrimitive.Group>;

export function CommandGroup({ className, ...props }: CommandGroupProps) {
  return (
    <CommandPrimitive.Group
      className={cn(
        'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
        className,
      )}
      {...props}
    />
  );
}
