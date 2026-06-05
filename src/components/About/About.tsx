import TextTitle from '../../shared/components/TextTitle/TextTitle';
import { aboutComponentText } from '../../shared/variables/variables';
import * as styles from './About.module.scss';

export default function About() {
  return (
    <div className={styles.about}>
      <TextTitle>{'Be your best self.'}</TextTitle>
      <div className={styles.about__image}>
        <img src="/img/aboutImg.png" />
      </div>
      <div className={styles.about__text}>
        <span>{aboutComponentText}</span>
      </div>
    </div>
  );
}
