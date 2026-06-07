import BtnContent from '../../shared/components/BtnContent/BtnContent';
import TextTitle from '../../shared/components/TextTitle/TextTitle';
import { images } from '../../shared/variables/images';
import { sectionText } from '../../shared/variables/variables';
import ReviewSlider from './components/ReviewSlider/ReviewSlider';
import * as styles from './UserReviews.module.scss';

export default function UserReviews() {
  return (
    <div className={styles.userReviews}>
      <div className={styles.userReviews__title}>
        <TextTitle>{'What are our fans saying?'}</TextTitle>
        <span className={styles.userReviews__text}>
          {sectionText.userReviewsText}
        </span>
      </div>
      <div className={styles.userReviews__bg}>
        <picture className={styles.userReviews__bg}>
          <source
            srcSet={images.userReviewsBg.desktop}
            media="(min-width: 1024px)"
            className={styles['userReviews__bg-image']}
          />
          <img
            src={images.userReviewsBg.mobile}
            className={styles.userReviews__bgImage}
          />
        </picture>
      </div>
      <div className={styles.userReviews__sliderContainer}>
        <ReviewSlider />
      </div>
      <div className={styles.userReviews__btnContainer}>
        <BtnContent />
      </div>
    </div>
  );
}
