import * as styles from './App.module.scss';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import Main from './components/Main/Main';
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

      <Main />

      <div
        className={`
            ${styles.app__container}
            ${styles.app__container__footer}
            `}
      >
        <Footer />
        <div className={styles.app__footerBg}>
          <img src={images.footer.bg} className={styles.app__footerBg__image} />
        </div>
      </div>
    </div>
  );
};
