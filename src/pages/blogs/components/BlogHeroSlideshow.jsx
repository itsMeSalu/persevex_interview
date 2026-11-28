"use client";
import { useEffect, useRef, useState } from 'react';



export default function BlogHeroSlideshow({ blogs }) {
  const [failedImages,setFailedImages] = useState([]);
  const slides = blogs.filter(blog => blog.image && !failedImages.includes(blog.image));
  const [active, setActive] = useState(0);
  const paused = false;
  const [reducedMotion, setReducedMotion] = useState(false);
  const [visible, setVisible] = useState(true);
  const [inView,setInView] = useState(true);
  const root = useRef(null);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onMotion = () => setReducedMotion(media.matches);
    const onVisibility = () => setVisible(!document.hidden);
    onMotion();
    onVisibility();
    media.addEventListener('change', onMotion);
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      media.removeEventListener('change', onMotion);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  useEffect(() => {
    if (paused || reducedMotion || !visible || !inView || slides.length < 2) return;
    const timer = window.setInterval(() => setActive(index => (index + 1) % slides.length), 3500);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion, visible, inView, slides.length]);

  useEffect(() => { if (active >= slides.length) setActive(0); }, [active, slides.length]);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
      root.current?.toggleAttribute('data-offscreen', !entry.isIntersecting);
    });
    if (root.current) observer.observe(root.current);
    return () => observer.disconnect();
  }, []);
  return <div className={`relative isolate overflow-hidden w-full [max-width:1440px] [margin-left:auto] [margin-right:auto]
    rounded-[28px] [background:#192840] text-[#fff] grid items-center
    [&.is-paused_img]:[animation-play-state:paused] max-[520px]:rounded-[22px] blog-hero-slideshow${paused || reducedMotion || !visible ? ' is-paused' : ''}`} ref={root}>
    <div className="blog-hero-slideshow__images absolute [top:0] [right:0] [bottom:0] [left:0] z-[-2]" aria-hidden="true">
      {slides.map((blog, index) => <div key={blog.slug} className={`absolute [top:0] [right:0] [bottom:0] [left:0] z-[-2] opacity-[0] [transition:opacity_.9s_ease]
        [&.is-active]:opacity-[1] [&_img]:w-full [&_img]:h-full [&_img]:object-cover
        [&_img]:[animation:blog-hero-zoom-in_7s_ease-in-out_infinite_alternate_both]
        [&:nth-child(even)_img]:[animation-name:blog-hero-zoom-out]
        [@media(prefers-reduced-motion:reduce)]:[transition:none]
        [@media(prefers-reduced-motion:reduce)]:[&_img]:[animation:none]
        [@media(prefers-reduced-motion:reduce)]:[&_img]:[transform:none] blog-hero-slide${index === active ? ' is-active' : ''}`}><img src={blog.image} alt="" onError={()=>setFailedImages(current=>[...current,blog.image])} loading="eager" decoding="async" fetchPriority={index === 0 ? 'high' : 'auto'} /></div>)}
    </div>
    <div className="blog-hero-slideshow__shade absolute [top:0] [right:0] [bottom:0] [left:0] z-[-1]
      [background:linear-gradient(180deg,_#30241C33_0%,_#63432C70_40%,_#9B4F24D9_100%)]" aria-hidden="true" />
    <div className="blog-hero-slideshow__copy [padding-top:48px] [padding-right:6%] [padding-bottom:76px] [padding-left:6%]
      text-center [&_.blogs-eyebrow]:text-[#efd1b4] [&_.blogs-eyebrow]:text-[length:11px] [&_h1]:text-[#fff]
      [&_h1]:text-[length:clamp(34px,_4.7vw,_72px)] [&_h1]:font-[850] [&_h1]:italic [&_h1]:leading-[1.08]
      [&_h1]:tracking-[-.035em] [&_h1]:[text-shadow:0_4px_6px_#071c4766] [&_h1]:[margin-top:24px]
      [&_h1]:[margin-right:auto] [&_h1]:[margin-bottom:24px] [&_h1]:[margin-left:auto] [&_h1]:[max-width:1100px]
      [&_h1]:[animation-delay:.2s] [&_p]:text-[#fff] [&_p]:text-[length:clamp(13px,_1.5vw,_22px)] [&_p]:leading-[1.6]
      [&_p]:[max-width:950px] [&_p]:[margin-top:0] [&_p]:[margin-right:auto] [&_p]:[margin-bottom:0]
      [&_p]:[margin-left:auto] [&_p]:[animation-delay:.85s]
      [&_>_*]:[animation:blog-copy-rise_.95s_cubic-bezier(.16,_1,_.3,_1)_both]
      [&_.blog-hero-slideshow\_\_cta]:[animation-delay:1.2s] max-[520px]:[padding-top:30px]
      max-[520px]:[padding-right:20px] max-[520px]:[padding-bottom:70px] max-[520px]:[padding-left:20px]
      max-[520px]:[&_h1]:text-[length:clamp(30px,_8.8vw,_44px)] max-[520px]:[&_h1]:[margin-top:20px]
      max-[520px]:[&_h1]:[margin-bottom:20px] max-[520px]:[&_.blogs-eyebrow]:text-[length:9px]
      [@media(max-height:560px)_and_(min-width:521px)]:[padding-top:18px]
      [@media(max-height:560px)_and_(min-width:521px)]:[padding-right:28px]
      [@media(max-height:560px)_and_(min-width:521px)]:[padding-bottom:46px]
      [@media(max-height:560px)_and_(min-width:521px)]:[padding-left:28px]
      [@media(max-height:560px)_and_(min-width:521px)]:[&_h1]:text-[length:30px]
      [@media(max-height:560px)_and_(min-width:521px)]:[&_h1]:[margin-top:10px]
      [@media(max-height:560px)_and_(min-width:521px)]:[&_h1]:[margin-bottom:10px]
      [@media(max-height:560px)_and_(min-width:521px)]:[&_p]:text-[length:12px]
      [@media(prefers-reduced-motion:reduce)]:[&_>_*]:[animation:none]">
      <span className="blogs-eyebrow inline-flex [row-gap:8px] [column-gap:8px] items-center text-[#fa7405] text-[length:10px]
        font-semibold tracking-[.12em] [.blogs-hero_>_&]:[animation-delay:.1s]">THE ANTINTERN JOURNAL</span>
      <h1 id="blogs-title">Learn from real projects.<br />Build your next chapter.</h1>
      <p>Practical insights on skills, internships, and careers. From AntIntern to you.</p>
      <a className="blog-hero-slideshow__cta inline-flex items-center [row-gap:18px] [column-gap:18px] [padding-top:14px]
        [padding-right:28px] [padding-bottom:14px] [padding-left:28px] [margin-top:30px] [border-top-width:1px]
        [border-top-style:solid] [border-top-color:#8cbcff66] [border-right-width:1px] [border-right-style:solid]
        [border-right-color:#8cbcff66] [border-bottom-width:1px] [border-bottom-style:solid]
        [border-bottom-color:#8cbcff66] [border-left-width:1px] [border-left-style:solid] [border-left-color:#8cbcff66]
        rounded-[10px] [background:#fa7405] shadow-[0_5px_16px_#0b24504d] text-[#fff]
        text-[length:clamp(12px,_1.3vw,_18px)] font-extrabold uppercase tracking-[.025em] [transition:background_.2s]
        [&:hover]:[background:#3056bf] max-[520px]:[padding-top:12px] max-[520px]:[padding-right:20px]
        max-[520px]:[padding-bottom:12px] max-[520px]:[padding-left:20px] max-[520px]:[margin-top:24px]
        [@media(max-height:560px)_and_(min-width:521px)]:[margin-top:12px]
        [@media(max-height:560px)_and_(min-width:521px)]:[padding-top:8px]
        [@media(max-height:560px)_and_(min-width:521px)]:[padding-right:18px]
        [@media(max-height:560px)_and_(min-width:521px)]:[padding-bottom:8px]
        [@media(max-height:560px)_and_(min-width:521px)]:[padding-left:18px]
        [@media(max-height:560px)_and_(min-width:521px)]:text-[length:11px]" href="#all-stories">Explore our stories <span aria-hidden="true">↗</span></a>
    </div>
  </div>;
}
