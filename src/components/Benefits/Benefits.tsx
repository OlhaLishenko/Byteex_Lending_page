import TextTitle from '../../shared/components/TextTitle/TextTitle';
import ImageSlider from './components/ImageSlider/ImageSlider';
import * as styles from './Benefits.module.scss';
import BenefitList from './components/BenefitList/BenefitList';
import { useIsDesktop } from '../../shared/hooks/useIsDesktop';
import BtnContent from '../../shared/components/BtnContent/BtnContent';
import { sectionTitle } from '../../shared/variables/variables';

export default function Benefits() {
  const isDesktop = useIsDesktop();

  return (
    <div className={styles.benefits}>
      <div className={styles.benefits__container}>
        <TextTitle>{sectionTitle.benefits}</TextTitle>
      </div>
      <div className={styles.benefits__container__slider}>
        <ImageSlider />
      </div>

      <BenefitList />
      {!isDesktop && (
        <div className={styles.benefits__btnContainer}>
          <BtnContent />
        </div>
      )}
    </div>
  );
}
