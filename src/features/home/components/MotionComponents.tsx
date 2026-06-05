import {motion} from 'framer-motion';
import type {ReactNode} from 'react';

/**
 * 淡入上升动画
 */
export function FadeInUp({
  children,
  delay = 0,
  duration = 0.6,
  className,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{opacity: 0, y: 40}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, margin: '-100px'}}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}>
      {children}
    </motion.div>
  );
}

/**
 * 从左滑入动画
 */
export function SlideInLeft({
  children,
  delay = 0,
  duration = 0.7,
  className,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{opacity: 0, x: -80}}
      whileInView={{opacity: 1, x: 0}}
      viewport={{once: true, margin: '-50px'}}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      className={className}>
      {children}
    </motion.div>
  );
}

/**
 * 从右滑入动画
 */
export function SlideInRight({
  children,
  delay = 0,
  duration = 0.7,
  className,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{opacity: 0, x: 80}}
      whileInView={{opacity: 1, x: 0}}
      viewport={{once: true, margin: '-50px'}}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      className={className}>
      {children}
    </motion.div>
  );
}

/**
 * 缩放进入动画
 */
export function ScaleIn({
  children,
  delay = 0,
  duration = 0.5,
  className,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{opacity: 0, scale: 0.8}}
      whileInView={{opacity: 1, scale: 1}}
      viewport={{once: true, margin: '-100px'}}
      transition={{
        duration,
        delay,
        type: 'spring',
        stiffness: 100,
      }}
      className={className}>
      {children}
    </motion.div>
  );
}

/**
 * 交错子元素动画（用于列表/卡片组）
 */
export function StaggerChildren({
  children,
  delay = 0,
  staggerDelay = 0.1,
  className,
}: {
  children: ReactNode;
  delay?: number;
  staggerDelay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, margin: '-50px'}}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
      className={className}>
      {children}
    </motion.div>
  );
}

/**
 * 浮动效果（用于装饰元素）
 */
export function Float({
  children,
  duration = 6,
  className,
}: {
  children: ReactNode;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
        rotate: [0, 2, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={className}>
      {children}
    </motion.div>
  );
}

/**
 * 脉冲发光效果
 */
export function GlowPulse({
  children,
  duration = 2,
  className,
}: {
  children: ReactNode;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      animate={{
        boxShadow: [
          '0 0 20px rgba(125, 211, 252, 0.3)',
          '0 0 40px rgba(125, 211, 252, 0.6)',
          '0 0 20px rgba(125, 211, 252, 0.3)',
        ],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={className}>
      {children}
    </motion.div>
  );
}

/**
 * 旋转装饰元素
 */
export function SpinSlow({
  children,
  duration = 20,
  className,
}: {
  children: ReactNode;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      animate={{rotate: 360}}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'linear',
      }}
      className={className}>
      {children}
    </motion.div>
  );
}
