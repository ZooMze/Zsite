import type {ReactNode} from 'react';
import {useEffect, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import {motion} from 'framer-motion';

import SparklesText from '../components/SparklesText';
import MovingBorderButton from '../components/MovingBorderButton';
import styles from '../HomePage.module.css';

type HeroSectionProps = {
  title: string;
  tagline: string;
};

// 代码雨背景效果
function CodeRain() {
  const [columns, setColumns] = useState<Array<string[]>>([]);

  useEffect(() => {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ';
    const numColumns = 15; // 减少列数
    const newColumns: string[][] = [];

    for (let i = 0; i < numColumns; i++) {
      const column: string[] = [];
      for (let j = 0; j < 20; j++) { // 减少每列字符数
        column.push(chars[Math.floor(Math.random() * chars.length)]);
      }
      newColumns.push(column);
    }
    setColumns(newColumns);
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        opacity: 0.1,
        pointerEvents: 'none',
        zIndex: 0,
        display: 'grid',
        gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
        gap: '20px',
        padding: '20px',
      }}>
      {columns.map((column, colIndex) => (
        <motion.div
          key={colIndex}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
          initial={{y: -100}}
          animate={{y: [0, 1000]}}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 5,
          }}>
          {column.map((char, charIndex) => (
            <span
              key={charIndex}
              style={{
                color: '#7dd3fc',
                fontSize: '14px',
                fontFamily: 'monospace',
                opacity: 0.3 + (charIndex / column.length) * 0.7,
              }}>
              {char}
            </span>
          ))}
        </motion.div>
      ))}
    </div>
  );
}

// 浮动粒子
function FloatingParticles() {
  const particles = Array.from({length: 30}, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 10,
  }));

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0,
      }}>
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          style={{
            position: 'absolute',
            borderRadius: '50%',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: 'radial-gradient(circle, #7dd3fc, transparent)',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// 技术指标展示
function TechMetrics() {
  const metrics = [
    {label: 'TypeScript', value: '95%', color: '#3178c6'},
    {label: 'React', value: '90%', color: '#61dafb'},
    {label: 'Docusaurus', value: '85%', color: '#25c2a0'},
  ];

  return (
    <div className={styles.metricGrid}>
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          className={styles.metricCard}
          initial={{opacity: 0, scale: 0.5}}
          whileInView={{opacity: 1, scale: 1}}
          viewport={{once: true}}
          transition={{
            delay: 2 + index * 0.2,
            type: 'spring',
            stiffness: 200,
          }}
          whileHover={{
            scale: 1.08,
            boxShadow: `0 0 30px ${metric.color}40`,
          }}>
          <span>{metric.label}</span>
          <motion.strong
            style={{color: metric.color}}
            initial={{width: 0}}
            whileInView={{width: '100%'}}
            viewport={{once: true}}
            transition={{
              delay: 2.5 + index * 0.2,
              duration: 1.5,
              ease: 'easeOut',
            }}>
            {metric.value}
          </motion.strong>
        </motion.div>
      ))}
    </div>
  );
}

export default function HeroSection({
  title,
  tagline,
}: HeroSectionProps): ReactNode {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      className={clsx(styles.section, styles.heroSection)}
      style={{position: 'relative', overflow: 'hidden'}}>
      {/* 背景效果层 */}
      <CodeRain />
      <FloatingParticles />

      {/* 鼠标跟随光晕 */}
      <motion.div
        style={{
          position: 'absolute',
          pointerEvents: 'none',
          zIndex: 1,
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(125, 211, 252, 0.15), transparent 70%)',
          filter: 'blur(40px)',
          left: `calc(50% + ${mousePosition.x}px - 200px)`,
          top: `calc(50% + ${mousePosition.y}px - 200px)`,
          transition: 'left 0.3s ease-out, top 0.3s ease-out',
        }}
      />

      <div className={styles.sectionInner} style={{position: 'relative', zIndex: 10}}>
        {/* 左侧内容 */}
        <motion.div
          className={styles.heroCopy}
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}>
          <motion.p
            className={styles.eyebrow}
            initial={{opacity: 0, x: -30}}
            animate={{opacity: 1, x: 0}}
            transition={{delay: 0.3}}>
            <SparklesText text="Personal Site / Frontend Lab" sparklesCount={5} />
          </motion.p>

          <motion.div
            initial={{opacity: 0, scale: 0.9}}
            animate={{opacity: 1, scale: 1}}
            transition={{delay: 0.5}}>
            <Heading as="h1" className={styles.heroTitle}>
              <SparklesText text={title} sparklesCount={15} />
            </Heading>
          </motion.div>

          <motion.p
            className={styles.heroLead}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 1.2}}>
            {tagline} — 记录技术探索与创造之旅
          </motion.p>

          <motion.div
            className={styles.heroActions}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 1.5}}
            style={{gap: '20px'}}>
            <MovingBorderButton href="/memo/tech-plan">
              查看建站方案
            </MovingBorderButton>
            <MovingBorderButton href="/memo/site-log" duration={4000}>
              阅读建站日志
            </MovingBorderButton>
          </motion.div>
        </motion.div>

        {/* 右侧视觉元素 */}
        <motion.div
          className={styles.heroVisual}
          initial={{opacity: 0, rotateY: -15}}
          animate={{opacity: 1, rotateY: 0}}
          transition={{delay: 0.8, duration: 1}}
          style={{perspective: '1000px'}}>
          {/* 终端窗口 */}
          <motion.div
            className={styles.codeWindow}
            whileHover={{
              scale: 1.02,
              boxShadow: '0 0 40px rgba(125, 211, 252, 0.3)',
            }}
            style={{
              border: '1px solid rgba(125, 211, 252, 0.3)',
              boxShadow: '0 0 20px rgba(125, 211, 252, 0.1)',
            }}>
            <div className={styles.windowHeader}>
              <span />
              <span />
              <span />
              <strong>~/zsite $</strong>
            </div>
            <div className={styles.codeLines}>
              <motion.p
                initial={{opacity: 0, x: -20}}
                animate={{opacity: 1, x: 0}}
                transition={{delay: 1.5}}>
                <span style={{color: '#34d399'}}>$</span> npm create docusaurus
              </motion.p>
              <motion.p
                initial={{opacity: 0, x: -20}}
                animate={{opacity: 1, x: 0}}
                transition={{delay: 1.8}}>
                <span style={{color: '#facc15'}}>✓</span> Project initialized
              </motion.p>
              <motion.p
                initial={{opacity: 0, x: -20}}
                animate={{opacity: 1, x: 0}}
                transition={{delay: 2.1}}>
                <span style={{color: '#7dd3fc'}}>{'>'}</span> Ready to build
              </motion.p>
            </div>
          </motion.div>

          {/* 技术指标 */}
          <TechMetrics />
        </motion.div>
      </div>

      {/* 滚动提示 */}
      <motion.div
        className={styles.scrollHint}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 3}}
        style={{
          animation: 'bounce 2s infinite',
        }}>
        ↓ 向下探索
      </motion.div>
    </section>
  );
}
