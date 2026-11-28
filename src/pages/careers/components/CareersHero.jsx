"use client";


import { Suspense, useLayoutEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

import StudyAnimation from './StudyAnimation';

export default function CareersHero({ applicationHref, aboutHref, onApply, onAbout }) {
  const root = useRef(null);
  useLayoutEffect(() => {
    const navbar = document.querySelector('header') || document.querySelector('nav');
    const syncHeight = () => {
      root.current?.style.setProperty('--careers-nav-height', `${navbar?.getBoundingClientRect().height || 100}px`);
    };
    syncHeight();
    const observer = new ResizeObserver(syncHeight);
    if (navbar) observer.observe(navbar);
    return () => observer.disconnect();
  }, []);

  return <section ref={root} className="careers-hero relative isolate overflow-clip flex items-center
    [min-height:calc(100svh_-_var(--careers-nav-height,_100px))] bg-white [&_h1]:[margin-top:26px]
    [&_h1]:[margin-right:0] [&_h1]:[margin-bottom:25px] [&_h1]:[margin-left:0] [&_h1]:text-[#3e2917]
    [&_h1]:text-[length:clamp(38px,_4.1vw,_65px)] [&_h1]:leading-[1.12] [&_h1]:tracking-[-.055em] [&_h1]:font-[650]
    [&_h1_>_span]:block [&_h1_>_span]:[animation:career-copy-rise_.85s_cubic-bezier(.16,_1,_.3,_1)_both]
    [&_h1_.careers-hero\_\_accent]:text-[#fa7405] [&_h1_.careers-hero\_\_accent]:[margin-top:6px]
    [@media(max-width:1100px)_and_(min-width:801px)]:[&_h1]:text-[length:43px]
    max-[800px]:[&_h1]:text-[length:clamp(30px,_6vw,_42px)] max-[800px]:[&_h1]:[margin-top:18px]
    max-[800px]:[&_h1]:[margin-bottom:16px] max-[420px]:[&_h1]:text-[length:30px]
    [&_h1_>_span:first-child]:[animation-delay:.25s] [&_h1_>_span:last-child]:[animation-delay:.43s]
    [@media(prefers-reduced-motion:reduce)]:[&_h1_>_span]:[animation:none]" aria-labelledby="careers-title">
    <svg className="careers-hero__corner absolute z-[-1] pointer-events-none [top:0] [right:0] [width:49%] [height:96%]
      opacity-[.85] min-[1600px]:[width:calc(50%_-_20px)] max-[800px]:rounded-[0] max-[800px]:[top:auto]
      max-[800px]:[bottom:0] max-[800px]:[width:95%] max-[800px]:[height:39%] max-[800px]:opacity-[.85]
      max-[800px]:[&::before]:hidden max-[800px]:[&::after]:[height:12%] max-[800px]:[&::after]:[bottom:-5%]
      max-[420px]:[height:36%] [&_stop:nth-child(1)]:[animation:career-blue-light_5s_ease-in-out_infinite_alternate]
      [&_stop:nth-child(2)]:[animation:career-blue-mid_5s_ease-in-out_infinite_alternate]
      [&_stop:nth-child(3)]:[animation:career-blue-edge_5s_ease-in-out_infinite_alternate]
      [@media(prefers-reduced-motion:reduce)]:[&_stop]:[animation:none]" viewBox="0 0 700 800" preserveAspectRatio="none" aria-hidden="true">
      <defs><linearGradient id="careers-corner-blue" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#ebc8a9" /><stop offset="48%" stopColor="#ebc8a9" /><stop offset="100%" stopColor="#e6bd9b" /></linearGradient></defs>
      <path fill="url(#careers-corner-blue)" d="M75 0H700V800C620 770 580 700 480 730C360 770 280 800 160 770C30 740-20 640 32 530C80 430 88 370 35 300C-15 225 0 145 20 90C35 40 40 15 75 0Z" />
    </svg>
    <div className="careers-hero__layout [width:min(100%,_1560px)] [margin-top:auto] [margin-right:auto] [margin-bottom:auto]
      [margin-left:auto] [padding-right:6%] [padding-left:6%] grid
      [grid-template-columns:minmax(0,_1fr)_minmax(0,_1fr)] items-center box-border [min-height:inherit]
      [padding-top:24px] [padding-bottom:24px] [@media(max-width:1100px)_and_(min-width:801px)]:[padding-left:4%]
      [@media(max-width:1100px)_and_(min-width:801px)]:[padding-right:4%] max-[800px]:[grid-template-columns:1fr]
      max-[800px]:[height:max(590px,_calc(100svh_-_var(--careers-nav-height,_76px)))]
      max-[800px]:[grid-template-rows:auto_minmax(150px,_1fr)] max-[800px]:[padding-top:20px]
      max-[800px]:[padding-right:6%] max-[800px]:[padding-bottom:12px] max-[800px]:[padding-left:6%]
      max-[800px]:items-center">
      <div className="careers-hero__copy relative z-[2] [padding-top:20px] [padding-right:5%] [padding-bottom:20px] [padding-left:0]
        [&_>_p]:[max-width:500px] [&_>_p]:[margin-top:0] [&_>_p]:[margin-right:0] [&_>_p]:[margin-bottom:0]
        [&_>_p]:[margin-left:0] [&_>_p]:text-[#9b9b9b] [&_>_p]:text-[length:14px] [&_>_p]:leading-[1.9]
        [&_>_p]:[animation:career-copy-rise_.85s_cubic-bezier(.16,_1,_.3,_1)_both] [&_>_p]:[animation-delay:.7s]
        [@media(max-width:1100px)_and_(min-width:801px)]:[&_>_p]:text-[length:12px] max-[800px]:[padding-top:0]
        max-[800px]:[padding-right:0] max-[800px]:[padding-bottom:0] max-[800px]:[padding-left:0]
        max-[800px]:[&_>_p]:[max-width:600px] max-[800px]:[&_>_p]:text-[length:12px] max-[800px]:[&_>_p]:leading-[1.75]
        max-[420px]:[&_>_p]:text-[length:11px] [@media(prefers-reduced-motion:reduce)]:[&_>_p]:[animation:none]">
        <span className="careers-hero__eyebrow inline-flex items-center [row-gap:13px] [column-gap:13px] text-[#9b9b9b]
          text-[length:10px] font-semibold tracking-[.17em] uppercase
          [animation:career-copy-rise_.85s_cubic-bezier(.16,_1,_.3,_1)_both] [animation-delay:.1s]
          [@media(prefers-reduced-motion:reduce)]:[animation:none]"><span className="careers-hero__marks inline-flex items-center [row-gap:7px] [column-gap:7px] [&_i]:block [&_i]:[width:7px]
          [&_i]:[height:7px] [&_i]:[background:#fa7405] [&_i]:[transform:rotate(45deg)] [&_i:nth-child(2)]:rounded-[50%]
          [&_i:nth-child(2)]:[background:#f7b46c] [&_i:nth-child(2)]:[transform:none] [&_i:nth-child(3)]:[width:6px]
          [&_i:nth-child(3)]:[height:6px] [&_i:nth-child(3)]:[background:#ffcfa8]" aria-hidden="true"><i /><i /><i /></span>Join the Team</span>
        <h1 id="careers-title"><span>Help students<br /> launch careers.</span>{' '}<span className="careers-hero__accent">Build yours here.</span></h1>
        <p>Help people prepare for real interviews. Explore the kinds of work behind AntIntern, from building thoughtful interfaces to creating useful practice resources. Send an expression of interest to learn about opportunities.</p>
        <div className="careers-hero__actions flex items-center flex-wrap [row-gap:10px] [column-gap:10px] [margin-top:31px]
          [@media(max-width:1100px)_and_(min-width:801px)]:[row-gap:7px]
          [@media(max-width:1100px)_and_(min-width:801px)]:[column-gap:7px] max-[420px]:[row-gap:8px]
          max-[420px]:[column-gap:8px] max-[420px]:[margin-top:17px]
          [&_>_*]:[animation:career-copy-rise_.85s_cubic-bezier(.16,_1,_.3,_1)_both]
          [&_>_:nth-child(1)]:[animation-delay:1.4s] [&_>_:nth-child(2)]:[animation-delay:1.55s]
          [&_>_:nth-child(3)]:[animation-delay:1.7s] [&_>_:focus-visible]:[animation:none] max-[800px]:[margin-top:20px]
          [@media(prefers-reduced-motion:reduce)]:[&_>_*]:[animation:none]">
          <a className="careers-button careers-button--primary inline-flex items-center justify-center [row-gap:11px] [column-gap:11px]
            [min-height:45px] [padding-top:0] [padding-right:19px] [padding-bottom:0] [padding-left:19px]
            [border-top-width:1px] [border-top-style:solid] [border-top-color:transparent] [border-right-width:1px]
            [border-right-style:solid] [border-right-color:transparent] [border-bottom-width:1px]
            [border-bottom-style:solid] [border-bottom-color:transparent] [border-left-width:1px] [border-left-style:solid]
            [border-left-color:transparent] rounded-[999px] font-[family-name:inherit] [font-style:inherit]
            leading-[inherit] text-[length:11px] font-medium no-underline cursor-pointer
            [transition:translate_.2s,_box-shadow_.2s,_background_.2s] whitespace-nowrap
            [&:hover:not(:disabled)]:[translate:0_-2px] [&:hover:not(:disabled)]:shadow-[0_8px_22px_#9d5a231c]
            [&:disabled]:cursor-default [&:focus-visible]:[outline:2px_solid_#fa7405]
            [&:focus-visible]:[outline-offset:5px] [@media(max-width:1100px)_and_(min-width:801px)]:[padding-left:14px]
            [@media(max-width:1100px)_and_(min-width:801px)]:[padding-right:14px]
            [@media(max-width:1100px)_and_(min-width:801px)]:text-[length:10px] max-[420px]:text-[length:10px]
            max-[420px]:[min-height:42px] max-[420px]:[padding-left:13px] max-[420px]:[padding-right:13px]
            max-[420px]:[row-gap:7px] max-[420px]:[column-gap:7px]
            [@media(prefers-reduced-motion:reduce)]:[transition:none] [&.careers-button--primary]:[background:#fa7405]
            [&.careers-button--primary]:text-[#fff] [&.careers-button--primary]:shadow-[0_7px_18px_#d57b3125]" href="/careers#open-roles" onClick={event => {
            const section = document.getElementById('open-roles');
            if (!section) return;
            event.preventDefault();
            window.history.replaceState(window.history.state, '', '/careers#open-roles');
            section.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
          }}>See open roles <ArrowDown size={16} aria-hidden="true" /></a>
          {applicationHref ? <a className="careers-button careers-button--secondary inline-flex items-center justify-center [row-gap:11px]
            [column-gap:11px] [min-height:45px] [padding-top:0] [padding-right:19px] [padding-bottom:0] [padding-left:19px]
            [border-top-width:1px] [border-top-style:solid] [border-top-color:transparent] [border-right-width:1px]
            [border-right-style:solid] [border-right-color:transparent] [border-bottom-width:1px]
            [border-bottom-style:solid] [border-bottom-color:transparent] [border-left-width:1px] [border-left-style:solid]
            [border-left-color:transparent] rounded-[999px] font-[family-name:inherit] [font-style:inherit]
            leading-[inherit] text-[length:11px] font-medium no-underline cursor-pointer
            [transition:translate_.2s,_box-shadow_.2s,_background_.2s] whitespace-nowrap
            [&:hover:not(:disabled)]:[translate:0_-2px] [&:hover:not(:disabled)]:shadow-[0_8px_22px_#9d5a231c]
            [&:disabled]:cursor-default [&:focus-visible]:[outline:2px_solid_#fa7405]
            [&:focus-visible]:[outline-offset:5px] [@media(max-width:1100px)_and_(min-width:801px)]:[padding-left:14px]
            [@media(max-width:1100px)_and_(min-width:801px)]:[padding-right:14px]
            [@media(max-width:1100px)_and_(min-width:801px)]:text-[length:10px] max-[420px]:text-[length:10px]
            max-[420px]:[min-height:42px] max-[420px]:[padding-left:13px] max-[420px]:[padding-right:13px]
            max-[420px]:[row-gap:7px] max-[420px]:[column-gap:7px]
            [@media(prefers-reduced-motion:reduce)]:[transition:none] [&.careers-button--secondary]:bg-white
            [&.careers-button--secondary]:[border-color:#ebc8a9] [&.careers-button--secondary]:text-[#fa7405]" href={applicationHref}>Apply Now <ArrowUpRight size={16} aria-hidden="true" /></a> : <button className="careers-button careers-button--secondary inline-flex items-center justify-center [row-gap:11px]
            [column-gap:11px] [min-height:45px] [padding-top:0] [padding-right:19px] [padding-bottom:0] [padding-left:19px]
            [border-top-width:1px] [border-top-style:solid] [border-top-color:transparent] [border-right-width:1px]
            [border-right-style:solid] [border-right-color:transparent] [border-bottom-width:1px]
            [border-bottom-style:solid] [border-bottom-color:transparent] [border-left-width:1px] [border-left-style:solid]
            [border-left-color:transparent] rounded-[999px] font-[family-name:inherit] [font-style:inherit]
            leading-[inherit] text-[length:11px] font-medium no-underline cursor-pointer
            [transition:translate_.2s,_box-shadow_.2s,_background_.2s] whitespace-nowrap
            [&:hover:not(:disabled)]:[translate:0_-2px] [&:hover:not(:disabled)]:shadow-[0_8px_22px_#9d5a231c]
            [&:disabled]:cursor-default [&:focus-visible]:[outline:2px_solid_#fa7405]
            [&:focus-visible]:[outline-offset:5px] [@media(max-width:1100px)_and_(min-width:801px)]:[padding-left:14px]
            [@media(max-width:1100px)_and_(min-width:801px)]:[padding-right:14px]
            [@media(max-width:1100px)_and_(min-width:801px)]:text-[length:10px] max-[420px]:text-[length:10px]
            max-[420px]:[min-height:42px] max-[420px]:[padding-left:13px] max-[420px]:[padding-right:13px]
            max-[420px]:[row-gap:7px] max-[420px]:[column-gap:7px]
            [@media(prefers-reduced-motion:reduce)]:[transition:none] [&.careers-button--secondary]:bg-white
            [&.careers-button--secondary]:[border-color:#ebc8a9] [&.careers-button--secondary]:text-[#fa7405]" type="button" disabled={!onApply} onClick={onApply} title={!onApply ? 'Application connection pending' : undefined}>Apply Now <ArrowUpRight size={16} aria-hidden="true" /></button>}
          {aboutHref ? <a className="careers-button careers-button--text inline-flex items-center justify-center [row-gap:11px] [column-gap:11px]
            [min-height:45px] [padding-top:0] [padding-right:19px] [padding-bottom:0] [padding-left:19px]
            [border-top-width:1px] [border-top-style:solid] [border-top-color:transparent] [border-right-width:1px]
            [border-right-style:solid] [border-right-color:transparent] [border-bottom-width:1px]
            [border-bottom-style:solid] [border-bottom-color:transparent] [border-left-width:1px] [border-left-style:solid]
            [border-left-color:transparent] rounded-[999px] font-[family-name:inherit] [font-style:inherit]
            leading-[inherit] text-[length:11px] font-medium no-underline cursor-pointer
            [transition:translate_.2s,_box-shadow_.2s,_background_.2s] whitespace-nowrap
            [&:hover:not(:disabled)]:[translate:0_-2px] [&:hover:not(:disabled)]:shadow-[0_8px_22px_#9d5a231c]
            [&:disabled]:cursor-default [&:focus-visible]:[outline:2px_solid_#fa7405]
            [&:focus-visible]:[outline-offset:5px] [@media(max-width:1100px)_and_(min-width:801px)]:[padding-left:14px]
            [@media(max-width:1100px)_and_(min-width:801px)]:[padding-right:14px]
            [@media(max-width:1100px)_and_(min-width:801px)]:text-[length:10px] max-[420px]:text-[length:10px]
            max-[420px]:[min-height:42px] max-[420px]:[padding-left:13px] max-[420px]:[padding-right:13px]
            max-[420px]:[row-gap:7px] max-[420px]:[column-gap:7px]
            [@media(prefers-reduced-motion:reduce)]:[transition:none] [&.careers-button--text]:[background:none]
            [&.careers-button--text]:text-[#927a66] [&.careers-button--text]:[padding-left:7px]
            [&.careers-button--text]:[padding-right:7px] max-[420px]:[&.careers-button--text]:[padding-left:3px]
            max-[420px]:[&.careers-button--text]:[padding-right:3px]" href={aboutHref}>About Firm <ArrowUpRight size={15} aria-hidden="true" /></a> : <button className="careers-button careers-button--text inline-flex items-center justify-center [row-gap:11px] [column-gap:11px]
            [min-height:45px] [padding-top:0] [padding-right:19px] [padding-bottom:0] [padding-left:19px]
            [border-top-width:1px] [border-top-style:solid] [border-top-color:transparent] [border-right-width:1px]
            [border-right-style:solid] [border-right-color:transparent] [border-bottom-width:1px]
            [border-bottom-style:solid] [border-bottom-color:transparent] [border-left-width:1px] [border-left-style:solid]
            [border-left-color:transparent] rounded-[999px] font-[family-name:inherit] [font-style:inherit]
            leading-[inherit] text-[length:11px] font-medium no-underline cursor-pointer
            [transition:translate_.2s,_box-shadow_.2s,_background_.2s] whitespace-nowrap
            [&:hover:not(:disabled)]:[translate:0_-2px] [&:hover:not(:disabled)]:shadow-[0_8px_22px_#9d5a231c]
            [&:disabled]:cursor-default [&:focus-visible]:[outline:2px_solid_#fa7405]
            [&:focus-visible]:[outline-offset:5px] [@media(max-width:1100px)_and_(min-width:801px)]:[padding-left:14px]
            [@media(max-width:1100px)_and_(min-width:801px)]:[padding-right:14px]
            [@media(max-width:1100px)_and_(min-width:801px)]:text-[length:10px] max-[420px]:text-[length:10px]
            max-[420px]:[min-height:42px] max-[420px]:[padding-left:13px] max-[420px]:[padding-right:13px]
            max-[420px]:[row-gap:7px] max-[420px]:[column-gap:7px]
            [@media(prefers-reduced-motion:reduce)]:[transition:none] [&.careers-button--text]:[background:none]
            [&.careers-button--text]:text-[#927a66] [&.careers-button--text]:[padding-left:7px]
            [&.careers-button--text]:[padding-right:7px] max-[420px]:[&.careers-button--text]:[padding-left:3px]
            max-[420px]:[&.careers-button--text]:[padding-right:3px]" type="button" disabled={!onAbout} onClick={onAbout} title={!onAbout ? 'About Firm connection pending' : undefined}>About Firm <ArrowUpRight size={15} aria-hidden="true" /></button>}
        </div>
      </div>
      <Suspense fallback={<div className="careers-study relative [min-width:0] [width:106%] [margin-left:-3%] [aspect-ratio:auto]
        [height:clamp(300px,_calc(100svh_-_var(--careers-nav-height,_100px)_-_72px),_600px)] [max-height:none]
        max-[800px]:w-full max-[800px]:h-full max-[800px]:[max-width:500px] max-[800px]:[margin-top:0]
        max-[800px]:[margin-right:auto] max-[800px]:[margin-bottom:0] max-[800px]:[margin-left:auto]
        max-[800px]:[min-height:0]" aria-hidden="true" />}><StudyAnimation /></Suspense>
    </div>
  </section>;
}
