import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type CardContentProps = ComponentProps<'div'>;

export function CardContent({ className, ...props }: CardContentProps) {
  return <div className={cn('p-6 pt-0', className)} {...props} />;
}
