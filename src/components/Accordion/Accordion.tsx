import type { ComponentProps } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

export type AccordionProps = ComponentProps<typeof AccordionPrimitive.Root>;

export const Accordion = AccordionPrimitive.Root;
