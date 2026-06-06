import * as styles from './Separator.module.scss';

export default function Separator({
  direction,
}: {
  direction: 'vertical' | 'horizontal';
}) {
  return (
    <div
      className={styles.separator}
      style={{
        width: direction === 'vertical' ? '1px' : '100%',
        height: direction === 'vertical' ? '100%' : '1px',
      }}
    ></div>
  );
}
