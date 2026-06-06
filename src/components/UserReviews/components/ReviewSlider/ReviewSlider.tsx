/* eslint-disable max-len */
import { SwiperSlide } from 'swiper/react';
import { reviews } from '../../../../shared/variables/variables';
import * as styles from './ReviewSlider.module.scss';
import UserReviewItem from '../UserReviewItem/UserReviewItem';
import CustomSlider from '../../../../shared/components/CustomSlider/CustomSlider';
import { useSliderNavigation } from '../../../../shared/hooks/useSliderNavigation';
import { useIsDesktop } from '../../../../shared/hooks/useIsDesktop';

export default function ReviewSlider() {
  const { prevRef, nextRef, swiperRef } = useSliderNavigation();
  const isDesktop = useIsDesktop();

  return (
    <div className={styles.reviewSlider}>
      <CustomSlider
        isShadow={true}
        isPagination={true}
        prevRef={prevRef}
        nextRef={nextRef}
        swiperRef={swiperRef}
        // slidesPerView={'auto'}
        slidesPerView={isDesktop ? 3 : 1}
      >
        {reviews.map(item => (
          <SwiperSlide key={item.id}>
            <UserReviewItem content={item} />
          </SwiperSlide>
        ))}
      </CustomSlider>
    </div>
  );
}
