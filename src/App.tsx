import * as styles from './App.module.scss';
import About from './components/About/About';
import Benefits from './components/Benefits/Benefits';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import InfoBanner from './components/InfoBanner/InfoBanner';
import OrderBlock from './components/OrderBlock/OrderBlock';
import QuestionBlock from './components/QuestionBlock/QuestionBlock';
import SliderBlock from './components/SliderBlock/SliderBlock';
import UserReviews from './components/UserReviews/UserReviews';
import { useIsDesktop } from './shared/hooks/useIsDesktop';
import { images } from './shared/variables/images';
import { sectionText } from './shared/variables/variables';

export const App = () => {
  const isDesktop = useIsDesktop();

  const headerTitle = isDesktop
    ? sectionText.headerTitle.desktop
    : sectionText.headerTitle.mobile;

  return (
    <div className={styles.app}>
      <div className={styles.app__header}>{headerTitle}</div>
      <div className={styles.app__container}>
        <HeroSection />
      </div>

      <section className={styles.app__bg}>
        <picture>
          <source srcSet={images.mainBg.desktop} media="(min-width: 1024px)" />
          <img src={images.mainBg.mobile} className={styles.app__bg__image} />
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
        <div
          className={`${styles.app__container} ${styles.app__container__gray}`}
        >
          <InfoBanner />
        </div>

        <div className={styles.app__container}>
          <Footer />
        </div>
      </div>

      {/* <div className={styles.app__footerBg}>
        <img src={images.mainBg.desktop} />
      </div> */}
    </div>
  );
};
