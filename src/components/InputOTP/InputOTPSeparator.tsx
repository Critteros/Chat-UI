import type { ComponentProps } from 'react';
import { DashIcon } from '@radix-ui/react-icons';

export type InputOTPSeparatorProps = ComponentProps<'div'>;

export function InputOTPSeparator({ ...props }: InputOTPSeparatorProps) {
  return (
    <div role="separator" {...props}>
      <DashIcon />
    </div>
  );
}
