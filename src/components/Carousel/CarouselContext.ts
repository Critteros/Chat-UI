import { createContext, use } from 'react';
import type useEmblaCarousel from 'embla-carousel-react';

import type { CarouselProps } from './Carousel';

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & Pick<CarouselProps, 'opts' | 'orientation'>;

export const CarouselContext = createContext<CarouselContextProps | null>(null);

export function useCarousel() {
  const context = use(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
}
