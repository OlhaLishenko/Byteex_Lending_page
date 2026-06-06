import * as styles from './Slider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useIsDesktop } from '../../../../shared/hooks/useIsDesktop';
import { logos } from '../../../../shared/variables/variables';

export default function Slider() {
  const isDesktop = useIsDesktop();

  return (
    <>
      {isDesktop ? (
        <div className={styles.logoList}>
          {logos.map(logo => (
            <img
              src={logo.src}
              alt={logo.alt}
              className={styles.logoList__item}
              key={logo.alt}
            />
          ))}
        </div>
      ) : (
        <section className={styles.slider}>
          <Swiper
            modules={[Pagination]}
            slidesPerView={3}
            pagination={{ clickable: true }}
            spaceBetween={30}
          >
            {logos.map(logo => (
              <SwiperSlide key={logo.alt}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={styles.slider__icon}
                  style={{
                    width: logo.alt === 'image2' ? '60%' : '100%',
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}
    </>
  );
}
