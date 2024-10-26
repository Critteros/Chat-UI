import type { ComponentProps } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

export type TabsProps = ComponentProps<typeof TabsPrimitive.Root>;

export const Tabs = TabsPrimitive.Root;
