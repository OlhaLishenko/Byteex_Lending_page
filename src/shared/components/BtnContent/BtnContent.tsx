import { reviewText } from '../../variables/variables';
import BtnCustomize from '../BtnCustomize/BtnCustomize';
import StarList from '../StarList/StarList';
import * as styles from './BtnContent.module.scss';

export default function BtnContent() {
  return (
    <div className={styles.btnContent}>
      <BtnCustomize />
      <div className={styles.btnContent__stars}>
        <StarList />
        <span className={styles.btnContent__stars__text}>{reviewText}</span>
      </div>
    </div>
  );
}
