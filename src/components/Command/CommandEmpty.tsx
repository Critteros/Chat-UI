import type { ComponentProps } from 'react';
import { Command as CommandPrimitive } from 'cmdk';

export type CommandEmptyProps = ComponentProps<typeof CommandPrimitive.Empty>;

export function CommandEmpty(props: CommandEmptyProps) {
  return <CommandPrimitive.Empty className="py-6 text-center text-sm" {...props} />;
}
