import type { ComponentProps } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';

export type SelectProps = ComponentProps<typeof SelectPrimitive.Root>;

export const Select = SelectPrimitive.Root;
