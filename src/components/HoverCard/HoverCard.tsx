import type { ComponentProps } from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';

export type HoverCardProps = ComponentProps<typeof HoverCardPrimitive.Root>;

export const HoverCard = HoverCardPrimitive.Root;
