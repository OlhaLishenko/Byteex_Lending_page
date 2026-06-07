import Separator from '../../../../shared/components/Separator/Separator';
import { FooterTextContent } from '../../../../shared/types/FooterTextContent';
import * as styles from './FooterListItem.module.scss';

type FooterListItemType = {
  listItem: FooterTextContent;
  isLastItem: boolean;
};

export default function FooterListItem({
  listItem,
  isLastItem,
}: FooterListItemType) {
  return (
    <li className={styles.footerListItem}>
      <img src={listItem.icon} className={styles.footerListItem__icon} />
      <span className={styles.footerListItem__text}>{listItem.text}</span>
      {!isLastItem && <Separator direction={'vertical'} />}
    </li>
  );
}
