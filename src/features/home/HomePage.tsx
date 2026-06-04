import type {ReactNode} from 'react';
import {useEffect} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import AboutSection from './sections/AboutSection';
import BlogSection from './sections/BlogSection';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
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
        <HeroSection title={siteConfig.title} tagline={siteConfig.tagline} />
        <BlogSection />
        <ProjectsSection />
        <AboutSection />
      </main>
    </Layout>
  );
}
