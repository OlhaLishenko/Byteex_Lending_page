import { sectionText } from '../../variables/variables';
import StarList from '../StarList/StarList';
import * as styles from './ReviewStars.module.scss';

export default function ReviewStars() {
  return (
    <div className={styles.reviewStars}>
      <StarList />
      <span className={styles.reviewStars__text}>{sectionText.reviewText}</span>
    </div>
  );
}
