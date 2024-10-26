import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

import { useFormField } from './FormFieldContext';

export type FormDescriptionProps = ComponentProps<'p'>;

export function FormDescription({ className, ...props }: FormDescriptionProps) {
  const { formDescriptionId } = useFormField();

  return (
    <p
      id={formDescriptionId}
      className={cn('text-muted-foreground text-[0.8rem]', className)}
      {...props}
    />
  );
}
