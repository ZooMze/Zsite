import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';

import styles from '../HomePage.module.css';

export default function ProjectsSection(): ReactNode {
  return (
    <section className={clsx(styles.section, styles.projectsSection)}>
      <div className={styles.content}>
        <Heading as="h2" className={styles.title}>
          项目展示
        </Heading>
        <p className={styles.description}>一些有趣的项目和实验</p>
      </div>
    </section>
  );
}
