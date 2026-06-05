import * as styles from './BtnCustomize.module.scss';

export default function BtnCustomize() {
  return (
    <button className={styles.btnCustomize}>
      <div className={styles.btnCustomize__container}>
        <span>Customize Your Outfit</span>
        <img
          className={styles.btnCustomize__icon}
          src="/img/arrow.png"
          alt="arrow"
        />
      </div>
    </button>
  );
}
