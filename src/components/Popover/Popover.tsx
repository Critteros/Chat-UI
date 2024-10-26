import type { ComponentProps } from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';

export type PopoverProps = ComponentProps<typeof PopoverPrimitive.Root>;

export const Popover = PopoverPrimitive.Root;
