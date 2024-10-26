import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

import { useCarousel } from './CarouselContext';

export type CarouselContentProps = ComponentProps<'div'>;

export function CarouselContent({ className, ...props }: CarouselContentProps) {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        className={cn('flex', orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col', className)}
        {...props}
      />
    </div>
  );
}
