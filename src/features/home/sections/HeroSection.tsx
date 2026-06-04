import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';

import styles from '../HomePage.module.css';

type HeroSectionProps = {
  title: string;
  tagline: string;
};

export default function HeroSection({
  title,
  tagline,
}: HeroSectionProps): ReactNode {
  return (
    <section className={clsx(styles.section, styles.heroSection)}>
      <div className={styles.content}>
        <Heading as="h1" className={styles.title}>
          {title}
        </Heading>
        <p className={styles.subtitle}>{tagline}</p>
        <div className={styles.scrollHint}>↓ 向下滚动</div>
      </div>
    </section>
  );
}
