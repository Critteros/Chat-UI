import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type InlineCodeProps = ComponentProps<'code'>;

export function InlineCode({ className, children, ...props }: InlineCodeProps) {
  return (
    <code
      className={cn(
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
        className,
      )}
      {...props}
    >
      {children}
    </code>
  );
}