import type {ReactNode} from 'react';
import {motion} from 'framer-motion';
import clsx from 'clsx';
import Heading from '@theme/Heading';

import styles from '../HomePage.module.css';

export default function BlogSection(): ReactNode {
  const articles = [
    {
      tag: 'Memo',
      title: '个人站技术方案',
      summary: '记录 Docusaurus、Cloudflare Pages、文档目录和后续扩展路线。',
    },
    {
      tag: 'Log',
      title: '建站日志',
      summary: '把每次结构调整、踩坑原因和修复方式留成可回溯的项目历史。',
    },
    {
      tag: 'Soon',
      title: '前端实验笔记',
      summary: '后续放滚动交互、动效拆解、组件工程化和性能优化记录。',
    },
  ];

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {opacity: 0, y: 50, scale: 0.9},
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className={clsx(styles.section, styles.blogSection)}>
      <div className={styles.sectionInner}>
        {/* 左侧内容 - 动画进入 */}
        <motion.div
          className={styles.sectionCopy}
          initial={{opacity: 0, x: -60}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true, margin: '-100px'}}
          transition={{duration: 0.8, ease: 'easeOut'}}>
          <motion.p
            className={styles.eyebrow}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: 0.2, duration: 0.5}}>
            Writing System
          </motion.p>
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: 0.3, duration: 0.6}}>
            <Heading as="h2" className={styles.sectionTitle}>
              技术内容会从这里长出来
            </Heading>
          </motion.div>
          <motion.p
            className={styles.sectionLead}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: 0.5, duration: 0.6}}>
            先把备忘录接进网站，再逐步沉淀成文章、案例和可复用的组件实验。
          </motion.p>
        </motion.div>

        {/* 右侧文章卡片 - 交错动画 */}
        <motion.div
          className={styles.articleStack}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: '-50px'}}>
          {articles.map((article, index) => (
            <motion.article
              className={styles.articleCard}
              key={article.title}
              variants={cardVariants}
              whileHover={{
                x: 15,
                transition: {type: 'spring', stiffness: 300},
              }}
              style={{
                marginLeft: index === 1 ? '36px' : index === 2 ? '72px' : '0',
              }}>
              <motion.span
                className={styles.articleIndex}
                initial={{scale: 0}}
                whileInView={{scale: 1}}
                viewport={{once: true}}
                transition={{
                  delay: 0.3 + index * 0.15,
                  type: 'spring',
                  stiffness: 200,
                }}>
                {String(index + 1).padStart(2, '0')}
              </motion.span>
              <div>
                <motion.span
                  className={styles.articleTag}
                  initial={{opacity: 0, x: -20}}
                  whileInView={{opacity: 1, x: 0}}
                  viewport={{once: true}}
                  transition={{delay: 0.4 + index * 0.15, duration: 0.4}}>
                  {article.tag}
                </motion.span>
                <motion.h3
                  initial={{opacity: 0, x: -20}}
                  whileInView={{opacity: 1, x: 0}}
                  viewport={{once: true}}
                  transition={{delay: 0.5 + index * 0.15, duration: 0.4}}>
                  {article.title}
                </motion.h3>
                <motion.p
                  initial={{opacity: 0, x: -20}}
                  whileInView={{opacity: 1, x: 0}}
                  viewport={{once: true}}
                  transition={{delay: 0.6 + index * 0.15, duration: 0.4}}>
                  {article.summary}
                </motion.p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
