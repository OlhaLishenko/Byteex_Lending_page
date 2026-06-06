import StarList from '../../../../shared/components/StarList/StarList';
import { Review } from '../../../../shared/types/Review';
import * as styles from './UserReviewItem.module.scss';

type UserReviewItemType = {
  content: Review;
};

export default function UserReviewItem({ content }: UserReviewItemType) {
  return (
    <div className={styles.userReviewItem}>
      <div className={styles.userReviewItem__header}>
        <img src={content.icon} className={styles.userReviewItem__icon} />
        <div className={styles.userReviewItem__info}>
          <StarList />
          <p className={styles.userReviewItem__name}>{content.name}</p>
        </div>
      </div>
      <span className={styles.userReviewItem__text}>{content.text}</span>
    </div>
  );
}
