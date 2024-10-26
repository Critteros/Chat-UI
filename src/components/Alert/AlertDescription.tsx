import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type AlertDescriptionProps = ComponentProps<'div'>;

export function AlertDescription({ className, ...props }: AlertDescriptionProps) {
  return <div className={cn('text-sm [&_p]:leading-relaxed', className)} {...props} />;
}
