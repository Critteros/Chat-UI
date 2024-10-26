import { createContext, use } from 'react';
import { useFormContext, type FieldPath, type FieldValues } from 'react-hook-form';

export type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

export const FormFieldContext = createContext<FormFieldContextValue | null>(null);

export type FormItemContextValue = {
  id: string;
};

export const FormItemContext = createContext<FormItemContextValue | null>(null);

export function useFormField() {
  const { getFieldState, formState } = useFormContext();

  const fieldContext = use(FormFieldContext);
  const itemContext = use(FormItemContext);

  if (!fieldContext) {
    throw new Error('missing <FormFieldContext>, useFormField should be used within <FormField>');
  }

  if (!itemContext) {
    throw new Error('missing <FormItemContext>, useFormField should be used within <FormField>');
  }

  const fieldState = getFieldState(fieldContext.name, formState);

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
}
