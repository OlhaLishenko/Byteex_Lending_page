import Separator from '../../../../shared/components/Separator/Separator';
import { useIsDesktop } from '../../../../shared/hooks/useIsDesktop';
import { InfoBannerContent } from '../../../../shared/types/infoBannerContent';
import * as styles from './InfoBannerItem.module.scss';

type InfoBannerItemType = {
  bannerItem: InfoBannerContent;
  isLastItem: boolean;
};

export default function InfoBannerItem({
  bannerItem,
  isLastItem,
}: InfoBannerItemType) {
  const isDesktop = useIsDesktop();

  return (
    <div className={styles.infoBannerItem}>
      <div className={styles.infoBannerItem__wrapper}>
        <div className={styles.infoBannerItem__imgContainer}>
          <img src={bannerItem.icon} className={styles.infoBannerItem__img} />
        </div>
        <div className={styles.infoBannerItem__content}>
          <span
            className={`${styles.infoBannerItem__content} ${styles.infoBannerItem__content__title}`}
          >
            {bannerItem.title}
          </span>
          <span
            className={`${styles.infoBannerItem__content} ${styles.infoBannerItem__content__text}`}
          >
            {bannerItem.text}
          </span>
        </div>
      </div>

      {!isLastItem && (
        <div className={styles.infoBannerItem__separator}>
          <Separator direction={isDesktop ? 'vertical' : 'horizontal'} />
        </div>
      )}
    </div>
  );
}
