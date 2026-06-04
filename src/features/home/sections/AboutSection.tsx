import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';

import styles from '../HomePage.module.css';

export default function AboutSection(): ReactNode {
  return (
    <section className={clsx(styles.section, styles.aboutSection)}>
      <div className={styles.content}>
        <Heading as="h2" className={styles.title}>
          关于我
        </Heading>
        <p className={styles.description}>一名热爱技术的前端开发者</p>
      </div>
    </section>
  );
}
