import type {ReactNode} from 'react';
import {motion} from 'framer-motion';
import clsx from 'clsx';
import Heading from '@theme/Heading';

import styles from '../HomePage.module.css';

export default function AboutSection(): ReactNode {
  const skills = ['Vue', 'React', 'TypeScript', 'Docusaurus', 'CSS Motion'];
  const steps = ['记录问题', '拆清边界', '做小验证', '沉淀文档'];

  return (
    <section className={clsx(styles.section, styles.aboutSection)}>
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
            About
          </motion.p>
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: 0.3, duration: 0.6}}>
            <Heading as="h2" className={styles.sectionTitle}>
              偏爱把复杂问题拆成清楚的小块
            </Heading>
          </motion.div>
          <motion.p
            className={styles.sectionLead}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: 0.5, duration: 0.6}}>
            这个站会记录前端工程、交互实验和个人项目推进过程。先追求结构干净，再慢慢把内容做厚。
          </motion.p>

          {/* 技能标签 - 浮动动画 */}
          <motion.div
            className={styles.skillCloud}
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{delay: 0.7, duration: 0.6}}>
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{opacity: 0, scale: 0, rotate: -10}}
                whileInView={{opacity: 1, scale: 1, rotate: 0}}
                viewport={{once: true}}
                transition={{
                  delay: 0.8 + index * 0.1,
                  type: 'spring' as const,
                  stiffness: 200,
                }}
                whileHover={{
                  scale: 1.15,
                  y: -5,
                  boxShadow: '0 10px 30px rgba(186, 230, 253, 0.3)',
                  transition: {type: 'spring' as const, stiffness: 400},
                }}
                style={{cursor: 'pointer'}}>
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* 右侧步骤面板 - 交错动画 */}
        <motion.div
          className={styles.rhythmPanel}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: '-50px'}}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}>
          {steps.map((step, index) => (
            <motion.div
              className={styles.rhythmStep}
              key={step}
              variants={{
                hidden: {opacity: 0, x: 80, scale: 0.9},
                visible: {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  transition: {
                    type: 'spring' as const,
                    stiffness: 100,
                    damping: 15,
                  },
                },
              }}
              whileHover={{
                x: 10,
                borderColor: 'rgba(125, 211, 252, 0.7)',
                boxShadow: '0 10px 40px rgba(8, 47, 73, 0.3)',
                transition: {type: 'spring' as const, stiffness: 300},
              }}>
              <motion.span
                initial={{scale: 0}}
                whileInView={{scale: 1}}
                viewport={{once: true}}
                transition={{
                  delay: 0.2 + index * 0.15,
                  type: 'spring' as const,
                  stiffness: 200,
                }}>
                {String(index + 1).padStart(2, '0')}
              </motion.span>
              <motion.strong
                initial={{opacity: 0, x: 20}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                transition={{delay: 0.3 + index * 0.15, duration: 0.4}}>
                {step}
              </motion.strong>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
