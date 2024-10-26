import type { ComponentProps } from 'react';
import { FormProvider } from 'react-hook-form';

export type FormProps = ComponentProps<typeof FormProvider>;

export const Form = FormProvider;
