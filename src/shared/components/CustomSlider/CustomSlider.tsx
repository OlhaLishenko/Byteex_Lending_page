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

export default function CustomSlider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.orderSlider}>
      <button id="prev-btn" className={styles.orderSlider__btn}>
        <img src="/img/scrollControl.png" />
      </button>

      <div className={styles.orderSlider__mainWrap}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            prevEl: '#prev-btn',
            nextEl: '#next-btn',
          }}
        >
          {children}
        </Swiper>
      </div>
      <button id="next-btn" className={styles.orderSlider__btn}>
        <img
          src="/img/scrollControl.png"
          className={styles.orderSlider__btn_control_right}
        />
      </button>
    </div>
  );
}
