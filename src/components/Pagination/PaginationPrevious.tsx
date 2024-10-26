import { ChevronLeftIcon } from '@radix-ui/react-icons';

import { cn } from '@/lib/utils';

import { PaginationLink, type PaginationLinkProps } from './PaginationLink';

export type PaginationPreviousProps = PaginationLinkProps;

export function PaginationPrevious({ className, ...props }: PaginationPreviousProps) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn('gap-1 pl-2.5', className)}
      {...props}
    >
      <ChevronLeftIcon className="h-4 w-4" />
      <span>Previous</span>
    </PaginationLink>
  );
}
