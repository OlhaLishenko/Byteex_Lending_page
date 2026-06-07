import BtnCustomize from '../../shared/components/BtnCustomize/BtnCustomize';
import ReviewStars from '../../shared/components/ReviewStars/ReviewStars';
import TextTitle from '../../shared/components/TextTitle/TextTitle';
import { useIsDesktop } from '../../shared/hooks/useIsDesktop';
import { icons, images } from '../../shared/variables/images';
import { sectionText, sectionTitle } from '../../shared/variables/variables';
import FooterListContent from './components/FooterListContent/FooterListContent';
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
        <img src={images.footer.img} className={styles.footer__image} />
      </div>
      <div className={styles.footer__btnWrapper}>
        <BtnCustomize />
        {isDesktop ? (
          <div className={styles.footer__paymentInfo}>
            <img
              className={styles.footer__paymentInfo__icon}
              src={icons.iconClock}
            />

            <p className={styles.footer__paymentInfo__text}>
              {sectionText.footerText.paymentText}
            </p>
            <div className={styles.footer__paymentInfo__line}></div>
            <img src={icons.iconPayment} />
          </div>
        ) : (
          <ReviewStars />
        )}
      </div>

      {isDesktop && <FooterListContent />}
    </div>
  );
}
