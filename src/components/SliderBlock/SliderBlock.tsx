import Slider from '../../shared/components/Slider/Slider';
import * as styles from './SliderBlock.module.scss';

export default function SliderBlock() {
  return (
    <section className={styles.sliderBlock}>
      <span className={styles.sliderBlock__title}>as seen in</span>
      <div className={styles.sliderBlock__wrapper}>
        <Slider />
      </div>
    </section>
  );
}
