import StarList from '../../shared/components/StarList/StarList';
import { useIsDesktop } from '../../shared/hooks/useIsDesktop';
import { sectionText } from '../../shared/variables/variables';
import * as styles from './ReviewBlock.module.scss';

export default function ReviewBlock() {
  const isDesktop = useIsDesktop();
  const text = isDesktop
    ? `Overjoyed with my Loungewear set. I have the jogger and the
          sweatshirt. Quality product on every level. From the compostable
          packaging, to the supplied washing bag, even the garments smells like
          fresh herbs when I first held them.`
    : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          sed sollicitudin dolor, non sodales justo.`;

  return (
    <div className={styles.reviewBlock}>
      <div className={styles.reviewBlock__header}>
        <img
          className={styles.reviewBlock__header__image}
          src="/img/review-img.png"
          alt="person"
        />
        <div className={styles.reviewBlock__header__title}>
          <div className={styles.reviewBlock__header__title__wrapper}>
            <StarList />
            <span className={styles.reviewBlock__header__title__text}>
              {sectionText.reviewText}
            </span>
          </div>
          <span className={styles.reviewBlock__header__title__name}>
            Jane, S.
          </span>
        </div>
      </div>
      <span className={styles.reviewBlock__text}>{text}</span>
    </div>
  );
}
