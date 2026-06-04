import type {ReactNode} from 'react';
import {useEffect, useRef} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function Section1() {
  const ref = useRef<HTMLDivElement>(null);
  const {siteConfig} = useDocusaurusContext();

  return (
    <section ref={ref} className={clsx(styles.section, styles.section1)}>
      <div className={styles.content}>
        <Heading as="h1" className={styles.title}>
          {siteConfig.title}
        </Heading>
        <p className={styles.subtitle}>{siteConfig.tagline}</p>
        <div className={styles.scrollHint}>↓ 向下滚动</div>
      </div>
    </section>
  );
}

function Section2() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section ref={ref} className={clsx(styles.section, styles.section2)}>
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

function Section3() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section ref={ref} className={clsx(styles.section, styles.section3)}>
      <div className={styles.content}>
        <Heading as="h2" className={styles.title}>
          项目展示
        </Heading>
        <p className={styles.description}>
          一些有趣的项目和实验
        </p>
      </div>
    </section>
  );
}

function Section4() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section ref={ref} className={clsx(styles.section, styles.section4)}>
      <div className={styles.content}>
        <Heading as="h2" className={styles.title}>
          关于我
        </Heading>
        <p className={styles.description}>
          一名热爱技术的前端开发者
        </p>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  useEffect(() => {
    document.body.classList.add('route-home-page');
    return () => {
      document.body.classList.remove('route-home-page');
    };
  }, []);

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Personal website"
      wrapperClassName={styles.homeWrapper}>
      <div className={styles.homeContainer}>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </Layout>
  );
}
