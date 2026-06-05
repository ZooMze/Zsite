import {useEffect, useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

// 注册GSAP插件
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * 滚动渐入动画 Hook
 */
export function useScrollReveal(options?: {
  trigger?: string;
  from?: gsap.TweenVars;
  duration?: number;
  delay?: number;
  stagger?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const defaults = {
      from: {opacity: 0, y: 50},
      duration: 0.8,
      delay: 0,
      stagger: 0.1,
    };

    const config = {...defaults, ...options};

    gsap.fromTo(element, config.from, {
      opacity: 1,
      y: 0,
      duration: config.duration,
      delay: config.delay,
      scrollTrigger: {
        trigger: options?.trigger || element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return ref;
}

/**
 * 视差滚动效果 Hook
 */
export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.to(element, {
      y: () => -window.innerHeight * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [speed]);

  return ref;
}

/**
 * 文字逐字动画 Hook
 */
export function useTextReveal(text: string, delay: number = 0) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // 将文字拆分为单个字符
    const chars = text.split('');
    element.innerHTML = chars
      .map(char => `<span class="char" style="display:inline-block;opacity:0">${char === ' ' ? '&nbsp;' : char}</span>`)
      .join('');

    const charElements = element.querySelectorAll('.char');

    gsap.to(charElements, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.03,
      delay,
      ease: 'back.out(1.7)',
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [text, delay]);

  return ref;
}
