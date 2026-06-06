import * as styles from './App.module.scss';
import About from './components/About/About';
import Benefits from './components/Benefits/Benefits';
import HeroSection from './components/HeroSection/HeroSection';
import OrderBlock from './components/OrderBlock/OrderBlock';
import QuestionBlock from './components/QuestionBlock/QuestionBlock';
import SliderBlock from './components/SliderBlock/SliderBlock';
import UserReviews from './components/UserReviews/UserReviews';
import { headerTitleMobile } from './shared/variables/variables';

export const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.app__header}>{headerTitleMobile}</div>
      <div className={styles.app__container}>
        <HeroSection />
      </div>

      <section className={styles.app__bg}>
        <picture>
          <source
            srcSet="/img/bgSliderDesktop.png"
            media="(min-width: 1024px)"
          />
          <img src="/img/bgSlider.png" className={styles.app__bg__image} />
        </picture>
      </section>

      <div className={styles.app__main}>
        <div className={styles.app__slider}>
          <SliderBlock />
        </div>
        <div className={styles.app__container}>
          <Benefits />
        </div>
        <div
          className={`${styles.app__container} ${styles.app__container__gray}`}
        >
          <About />
        </div>
        <div className={styles.app__container__order}>
          <OrderBlock />
        </div>
        <UserReviews />
        <div className={styles.app__container}>
          <QuestionBlock />
        </div>
      </div>
    </div>
  );
};
