import type {ReactNode} from 'react';
import {motion} from 'framer-motion';
import clsx from 'clsx';
import Heading from '@theme/Heading';

import styles from '../HomePage.module.css';

export default function ProjectsSection(): ReactNode {
  const projects = [
    {
      name: '首页动效系统',
      state: 'Designing',
      description: '用轻量 CSS 动效搭出滚动叙事的第一版视觉骨架。',
    },
    {
      name: 'Memo 文档库',
      state: 'Online',
      description: '把 memoDoc 接到 /memo 路由，形成稳定的知识沉淀入口。',
    },
    {
      name: '组件实验场',
      state: 'Next',
      description: '后续承接交互组件、可视化 Demo 和工程实践样例。',
    },
  ];

  const pipelineSteps = ['Idea', 'Build', 'Review', 'Ship'];

  return (
    <section className={clsx(styles.section, styles.projectsSection)}>
      <div className={styles.sectionInner}>
        {/* 左侧项目卡片 - 3D动画 */}
        <motion.div
          className={styles.projectBoard}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: '-50px'}}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}>
          {projects.map((project, index) => (
            <motion.article
              className={styles.projectCard}
              key={project.name}
              variants={{
                hidden: {
                  opacity: 0,
                  rotateY: -15,
                  x: -50,
                  scale: 0.9,
                },
                visible: {
                  opacity: 1,
                  rotateY: 0,
                  x: 0,
                  scale: 1,
                  transition: {
                    type: 'spring' as const,
                    stiffness: 80,
                    damping: 15,
                    delay: index * 0.1,
                  },
                },
              }}
              whileHover={{
                scale: 1.03,
                rotateY: 5,
                boxShadow: '0 30px 70px rgba(67, 20, 7, 0.4)',
                transition: {type: 'spring' as const, stiffness: 300},
              }}
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d',
              }}>
              <div className={styles.projectCardHeader}>
                <motion.h3
                  initial={{opacity: 0, x: -20}}
                  whileInView={{opacity: 1, x: 0}}
                  viewport={{once: true}}
                  transition={{delay: 0.3 + index * 0.2, duration: 0.4}}>
                  {project.name}
                </motion.h3>
                <motion.span
                  initial={{scale: 0, rotate: -180}}
                  whileInView={{scale: 1, rotate: 0}}
                  viewport={{once: true}}
                  transition={{
                    delay: 0.5 + index * 0.2,
                    type: 'spring' as const,
                    stiffness: 200,
                  }}>
                  {project.state}
                </motion.span>
              </div>
              <motion.p
                initial={{opacity: 0, y: 10}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: 0.6 + index * 0.2, duration: 0.4}}>
                {project.description}
              </motion.p>
            </motion.article>
          ))}
        </motion.div>

        {/* 右侧内容 - 动画进入 */}
        <motion.div
          className={styles.sectionCopy}
          initial={{opacity: 0, x: 60}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true, margin: '-100px'}}
          transition={{duration: 0.8, ease: 'easeOut'}}>
          <motion.p
            className={styles.eyebrow}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: 0.2, duration: 0.5}}>
            Project Lab
          </motion.p>
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: 0.3, duration: 0.6}}>
            <Heading as="h2" className={styles.sectionTitle}>
              不只是摆项目，也展示过程
            </Heading>
          </motion.div>
          <motion.p
            className={styles.sectionLead}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: 0.5, duration: 0.6}}>
            这里会放真实作品、半成品实验和拆解记录，让每个项目都能看到思考路径。
          </motion.p>

          {/* 管道动画 */}
          <motion.div
            className={styles.pipeline}
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{delay: 0.7, duration: 0.6}}>
            {pipelineSteps.map((step, index) => (
              <motion.span
                key={step}
                initial={{scale: 0, opacity: 0}}
                whileInView={{scale: 1, opacity: 1}}
                viewport={{once: true}}
                transition={{
                  delay: 0.8 + index * 0.15,
                  type: 'spring' as const,
                  stiffness: 200,
                }}
                whileHover={{
                  scale: 1.2,
                  transition: {type: 'spring' as const, stiffness: 400},
                }}>
                {step}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
