import BtnCustomize from '../../shared/components/BtnCustomize/BtnCustomize';
import StarList from '../../shared/components/StarList/StarList';
import TextTitle from '../../shared/components/TextTitle/TextTitle';
import { reviewText } from '../../shared/variables/variables';
import ImageSlider from './components/ImageSlider/ImageSlider';
import * as styles from './Benefits.module.scss';
import BenefitList from './components/BenefitList/BenefitList';
import { useIsDesktop } from '../../shared/hooks/useIsDesktop';
import BtnContent from '../../shared/components/BtnContent/BtnContent';

export default function Benefits() {
  const isDesktop = useIsDesktop();

  return (
    <div className={styles.benefits}>
      <div className={styles.benefits__container}>
        <TextTitle>{'Loungewear you can be proud of.'}</TextTitle>
      </div>
      <div className={styles.benefits__container__slider}>
        <ImageSlider />
      </div>

      <BenefitList />
      {!isDesktop && (
        <BtnContent />
        // <div className={styles.benefits__btn__content}>
        //   <div className={styles.benefits__container}>
        //     <BtnCustomize />
        //   </div>
        //   <div className={styles.benefits__stars}>
        //     <StarList />
        //     <span className={styles.benefits__stars__text}>{reviewText}</span>
        //   </div>
        // </div>
      )}
    </div>
  );
}
