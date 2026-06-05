import * as styles from './StarList.module.scss';

export default function StarList() {
  return (
    <div className={styles.starList}>
      {Array.from({ length: 5 }, (_, i) => (
        <img
          className={styles.starList__icon}
          key={i}
          src="/img/star.png"
          alt="star"
        />
      ))}
    </div>
  );
}
