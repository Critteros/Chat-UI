import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type BreadcrumbPageProps = ComponentProps<'span'>;

export function BreadcrumbPage({ className, ...props }: BreadcrumbPageProps) {
  return (
    <span
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn('font-normal text-foreground', className)}
      {...props}
    />
  );
}
