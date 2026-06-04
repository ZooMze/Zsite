import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';

import styles from '../HomePage.module.css';

export default function BlogSection(): ReactNode {
  return (
    <section className={clsx(styles.section, styles.blogSection)}>
      <div className={styles.content}>
        <Heading as="h2" className={styles.title}>
          技术博客
        </Heading>
        <p className={styles.description}>
          分享前端技术、React 生态、工程化实践
        </p>
      </div>
    </section>
  );
}
