import { OrderContent } from '../../../../shared/types/OrderContent';
import * as styles from './OrderItem.module.scss';

export default function OrderItem({
  orderItems,
}: {
  orderItems: OrderContent;
}) {
  return (
    <div
      className={styles.orderItem}
      style={{ backgroundColor: orderItems.color }}
    >
      <div className={styles.orderItem__iconContainer}>
        <img src={orderItems.icon} className={styles.orderItem__icon} />
      </div>
      <span className={styles.orderItem__title}>{orderItems.title}</span>
      <span className={styles.orderItem__text}>{orderItems.text}</span>
    </div>
  );
}
