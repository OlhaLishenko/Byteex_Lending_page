/* eslint-disable max-len */
import { useState } from 'react';
import * as styles from './ImageSlider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Thumbs, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/navigation';
import type { Swiper as SwiperType } from 'swiper';
import ArrowSlider from '../../../../shared/components/ArrowSlider/ArrowSlider';
import { useSliderNavigation } from '../../../../shared/hooks/useSliderNavigation';
import { productSliderContent } from '../../../../shared/variables/variables';

export default function ImageSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { prevRef, nextRef, swiperRef } = useSliderNavigation();

  return (
    <div className={styles.container}>
      <div className={styles.productSlider}>
        <ArrowSlider prevRef={prevRef} nextRef={nextRef}>
          <div className={styles.productSlider__mainWrap}>
            <Swiper
              onSwiper={swiper => (swiperRef.current = swiper)}
              onBeforeInit={swiper => {
                if (typeof swiper.params.navigation !== 'boolean') {
                  swiper.params.navigation!.prevEl = prevRef.current;
                  swiper.params.navigation!.nextEl = nextRef.current;
                }
              }}
              onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
              className={styles.productSlider__main}
              modules={[Thumbs, Navigation]}
              thumbs={{ swiper: thumbsSwiper }}
              navigation
            >
              {productSliderContent.map(image => (
                <SwiperSlide key={image.title}>
                  <img src={image.src} className={styles.image} />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              className={styles.productSlider__thumbs}
              modules={[Thumbs]}
              onSwiper={setThumbsSwiper}
              slidesPerView={'auto'}
              spaceBetween={5}
              watchSlidesProgress
            >
              {productSliderContent.map(image => (
                <SwiperSlide key={image.src}>
                  <img
                    src={image.src}
                    className={styles.productSlider__thumbs__image}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </ArrowSlider>
        <p className={styles.productSlider__title}>
          {productSliderContent[activeIndex].title}
        </p>
      </div>
    </div>
  );
}
