import {useEffect, useRef} from 'react';
import {motion, useAnimation} from 'framer-motion';

interface AnimatedBeamProps {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  color?: string;
  delay?: number;
}

export default function AnimatedBeam({
  fromX,
  fromY,
  toX,
  toY,
  color = '#7dd3fc',
  delay = 0,
}: AnimatedBeamProps) {
  const controls = useAnimation();
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const animate = async () => {
      await controls.start({
        strokeDashoffset: [1000, 0],
        transition: {
          duration: 2,
          delay,
          ease: 'easeInOut',
        },
      });
    };
    animate();
  }, [controls, delay]);

  const path = `M ${fromX} ${fromY} Q ${(fromX + toX) / 2} ${(fromY + toY) / 2 - 50} ${toX} ${toY}`;

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{overflow: 'visible'}}>
      {/* 背景路径 */}
      <path
        d={path}
        stroke={`${color}20`}
        strokeWidth="2"
        fill="none"
      />
      {/* 动画光束 */}
      <motion.path
        ref={pathRef}
        d={path}
        stroke={color}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="1000"
        strokeDashoffset="1000"
        animate={controls}
        filter="drop-shadow(0 0 6px ${color})"
      />
      {/* 光点 */}
      <motion.circle
        r="4"
        fill={color}
        filter={`drop-shadow(0 0 8px ${color})`}
        initial={{offsetDistance: '0%'}}
        animate={{offsetDistance: '100%'}}
        transition={{
          duration: 2,
          delay,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
        style={{
          offsetPath: `path('${path}')`,
        }}
      />
    </svg>
  );
}
