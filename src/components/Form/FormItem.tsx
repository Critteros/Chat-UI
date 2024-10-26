import { useId, type ComponentProps } from 'react';

import { cn } from '@/lib/utils';

import { FormItemContext } from './FormFieldContext';

export type FormItemProps = ComponentProps<'div'>;

export const FormItem = ({ className, ...props }: FormItemProps) => {
  const id = useId();

  return (
    <FormItemContext value={{ id }}>
      <div className={cn('space-y-2', className)} {...props} />
    </FormItemContext>
  );
};
