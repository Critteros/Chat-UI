import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type CardDescriptionProps = ComponentProps<'p'>;

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  return <p className={cn('text-sm text-muted-foreground', className)} {...props} />;
}
