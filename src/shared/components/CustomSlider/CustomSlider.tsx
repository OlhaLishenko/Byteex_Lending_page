import * as styles from './CustomSlider.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination } from 'swiper/modules';
import classNames from 'classnames';
import ArrowSlider from '../ArrowSlider/ArrowSlider';
import { useId } from 'react';

type CustomSliderType = {
  prevRef: React.RefObject<HTMLButtonElement>;
  nextRef: React.RefObject<HTMLButtonElement>;
  swiperRef: React.MutableRefObject<Swiper | null>;
  children: React.ReactNode;
  isPagination: boolean;
  slidesPerView: number | 'auto';
  sliderClassName?: string;
  className?: string;
};

export default function CustomSlider({
  prevRef,
  nextRef,
  swiperRef,
  children,
  isPagination,
  slidesPerView,
  sliderClassName,
  className,
}: CustomSliderType) {
  const rawId = useId();
  const paginationId = rawId.replace(/:/g, '');

  return (
    <div className={classNames(styles.customSlider, className)}>
      <ArrowSlider prevRef={prevRef} nextRef={nextRef}>
        <div className={styles.customSlider__mainWrap}>
          <Swiper
            onSwiper={swiper => (swiperRef.current = swiper)}
            onBeforeInit={swiper => {
              if (typeof swiper.params.navigation !== 'boolean') {
                swiper.params.navigation!.prevEl = prevRef.current;
                swiper.params.navigation!.nextEl = nextRef.current;
              }
            }}
            className={classNames(styles.customSlider__main, {
              [sliderClassName ?? '']: !!sliderClassName,
            })}
            modules={[Navigation, Pagination]}
            {...(isPagination && {
              pagination: { clickable: true, el: `#${paginationId}` },
            })}
            spaceBetween={slidesPerView !== 'auto' && slidesPerView > 1 ? 0 : 0}
            slidesPerView={slidesPerView}
            navigation
          >
            {children}
          </Swiper>
        </div>
      </ArrowSlider>

      {isPagination && (
        <div className={styles.customSlider__paginationList}>
          <div id={paginationId} className={styles.customSlider__pagination} />
        </div>
      )}
    </div>
  );
}
