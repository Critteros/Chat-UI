import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type PaginationItemProps = ComponentProps<'li'>;

export function PaginationItem({ className, ...props }: PaginationItemProps) {
  return <li className={cn('', className)} {...props} />;
}
