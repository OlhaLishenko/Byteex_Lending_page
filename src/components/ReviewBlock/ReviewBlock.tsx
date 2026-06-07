import ReviewStars from '../../shared/components/ReviewStars/ReviewStars';
import { useIsDesktop } from '../../shared/hooks/useIsDesktop';
import { images } from '../../shared/variables/images';
import { sectionText } from '../../shared/variables/variables';
import * as styles from './ReviewBlock.module.scss';

export default function ReviewBlock() {
  const isDesktop = useIsDesktop();
  const text = isDesktop
    ? sectionText.reviewBlockText.desktop
    : sectionText.reviewBlockText.mobile;

  return (
    <div className={styles.reviewBlock}>
      <div className={styles.reviewBlock__header}>
        <img
          className={styles.reviewBlock__header__image}
          src={images.reviewImagePerson}
          alt="person"
        />
        <div className={styles.reviewBlock__header__title}>
          <ReviewStars />
          <span className={styles.reviewBlock__header__title__name}>
            Jane, S.
          </span>
        </div>
      </div>
      <span className={styles.reviewBlock__text}>{text}</span>
    </div>
  );
}
