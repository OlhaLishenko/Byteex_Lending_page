import BtnCustomize from '../../shared/components/BtnCustomize/BtnCustomize';
import TextTitle from '../../shared/components/TextTitle/TextTitle';
import FeatureList from '../FeatureList/FeatureList';
import ReviewBlock from '../ReviewBlock/ReviewBlock';
import * as styles from './HeroSection.module.scss';

export default function HeroSection() {
  return (
    <header className={styles.hero}>
      <div className={styles.hero__header}>
        <img src="/img/LOGO.png" className={styles.hero__logo} />
        <TextTitle>Don’t apologize for being comfortable.</TextTitle>
      </div>
      <div className={styles.hero__headerImg__container}>
        <img src="/img/header.png" className={styles.hero__headerImg} />
      </div>

      <FeatureList />
      <div className={`${styles.hero__header} ${styles.hero__header__info}`}>
        <div className={styles.hero__btn__container}>
          <BtnCustomize />
        </div>
        <div className={styles.hero__review__container}>
          <ReviewBlock />
        </div>
      </div>
    </header>
  );
}
