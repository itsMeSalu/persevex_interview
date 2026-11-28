"use client";

import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

export default function StudyAnimation() {
  const container = useRef(null);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let inView = true;
    const animation = lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: false,
      // Load the original animation independently for each mount.
      path: "/careers/study.json",
      rendererSettings: { preserveAspectRatio: 'xMidYMid meet', progressiveLoad: false },
    });
    const sync = () => {
      if (preference.matches) animation.goToAndStop(45, true);
      else if (inView && !document.hidden) animation.play();
      else animation.pause();
    };
    animation.addEventListener('DOMLoaded', sync);
    const observer = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; sync(); }, { threshold: .05 });
    observer.observe(container.current);
    preference.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);
    sync();
    return () => {
      observer.disconnect();
      preference.removeEventListener('change', sync);
      document.removeEventListener('visibilitychange', sync);
      animation.removeEventListener('DOMLoaded', sync);
      animation.destroy();
    };
  }, []);

  return <div className="careers-study relative [min-width:0] [width:106%] [margin-left:-3%] [aspect-ratio:auto]
    [height:clamp(300px,_calc(100svh_-_var(--careers-nav-height,_100px)_-_72px),_600px)] [max-height:none]
    max-[800px]:w-full max-[800px]:h-full max-[800px]:[max-width:500px] max-[800px]:[margin-top:0]
    max-[800px]:[margin-right:auto] max-[800px]:[margin-bottom:0] max-[800px]:[margin-left:auto]
    max-[800px]:[min-height:0]">
    <div className="careers-study__art w-full h-full [&_svg]:block [&_svg]:w-full [&_svg]:h-full" ref={container} role="img" aria-label="Animated illustration of an online learner studying at a desk" />

  </div>;
}
