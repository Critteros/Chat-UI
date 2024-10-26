import type { ComponentProps } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

export type DialogPortalProps = ComponentProps<typeof DialogPrimitive.Portal>;

export const DialogPortal = DialogPrimitive.Portal;
