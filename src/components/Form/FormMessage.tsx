import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

import { useFormField } from './FormFieldContext';

export type FormMessageProps = ComponentProps<'p'>;

export function FormMessage({ className, children, ...props }: FormMessageProps) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      id={formMessageId}
      className={cn('text-destructive text-[0.8rem] font-medium', className)}
      {...props}
    >
      {body}
    </p>
  );
}
