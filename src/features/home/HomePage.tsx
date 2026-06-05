import type {ReactNode} from 'react';
import {useEffect} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import AboutSection from './sections/AboutSection';
import BlogSection from './sections/BlogSection';
import HeroSectionNew from './sections/HeroSectionNew';
import ProjectsSectionNew from './sections/ProjectsSectionNew';
import styles from './HomePage.module.css';

export default function HomePage(): ReactNode {
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
      <main className={styles.homeContainer}>
        <HeroSectionNew title={siteConfig.title} tagline={siteConfig.tagline} />
        <BlogSection />
        <ProjectsSectionNew />
        <AboutSection />
      </main>
    </Layout>
  );
}
