import type { ComponentProps } from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

export type BreadcrumbLinkProps = {
  asChild?: boolean;
} & ComponentProps<'a'>;

export function BreadcrumbLink({ asChild, className, ...props }: BreadcrumbLinkProps) {
  const Comp = asChild ? Slot : 'a';

  return <Comp className={cn('transition-colors hover:text-foreground', className)} {...props} />;
}
