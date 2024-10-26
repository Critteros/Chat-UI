import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type InputOTPGroupProps = ComponentProps<'div'>;

export function InputOTPGroup({ className, ...props }: InputOTPGroupProps) {
  return <div className={cn('flex items-center', className)} {...props} />;
}
