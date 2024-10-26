import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type CardTitleProps = ComponentProps<'h3'>;

export function CardTitle({ className, ...props }: CardTitleProps) {
  return <h3 className={cn('font-semibold leading-none tracking-tight', className)} {...props} />;
}
