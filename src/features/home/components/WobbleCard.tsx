import type {ReactNode} from 'react';
import {motion} from 'framer-motion';

interface WobbleCardProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function WobbleCard({
  children,
  className = '',
  containerClassName = '',
}: WobbleCardProps) {
  return (
    <motion.div
      className={`relative ${containerClassName}`}
      whileHover={{
        rotateX: 5,
        rotateY: -5,
        scale: 1.02,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}>
      {/* 背景渐变 */}
      <div
        className="absolute inset-0 rounded-xl opacity-50"
        style={{
          background: `linear-gradient(
            135deg,
            rgba(125, 211, 252, 0.2),
            rgba(56, 189, 248, 0.1),
            rgba(14, 165, 233, 0.2)
          )`,
          filter: 'blur(20px)',
        }}
      />
      
      {/* 卡片内容 */}
      <div
        className={`relative ${className}`}
        style={{
          transform: 'translateZ(20px)',
        }}>
        {children}
      </div>
    </motion.div>
  );
}
