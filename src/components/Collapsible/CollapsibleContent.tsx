import type { ComponentProps } from 'react';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

export type CollapsibleContentProps = ComponentProps<
  typeof CollapsiblePrimitive.CollapsibleContent
>;

export const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;
