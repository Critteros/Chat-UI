import type { ComponentProps } from 'react';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

export type CollapsibleProps = ComponentProps<typeof CollapsiblePrimitive.Root>;

export const Collapsible = CollapsiblePrimitive.Root;
