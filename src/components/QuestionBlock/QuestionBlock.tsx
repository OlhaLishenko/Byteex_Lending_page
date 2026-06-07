import { useState } from 'react';
import TextTitle from '../../shared/components/TextTitle/TextTitle';
import {
  questionBlockContent,
  sectionTitle,
} from '../../shared/variables/variables';
import * as styles from './QuestionBlock.module.scss';
import { icons, images } from '../../shared/variables/images';
import BtnContent from '../../shared/components/BtnContent/BtnContent';
import { useIsDesktop } from '../../shared/hooks/useIsDesktop';

export default function QuestionBlock() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isDesktop = useIsDesktop();

  return (
    <div className={styles.questionBlock}>
      <div className={styles.questionBlock__header}>
        <TextTitle>{sectionTitle.questionBlock}</TextTitle>
        <div className={styles.questionBlock__list}>
          {questionBlockContent.map((item, i) => (
            <div key={i} className={styles.questionBlock__item}>
              <div className={styles.questionBlock__separator}></div>
              <button
                className={styles.questionBlock__trigger}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className={styles.questionBlock__triggerTitle}>
                  {item.title}
                </span>
                <span>
                  {openIndex === i ? (
                    <img src={icons.iconClose} />
                  ) : (
                    <img src={icons.iconAdd} />
                  )}
                </span>
              </button>

              <div
                className={`${styles.questionBlock__content} ${openIndex === i ? styles.questionBlock__content__open : ''}`}
              >
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {isDesktop && (
        <div className={styles.questionBlock__imgContainer}>
          <img src={images.questionBg} className={styles.questionBlock__img} />
        </div>
      )}

      {!isDesktop && <BtnContent />}
    </div>
  );
}
