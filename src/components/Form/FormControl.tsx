import type { ComponentProps } from 'react';
import { Slot } from '@radix-ui/react-slot';

import { useFormField } from './FormFieldContext';

export type FormControlProps = ComponentProps<typeof Slot>;

export function FormControl({ ...props }: FormControlProps) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
      id={formItemId}
      aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      {...props}
    />
  );
}
