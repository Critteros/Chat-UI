import type { ComponentProps } from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';

export type ToastProviderProps = ComponentProps<typeof ToastPrimitives.Provider>;

export const ToastProvider = ToastPrimitives.Provider;
