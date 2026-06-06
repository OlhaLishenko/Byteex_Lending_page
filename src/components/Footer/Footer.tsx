import BtnContent from '../../shared/components/BtnContent/BtnContent';
import TextTitle from '../../shared/components/TextTitle/TextTitle';
import { useIsDesktop } from '../../shared/hooks/useIsDesktop';
import { images } from '../../shared/variables/images';
import { sectionText, sectionTitle } from '../../shared/variables/variables';
import * as styles from './Footer.module.scss';

export default function Footer() {
  const isDesktop = useIsDesktop();

  const headerText = isDesktop
    ? sectionText.footerText.desktop
    : sectionText.footerText.mobile;

  return (
    <div className={styles.footer}>
      <TextTitle>{sectionTitle.footer}</TextTitle>
      <span className={styles.footer__text}>{headerText}</span>
      <div className={styles.footer__imageWrapper}>
        <img src={images.footer} className={styles.footer__image} />
      </div>
      <BtnContent />
      <div className={styles.footer__bg}>
        <img src={images.mainBg.desktop} />
      </div>
    </div>
  );
}
