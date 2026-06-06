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
  isShadow: boolean;
  isPagination: boolean;
  slidesPerView: number | 'auto';
};

export default function CustomSlider({
  prevRef,
  nextRef,
  swiperRef,
  children,
  isShadow,
  isPagination,
  slidesPerView,
}: CustomSliderType) {
  const rawId = useId();
  const paginationId = rawId.replace(/:/g, '');

  return (
    <div className={styles.customSlider}>
      {/* <div className={styles.customSlider__mainWrap}> */}
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
              [styles.customSlider__mainShadow]: isShadow,
            })}
            modules={[Navigation, Pagination]}
            {...(isPagination && {
              pagination: { clickable: true, el: `#${paginationId}` },
            })}
            spaceBetween={
              slidesPerView !== 'auto' && slidesPerView > 1 ? 42 : 42
            }
            slidesPerView={slidesPerView}
            navigation
          >
            {children}
          </Swiper>
        </div>
      </ArrowSlider>
      {/* </div> */}

      {isPagination && (
        <div className={styles.customSlider__paginationList}>
          <div id={paginationId} className={styles.customSlider__pagination} />
        </div>
      )}
    </div>
  );
}
