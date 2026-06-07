import About from '../About/About';
import Benefits from '../Benefits/Benefits';
import InfoBanner from '../InfoBanner/InfoBanner';
import OrderBlock from '../OrderBlock/OrderBlock';
import QuestionBlock from '../QuestionBlock/QuestionBlock';
import SliderBlock from '../SliderBlock/SliderBlock';
import UserReviews from '../UserReviews/UserReviews';
import * as styles from './Main.module.scss';

export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.main__slider}>
        <SliderBlock />
      </div>
      <div className={styles.main__container}>
        <Benefits />
      </div>
      <div
        className={`${styles.main__container} ${styles.main__container__gray}`}
      >
        <About />
      </div>
      <div className={styles.main__container__order}>
        <OrderBlock />
      </div>
      <UserReviews />
      <div className={styles.main__container}>
        <QuestionBlock />
      </div>
      <div
        className={`${styles.main__container} ${styles.main__container__gray}`}
      >
        <InfoBanner />
      </div>
    </div>
  );
}
