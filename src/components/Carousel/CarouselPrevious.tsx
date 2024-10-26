import type { ComponentProps } from 'react';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/Button';
import { cn } from '@/lib/utils';

import { useCarousel } from './CarouselContext';

export type CarouselPreviousProps = ComponentProps<typeof Button>;

export function CarouselPrevious({
  className,
  variant = 'outline',
  size = 'icon',
  ...props
}: CarouselPreviousProps) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        'absolute h-8 w-8 rounded-full',
        orientation === 'horizontal'
          ? '-left-12 top-1/2 -translate-y-1/2'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeftIcon className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
}
