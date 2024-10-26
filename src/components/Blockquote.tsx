import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type BlockquoteProps = ComponentProps<'blockquote'>;

export function Blockquote({ className, children, ...props }: BlockquoteProps) {
  return (
    <blockquote className={cn('mt-6 border-l-2 pl-6 italic', className)} {...props}>
      {children}
    </blockquote>
  );
}
