import BtnCustomize from '../BtnCustomize/BtnCustomize';
import ReviewStars from '../ReviewStars/ReviewStars';
import * as styles from './BtnContent.module.scss';

export default function BtnContent() {
  return (
    <div className={styles.btnContent}>
      <BtnCustomize />
      <ReviewStars />
    </div>
  );
}
