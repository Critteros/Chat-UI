import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

import { useCarousel } from './CarouselContext';

export type CarouselItemProps = ComponentProps<'div'>;

export function CarouselItem({ className, ...props }: CarouselItemProps) {
  const { orientation } = useCarousel();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className,
      )}
      {...props}
    />
  );
}
