import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type TableCaptionProps = ComponentProps<'caption'>;

export function TableCaption({ className, ...props }: TableCaptionProps) {
  return <caption className={cn('mt-4 text-sm text-muted-foreground', className)} {...props} />;
}
