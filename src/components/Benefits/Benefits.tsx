import TextTitle from '../../shared/components/TextTitle/TextTitle';
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
      {!isDesktop && <BtnContent />}
    </div>
  );
}
