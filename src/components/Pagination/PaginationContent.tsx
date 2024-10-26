import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type PaginationContentProps = ComponentProps<'ul'>;

export function PaginationContent({ className, ...props }: PaginationContentProps) {
  return <ul className={cn('flex flex-row items-center gap-1', className)} {...props} />;
}
