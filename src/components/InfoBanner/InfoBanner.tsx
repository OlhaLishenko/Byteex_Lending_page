import TextTitle from '../../shared/components/TextTitle/TextTitle';
import { useIsDesktop } from '../../shared/hooks/useIsDesktop';
import {
  infoBannerContent,
  sectionTitle,
} from '../../shared/variables/variables';
import InfoBannerItem from './components/InfoBannerItem/InfoBannerItem';
import * as styles from './InfoBanner.module.scss';

export default function InfoBanner() {
  const isDesktop = useIsDesktop();
  const infoContent = isDesktop
    ? infoBannerContent
    : infoBannerContent.slice(0, 2);

  return (
    <div className={styles.infoBanner}>
      <TextTitle>{sectionTitle.infoBanner}</TextTitle>

      <div className={styles.infoBanner__list}>
        {infoContent.map((item, i) => (
          <InfoBannerItem
            key={item.title}
            bannerItem={item}
            isLastItem={i === infoContent.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
