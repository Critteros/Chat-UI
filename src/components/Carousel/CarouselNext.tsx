import type { ComponentProps } from 'react';
import { ArrowRightIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/Button';
import { cn } from '@/lib/utils';

import { useCarousel } from './CarouselContext';

export type CarouselNextProps = ComponentProps<typeof Button>;

export function CarouselNext({
  className,
  variant = 'outline',
  size = 'icon',
  ...props
}: CarouselNextProps) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        'absolute h-8 w-8 rounded-full',
        orientation === 'horizontal'
          ? '-right-12 top-1/2 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRightIcon className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
}
