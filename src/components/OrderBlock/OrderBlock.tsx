import TextTitle from '../../shared/components/TextTitle/TextTitle';
import { orderContent } from '../../shared/variables/variables';
import OrderItem from './components/OrderItem/OrderItem';
import * as styles from './OrderBlock.module.scss';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CustomSlider from '../../shared/components/CustomSlider/CustomSlider';
import BtnContent from '../../shared/components/BtnContent/BtnContent';
import { useIsDesktop } from '../../shared/hooks/useIsDesktop';

export default function OrderBlock() {
  const isDesktop = useIsDesktop();

  return (
    <div className={styles.orderBlock}>
      <TextTitle>{'Comfort made easy'}</TextTitle>

      <div className={styles.orderBlock__list}>
        {isDesktop ? (
          <>
            {orderContent.map(item => (
              <OrderItem orderItems={item} key={item.title} />
            ))}
          </>
        ) : (
          <CustomSlider>
            {orderContent.map(item => (
              <SwiperSlide key={item.title}>
                <OrderItem orderItems={item} />
              </SwiperSlide>
            ))}
          </CustomSlider>
        )}
      </div>
      <div className={styles.orderBlock__btn}>
        <BtnContent />
      </div>
    </div>
  );
}
