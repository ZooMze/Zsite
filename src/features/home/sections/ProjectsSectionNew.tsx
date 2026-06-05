import type {ReactNode} from 'react';
import {motion} from 'framer-motion';
import clsx from 'clsx';
import Heading from '@theme/Heading';

import WobbleCard from '../components/WobbleCard';
import styles from '../HomePage.module.css';

export default function ProjectsSectionNew(): ReactNode {
  const projects = [
    {
      name: '🎨 首页动效系统',
      state: 'Designing',
      description: '用 GSAP + Framer Motion 构建流畅的滚动叙事体验',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      name: '📚 Memo 文档库',
      state: 'Online',
      description: 'Docusaurus 驱动的知识管理系统，支持版本控制',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      name: ' 组件实验场',
      state: 'Next',
      description: 'InspiraUI 风格组件集合与交互原型',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
  ];

  const pipelineSteps = [
    {icon: '💡', label: 'Idea', color: '#fbbf24'},
    {icon: '🔨', label: 'Build', color: '#60a5fa'},
    {icon: '👁️', label: 'Review', color: '#a78bfa'},
    {icon: '🚀', label: 'Ship', color: '#34d399'},
  ];

  return (
    <section className={clsx(styles.section, styles.projectsSection)}>
      <div className={styles.sectionInner}>
        {/* 左侧 - 3D摇摆卡片 */}
        <motion.div
          className={styles.projectBoard}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: '-50px'}}
          variants={{
            visible: {
              transition: {staggerChildren: 0.2},
            },
          }}>
          {projects.map((project, index) => (
            <WobbleCard
              key={project.name}
              containerClassName="w-full"
              className={styles.projectCard}>
              <div
                className="absolute inset-0 opacity-10 rounded-lg"
                style={{
                  background: project.gradient,
                  filter: 'blur(30px)',
                }}
              />
              <div className={styles.projectCardHeader}>
                <motion.h3
                  initial={{opacity: 0, x: -20}}
                  whileInView={{opacity: 1, x: 0}}
                  viewport={{once: true}}
                  transition={{delay: 0.3 + index * 0.2}}>
                  {project.name}
                </motion.h3>
                <motion.span
                  initial={{scale: 0, rotate: -180}}
                  whileInView={{scale: 1, rotate: 0}}
                  viewport={{once: true}}
                  transition={{
                    delay: 0.5 + index * 0.2,
                    type: 'spring',
                    stiffness: 200,
                  }}
                  style={{
                    background: project.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: '800',
                  }}>
                  {project.state}
                </motion.span>
              </div>
              <motion.p
                initial={{opacity: 0, y: 10}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: 0.6 + index * 0.2}}>
                {project.description}
              </motion.p>

              {/* 进度条 */}
              <div
                className="w-full h-1 rounded-full mt-4"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  overflow: 'hidden',
                }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: project.gradient,
                  }}
                  initial={{width: 0}}
                  whileInView={{width: index === 1 ? '100%' : '60%'}}
                  viewport={{once: true}}
                  transition={{
                    delay: 0.8 + index * 0.2,
                    duration: 1.5,
                    ease: 'easeOut',
                  }}
                />
              </div>
              <div
                className="w-full h-1 rounded-full mt-4"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  overflow: 'hidden',
                }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: project.gradient,
                  }}
                  initial={{width: 0}}
                  whileInView={{width: index === 1 ? '100%' : '60%'}}
                  viewport={{once: true}}
                  transition={{
                    delay: 0.8 + index * 0.2,
                    duration: 1.5,
                    ease: 'easeOut',
                  }}
                />
              </div>
            </WobbleCard>
          ))}
        </motion.div>

        {/* 右侧 - 内容 */}
        <motion.div
          className={styles.sectionCopy}
          initial={{opacity: 0, x: 60}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true, margin: '-100px'}}
          transition={{duration: 0.8}}>
          <motion.p
            className={styles.eyebrow}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: 0.2}}>
            Project Lab
          </motion.p>
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: 0.3}}>
            <Heading as="h2" className={styles.sectionTitle}>
              不只是展示结果，更是记录过程
            </Heading>
          </motion.div>
          <motion.p
            className={styles.sectionLead}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: 0.5}}>
            每个项目都能看到思考路径、技术选型和迭代历程
          </motion.p>

          {/* 管道流程 - 带图标 */}
          <motion.div
            className={styles.pipeline}
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{delay: 0.7}}>
            {pipelineSteps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{scale: 0, opacity: 0}}
                whileInView={{scale: 1, opacity: 1}}
                viewport={{once: true}}
                transition={{
                  delay: 0.8 + index * 0.15,
                  type: 'spring',
                  stiffness: 200,
                }}
                whileHover={{
                  scale: 1.15,
                  y: -8,
                  transition: {type: 'spring', stiffness: 400},
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                <span style={{fontSize: '28px'}}>{step.icon}</span>
                <span
                  style={{
                    color: step.color,
                    fontWeight: '800',
                    fontSize: '0.85rem',
                  }}>
                  {step.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* 连接线 */}
          <motion.div
            className="absolute left-0 right-0 h-0.5"
            style={{
              top: '50%',
              background:
                'linear-gradient(90deg, #fbbf24, #60a5fa, #a78bfa, #34d399)',
              transform: 'translateY(-50%)',
              zIndex: -1,
            }}
            initial={{scaleX: 0}}
            whileInView={{scaleX: 1}}
            viewport={{once: true}}
            transition={{delay: 1, duration: 1}}
          />
        </motion.div>
      </div>
    </section>
  );
}
