import type { ComponentProps } from 'react';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';

import { cn } from '@/lib/utils';

export type BreadcrumbEllipsisProps = ComponentProps<'span'>;

export function BreadcrumbEllipsis({ className, ...props }: BreadcrumbEllipsisProps) {
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={cn('flex h-9 w-9 items-center justify-center', className)}
      {...props}
    >
      <DotsHorizontalIcon className="h-4 w-4" />
      <span className="sr-only">More</span>
    </span>
  );
}
