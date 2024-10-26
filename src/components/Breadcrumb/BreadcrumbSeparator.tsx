import type { ComponentProps } from 'react';
import { ChevronRightIcon } from '@radix-ui/react-icons';

import { cn } from '@/lib/utils';

export type BreadcrumbSeparatorProps = ComponentProps<'li'>;

export function BreadcrumbSeparator({ children, className, ...props }: BreadcrumbSeparatorProps) {
  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={cn('[&>svg]:size-3.5', className)}
      {...props}
    >
      {children ?? <ChevronRightIcon />}
    </li>
  );
}
