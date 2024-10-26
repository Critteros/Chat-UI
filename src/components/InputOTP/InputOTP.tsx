import type { ComponentProps } from 'react';
import { OTPInput } from 'input-otp';

import { cn } from '@/lib/utils';

export type InputOTPProps = ComponentProps<typeof OTPInput>;

export function InputOTP({ className, containerClassName, ...props }: InputOTPProps) {
  return (
    <OTPInput
      containerClassName={cn(
        'flex items-center gap-2 has-[:disabled]:opacity-50',
        containerClassName,
      )}
      className={cn('disabled:cursor-not-allowed', className)}
      {...props}
    />
  );
}
