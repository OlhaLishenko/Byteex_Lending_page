import * as styles from './ArrowSlider.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type ArrowSliderType = {
  children: React.ReactNode;
  prevRef: React.RefObject<HTMLButtonElement>;
  nextRef: React.RefObject<HTMLButtonElement>;
};

export default function ArrowSlider({
  children,
  prevRef,
  nextRef,
}: ArrowSliderType) {
  return (
    <>
      <button ref={prevRef} className={styles.arrowSlider__btn}>
        <img src="/img/scrollControl.png" />
      </button>
      {children}
      <button ref={nextRef} className={styles.arrowSlider__btn}>
        <img
          src="/img/scrollControl.png"
          className={styles.arrowSlider__btn_control_right}
        />
      </button>
    </>
  );
}
