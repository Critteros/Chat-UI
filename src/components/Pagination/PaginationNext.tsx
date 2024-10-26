import { ChevronRightIcon } from '@radix-ui/react-icons';

import { cn } from '@/lib/utils';

import { PaginationLink, type PaginationLinkProps } from './PaginationLink';

export type PaginationNextProps = PaginationLinkProps;

export function PaginationNext({ className, ...props }: PaginationNextProps) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn('gap-1 pr-2.5', className)}
      {...props}
    >
      <span>Next</span>
      <ChevronRightIcon className="h-4 w-4" />
    </PaginationLink>
  );
}
