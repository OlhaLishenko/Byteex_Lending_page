import { footerListContent } from '../../../../shared/variables/variables';
import FooterListItem from '../FooterListItem/FooterListItem';
import * as styles from './FooterListContent.module.scss';

export default function FooterListContent() {
  return (
    <ul className={styles.footerlistContent}>
      {footerListContent.map((listItem, i) => (
        <FooterListItem
          key={listItem.id}
          listItem={listItem}
          isLastItem={i === footerListContent.length - 1}
        />
      ))}
    </ul>
  );
}
