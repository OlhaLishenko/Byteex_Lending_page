import { useEffect, useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';

export function useSliderNavigation() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      const swiper = swiperRef.current;

      if (typeof swiper.params.navigation !== 'boolean') {
        swiper.params.navigation!.prevEl = prevRef.current;
        swiper.params.navigation!.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }
    }
  }, []);

  return { prevRef, nextRef, swiperRef };
}
