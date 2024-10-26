import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type BreadcrumbItemProps = ComponentProps<'li'>;

export function BreadcrumbItem({ className, ...props }: BreadcrumbItemProps) {
  return <li className={cn('inline-flex items-center gap-1.5', className)} {...props} />;
}
