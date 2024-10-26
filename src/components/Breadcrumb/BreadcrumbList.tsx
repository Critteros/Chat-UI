import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type BreadcrumbListProps = ComponentProps<'ol'>;

export function BreadcrumbList({ className, ...props }: BreadcrumbListProps) {
  return (
    <ol
      className={cn(
        'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5',
        className,
      )}
      {...props}
    />
  );
}
