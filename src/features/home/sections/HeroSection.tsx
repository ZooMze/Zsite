import type {ReactNode} from 'react';
import {useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import {motion, AnimatePresence} from 'framer-motion';
import gsap from 'gsap';

import styles from '../HomePage.module.css';

type HeroSectionProps = {
  title: string;
  tagline: string;
};

// 打字机效果组件
function TypewriterText({text, delay = 0}: {text: string; delay?: number}) {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
          // 闪烁光标
          setInterval(() => {
            setShowCursor(prev => !prev);
          }, 530);
        }
      }, 80);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [text, delay]);

  return (
    <span>
      {displayText}
      <span
        style={{
          opacity: showCursor ? 1 : 0,
          transition: 'opacity 0.1s',
          color: '#7dd3fc',
        }}>
        |
      </span>
    </span>
  );
}

// 数字计数动画组件
function AnimatedNumber({value, label}: {value: string; label: string}) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = parseInt(value) || 0;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1500;
          const startTime = Date.now();

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutExpo
            const eased =
              progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            start = Math.floor(eased * numericValue);
            setDisplayValue(start);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      {threshold: 0.5}
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [numericValue]);

  return (
    <div className={styles.metricCard} ref={ref}>
      <span>{label}</span>
      <motion.strong
        initial={{scale: 0.5, opacity: 0}}
        whileInView={{scale: 1, opacity: 1}}
        viewport={{once: true}}
        transition={{type: 'spring', stiffness: 200, damping: 15}}>
        {typeof numericValue === 'number' ? displayValue : value}
      </motion.strong>
    </div>
  );
}

export default function HeroSection({
  title,
  tagline,
}: HeroSectionProps): ReactNode {
  const metrics = [
    {label: 'Memo', value: '2'},
    {label: 'Sections', value: '4'},
    {label: 'Build', value: '0'},
  ];

  return (
    <section className={clsx(styles.section, styles.heroSection)}>
      {/* 背景装饰元素 */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '400px',
          height: '400px',
          background:
            'radial-gradient(circle, rgba(125, 211, 252, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          animation: 'float 8s ease-in-out infinite',
          pointerEvents: 'none',
        }} />

      <div className={styles.sectionInner}>
        {/* 左侧内容 - 动画进入 */}
        <motion.div
          className={styles.heroCopy}
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98]}}>
          <motion.p
            className={styles.eyebrow}
            initial={{opacity: 0, x: -30}}
            animate={{opacity: 1, x: 0}}
            transition={{delay: 0.3, duration: 0.6}}>
            Personal Site / Frontend Lab
          </motion.p>

          <motion.div
            initial={{opacity: 0, scale: 0.9}}
            animate={{opacity: 1, scale: 1}}
            transition={{delay: 0.5, duration: 0.7}}>
            <Heading as="h1" className={styles.heroTitle}>
              <TypewriterText text={title} delay={800} />
            </Heading>
          </motion.div>

          <motion.p
            className={styles.heroLead}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 1.5, duration: 0.6}}>
            把技术笔记、项目实验和建站过程整理成一个长期维护的小站。
          </motion.p>

          <motion.div
            className={styles.heroActions}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 1.8, duration: 0.6}}>
            <Link className={styles.primaryAction} to="/memo/tech-plan">
              查看建站方案
            </Link>
            <Link className={styles.secondaryAction} to="/memo/site-log">
              阅读建站日志
            </Link>
          </motion.div>
        </motion.div>

        {/* 右侧视觉元素 - 动画进入 */}
        <motion.div
          className={styles.heroVisual}
          aria-label="Homepage build preview"
          initial={{opacity: 0, x: 80, rotateY: -15}}
          animate={{opacity: 1, x: 0, rotateY: 0}}
          transition={{
            delay: 0.6,
            duration: 1,
            type: 'spring',
            stiffness: 80,
          }}
          style={{perspective: '1000px'}}>
          <motion.div
            className={styles.codeWindow}
            whileHover={{
              scale: 1.02,
              boxShadow: '0 30px 80px rgba(8, 47, 73, 0.6)',
            }}
            transition={{type: 'spring', stiffness: 300}}>
            <div className={styles.windowHeader}>
              <span />
              <span />
              <span />
              <strong>home.preview.tsx</strong>
            </div>
            <div className={styles.codeLines}>
              <motion.p
                initial={{opacity: 0, x: -20}}
                animate={{opacity: 1, x: 0}}
                transition={{delay: 1.2, duration: 0.5}}>
                <span>const</span> site = "{tagline}";
              </motion.p>
              <motion.p
                initial={{opacity: 0, x: -20}}
                animate={{opacity: 1, x: 0}}
                transition={{delay: 1.4, duration: 0.5}}>
                <span>render</span>(&lt;MemoRoute blurHeader /&gt;);
              </motion.p>
              <motion.p
                initial={{opacity: 0, x: -20}}
                animate={{opacity: 1, x: 0}}
                transition={{delay: 1.6, duration: 0.5}}>
                <span>animate</span>({`{ sections: 4, motion: 'soft' }`});
              </motion.p>
            </div>
          </motion.div>

          {/* 指标卡片 - 交错动画 */}
          <div className={styles.metricGrid}>
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{opacity: 0, y: 30, scale: 0.8}}
                animate={{opacity: 1, y: 0, scale: 1}}
                transition={{
                  delay: 1.8 + index * 0.15,
                  type: 'spring',
                  stiffness: 150,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: {type: 'spring', stiffness: 400},
                }}>
                <AnimatedNumber value={metric.value} label={metric.label} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollHint}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 2.5, duration: 0.6}}
        style={{
          animation: 'bounce 2s infinite',
        }}>
        向下滚动
      </motion.div>
    </section>
  );
}
