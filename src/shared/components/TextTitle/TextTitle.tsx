import React from 'react';
import * as styles from './TextTitle.module.scss';

export default function TextTitle({ children }: { children: React.ReactNode }) {
  return <h1 className={styles.textTitle}>{children}</h1>;
}
