import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type PaginationProps = ComponentProps<'nav'>;

export function Pagination({ className, ...props }: PaginationProps) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    />
  );
}
