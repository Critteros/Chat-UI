import type { ComponentProps } from 'react';
import * as ResizablePrimitive from 'react-resizable-panels';

export type ResizablePanelProps = ComponentProps<typeof ResizablePrimitive.Panel>;

export const ResizablePanel = ResizablePrimitive.Panel;
