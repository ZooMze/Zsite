import {useEffect, useState} from 'react';
import {motion} from 'framer-motion';

interface SparklesTextProps {
  text: string;
  className?: string;
  sparklesCount?: number;
}

export default function SparklesText({
  text,
  className = '',
  sparklesCount = 10,
}: SparklesTextProps) {
  const [sparkles, setSparkles] = useState<Array<{id: number; x: number; y: number}>>([]);

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = [];
      for (let i = 0; i < sparklesCount; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
        });
      }
      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 3000);
    return () => clearInterval(interval);
  }, [sparklesCount]);

  return (
    <span style={{position: 'relative', display: 'inline-block'}}>
      {text}
      {sparkles.map(sparkle => (
        <span
          key={sparkle.id}
          style={{
            position: 'absolute',
            pointerEvents: 'none',
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}>
          <motion.span
            initial={{scale: 0, opacity: 0}}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              style={{color: '#7dd3fc'}}>
              <path
                d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z"
                fill="currentColor"
              />
            </svg>
          </motion.span>
        </span>
      ))}
    </span>
  );
}
