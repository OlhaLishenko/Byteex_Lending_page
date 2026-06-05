import { useIsDesktop } from '../../../../shared/hooks/useIsDesktop';
import { benefinsContent } from '../../../../shared/variables/variables';
import * as styles from './BenefitList.module.scss';

export default function BenefitList() {
  const isDesktop = useIsDesktop();

  return (
    <section className={styles.benefitList}>
      {benefinsContent.map((item, i) => (
        <div className={styles.benefitList__item} key={item.title}>
          <img src={item.icon} className={styles.benefitList__icon} />
          <div className={styles.benefitList__text__container}>
            <p className={styles.benefitList__title}>{item.title}</p>
            <span className={styles.benefitList__text}>{item.text}</span>
          </div>
          {!isDesktop && (
            <>
              {i !== benefinsContent.length - 1 && (
                <div className={styles.benefitList__separator}></div>
              )}
            </>
          )}
        </div>
      ))}
    </section>
  );
}
