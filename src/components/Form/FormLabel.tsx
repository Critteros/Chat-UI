import type { ComponentProps } from 'react';
import type * as LabelPrimitive from '@radix-ui/react-label';

import { Label } from '@/components/Label';
import { cn } from '@/lib/utils';

import { useFormField } from './FormFieldContext';

export type FormLabelProps = ComponentProps<typeof LabelPrimitive.Root>;

export function FormLabel({ className, ...props }: FormLabelProps) {
  const { error, formItemId } = useFormField();

  return (
    <Label className={cn(error && 'text-destructive', className)} htmlFor={formItemId} {...props} />
  );
}
