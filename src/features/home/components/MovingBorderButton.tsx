import type {ReactNode} from 'react';
import {motion} from 'framer-motion';

interface MovingBorderButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  duration?: number;
}

export default function MovingBorderButton({
  children,
  href,
  className = '',
  duration = 3000,
}: MovingBorderButtonProps) {
  const buttonContent = (
    <motion.button
      className={`relative overflow-hidden rounded-lg px-6 py-3 font-bold ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
        border: 'none',
        cursor: 'pointer',
      }}
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.95}}>
      {/* 移动边框 */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `conic-gradient(
            from 0deg,
            transparent 0%,
            transparent 40%,
            #7dd3fc 50%,
            transparent 60%,
            transparent 100%
          )`,
          padding: '2px',
          borderRadius: '8px',
        }}
        animate={{rotate: 360}}
        transition={{
          duration: duration / 1000,
          repeat: Infinity,
          ease: 'linear',
        }}>
        <div
          className="w-full h-full rounded-lg"
          style={{
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.9))',
          }}
        />
      </motion.div>

      {/* 内容 */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} style={{textDecoration: 'none'}}>
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
}
