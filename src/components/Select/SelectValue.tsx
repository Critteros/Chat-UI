import type { ComponentProps } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';

export type SelectValueProps = ComponentProps<typeof SelectPrimitive.Value>;

export const SelectValue = SelectPrimitive.Value;
