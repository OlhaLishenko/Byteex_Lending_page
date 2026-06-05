import { features } from '../../shared/variables/variables';
import * as styles from './FeatureList.module.scss';

export default function FeatureList() {
  return (
    <ul className={styles.features}>
      {features.map(feature => (
        <li className={styles.features__item} key={feature.icon}>
          <img className={styles.features__icon} src={feature.icon} />
          <p className={styles.features__text}>{feature.title}</p>
        </li>
      ))}
    </ul>
  );
}
