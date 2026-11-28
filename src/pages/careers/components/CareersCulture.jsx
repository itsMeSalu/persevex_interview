"use client";

import { useRef } from 'react';
import useSectionReveal from '../useSectionReveal';

const culturePoints = [
  { title: 'Share progress', text: 'No secrets, just progress' },
  { title: 'Reflect together', text: 'Everyone speaks up' },
  { title: 'Learn & improve', text: 'Every experience moves us forward' },
  { title: 'Direct feedback', text: 'Kind but honest' },
];
const cultureStats = [
  { value: 'Practice', label: 'Learner focus' },
  { value: 'Feedback', label: 'Continuous improvement' },
  { value: 'Clarity', label: 'Communication' },
  { value: 'Care', label: 'Product quality' },
];

export default function CareersCulture() {
  const root = useRef(null);
  useSectionReveal(root);

  return <section className="careers-culture relative isolate overflow-hidden [padding-top:65px] [padding-right:6%] [padding-bottom:145px]
    [padding-left:6%] bg-white text-center text-[#402b19] [&_h2]:[margin-top:26px] [&_h2]:[margin-right:0]
    [&_h2]:[margin-bottom:25px] [&_h2]:[margin-left:0] [&_h2]:text-[length:clamp(34px,_4.3vw,_62px)]
    [&_h2]:leading-[1.08] [&_h2]:font-[650] [&_h2]:tracking-[-.045em] [&_h2_>_span]:text-[#ec8531]
    max-[800px]:[padding-top:45px] max-[800px]:[padding-bottom:110px] max-[420px]:[&_h2]:text-[length:33px]" ref={root} aria-labelledby="careers-culture-heading">
    <div className="careers-culture__content relative z-[1] [max-width:1240px] [margin-top:0] [margin-right:auto] [margin-bottom:0]
      [margin-left:auto] [&.rise-pending_>_.careers-culture\_\_eyebrow]:opacity-[0]
      [&.rise-pending_>_.careers-culture\_\_eyebrow]:[transform:translate3d(0,_30px,_0)]
      [&.rise-pending_>_h2]:opacity-[0] [&.rise-pending_>_h2]:[transform:translate3d(0,_30px,_0)]
      [&.rise-pending_>_.careers-culture\_\_description]:opacity-[0]
      [&.rise-pending_>_.careers-culture\_\_description]:[transform:translate3d(0,_30px,_0)]
      [&.rise-pending_.careers-culture\_\_point]:opacity-[0]
      [&.rise-pending_.careers-culture\_\_point]:[transform:translate3d(0,_30px,_0)]
      [&.rise-pending_.careers-culture\_\_stats]:opacity-[0]
      [&.rise-pending_.careers-culture\_\_stats]:[transform:translate3d(0,_30px,_0)]
      [&.rise-visible_>_.careers-culture\_\_eyebrow]:[animation:culture-rise_.9s_cubic-bezier(.16,_1,_.3,_1)_both]
      [&.rise-visible_>_h2]:[animation:culture-rise_.9s_cubic-bezier(.16,_1,_.3,_1)_both]
      [&.rise-visible_>_h2]:[animation-delay:.15s]
      [&.rise-visible_>_.careers-culture\_\_description]:[animation:culture-rise_.9s_cubic-bezier(.16,_1,_.3,_1)_both]
      [&.rise-visible_>_.careers-culture\_\_description]:[animation-delay:.35s]
      [&.rise-visible_.careers-culture\_\_point]:[animation:culture-rise_.9s_cubic-bezier(.16,_1,_.3,_1)_both]
      [&.rise-visible_.careers-culture\_\_stats]:[animation:culture-rise_.9s_cubic-bezier(.16,_1,_.3,_1)_both]
      [&.rise-visible_.careers-culture\_\_stats]:[animation-delay:1.6s]
      [&.rise-visible_.careers-culture\_\_point:nth-child(1)]:[animation-delay:.6s]
      [&.rise-visible_.careers-culture\_\_point:nth-child(2)]:[animation-delay:.7s]
      [&.rise-visible_.careers-culture\_\_point:nth-child(3)]:[animation-delay:.8s]
      [&.rise-visible_.careers-culture\_\_point:nth-child(4)]:[animation-delay:.9s]
      [@media(prefers-reduced-motion:reduce)]:[&.rise-pending_>_.careers-culture\_\_eyebrow]:opacity-[1]
      [@media(prefers-reduced-motion:reduce)]:[&.rise-pending_>_.careers-culture\_\_eyebrow]:[transform:none]
      [@media(prefers-reduced-motion:reduce)]:[&.rise-pending_>_.careers-culture\_\_eyebrow]:[animation:none]
      [@media(prefers-reduced-motion:reduce)]:[&.rise-pending_>_h2]:opacity-[1]
      [@media(prefers-reduced-motion:reduce)]:[&.rise-pending_>_h2]:[transform:none]
      [@media(prefers-reduced-motion:reduce)]:[&.rise-pending_>_h2]:[animation:none]
      [@media(prefers-reduced-motion:reduce)]:[&.rise-pending_>_.careers-culture\_\_description]:opacity-[1]
      [@media(prefers-reduced-motion:reduce)]:[&.rise-pending_>_.careers-culture\_\_description]:[transform:none]
      [@media(prefers-reduced-motion:reduce)]:[&.rise-pending_>_.careers-culture\_\_description]:[animation:none]
      [@media(prefers-reduced-motion:reduce)]:[&.rise-pending_.careers-culture\_\_point]:opacity-[1]
      [@media(prefers-reduced-motion:reduce)]:[&.rise-pending_.careers-culture\_\_point]:[transform:none]
      [@media(prefers-reduced-motion:reduce)]:[&.rise-pending_.careers-culture\_\_point]:[animation:none]
      [@media(prefers-reduced-motion:reduce)]:[&.rise-pending_.careers-culture\_\_stats]:opacity-[1]
      [@media(prefers-reduced-motion:reduce)]:[&.rise-pending_.careers-culture\_\_stats]:[transform:none]
      [@media(prefers-reduced-motion:reduce)]:[&.rise-pending_.careers-culture\_\_stats]:[animation:none]" data-reveal-group>
      <span className="careers-culture__eyebrow inline-block [padding-top:8px] [padding-right:19px] [padding-bottom:8px]
        [padding-left:19px] rounded-[999px] [background:#fff7ef] text-[#fa7405] text-[length:11px] leading-[1.5]
        font-semibold tracking-[.13em] uppercase">Culture</span>
      <h2 id="careers-culture-heading">We ship, learn, and<br /><span>repeat together.</span></h2>
      <p className="careers-culture__description [margin-top:0] [margin-right:auto] [margin-bottom:0] [margin-left:auto]
        text-[#a3a3a3] [max-width:780px] text-[length:clamp(13px,_1.22vw,_16px)] leading-[1.85]">We&apos;re early-stage, which means you&apos;ll wear multiple hats and see your work go live fast. We default to transparency — team updates, revenue metrics, and product decisions happen in the open.</p>
      <div className="careers-culture__points grid [grid-template-columns:repeat(4,_minmax(0,_1fr))] [margin-top:44px]
        max-[800px]:[grid-template-columns:repeat(2,_minmax(0,_1fr))] max-[800px]:[row-gap:25px]
        max-[800px]:[column-gap:0] max-[800px]:[margin-top:32px]">
        {culturePoints.map(point => <div className="careers-culture__point [padding-top:3px] [padding-right:18px] [padding-bottom:3px] [padding-left:18px]
          [border-left-width:1px] [border-left-style:solid] [border-left-color:#ebc8a9]
          [&:first-child]:[border-left-width:0] [&:first-child]:[border-left-style:none]
          [&:first-child]:[border-left-color:currentColor] [&_h3]:[margin-top:0] [&_h3]:[margin-right:0]
          [&_h3]:[margin-bottom:7px] [&_h3]:[margin-left:0] [&_h3]:font-semibold [&_h3]:leading-[1.4]
          [&_h3]:tracking-[-.025em] [&_h3]:text-[length:clamp(13px,_1.2vw,_16px)] [&_>_p]:[margin-top:0]
          [&_>_p]:[margin-right:0] [&_>_p]:[margin-bottom:0] [&_>_p]:[margin-left:0] [&_>_p]:text-[#a3a3a3]
          [&_>_p]:leading-[1.6] [&_>_p]:text-[length:clamp(11px,_1vw,_13px)]
          max-[800px]:[&:nth-child(3)]:[border-left-width:0] max-[800px]:[&:nth-child(3)]:[border-left-style:none]
          max-[800px]:[&:nth-child(3)]:[border-left-color:currentColor] max-[420px]:[padding-left:10px]
          max-[420px]:[padding-right:10px]" key={point.title}><h3>{point.title}</h3><p>{point.text}</p></div>)}
      </div>
      <dl className="careers-culture__stats grid [grid-template-columns:repeat(4,_minmax(0,_1fr))] [margin-right:0]
        [margin-bottom:0] [margin-left:0] [margin-top:42px] [&_>_div]:flex [&_>_div]:flex-col [&_>_div]:[padding-top:0]
        [&_>_div]:[padding-right:15px] [&_>_div]:[padding-bottom:0] [&_>_div]:[padding-left:15px]
        [&_>_div]:[border-left-width:1px] [&_>_div]:[border-left-style:solid] [&_>_div]:[border-left-color:#ebc8a9]
        [&_>_div:first-child]:[border-left-width:0] [&_>_div:first-child]:[border-left-style:none]
        [&_>_div:first-child]:[border-left-color:currentColor] [&_dt]:[order:2] [&_dt]:[margin-top:10px]
        [&_dt]:text-[#a5a5a5] [&_dt]:text-[length:11px] [&_dt]:font-semibold [&_dt]:leading-[1.6] [&_dt]:uppercase
        [&_dt]:tracking-[.1em] [&_dd]:[order:1] [&_dd]:[margin-top:0] [&_dd]:[margin-right:0] [&_dd]:[margin-bottom:0]
        [&_dd]:[margin-left:0] [&_dd]:text-[#ec8531] [&_dd]:text-[length:clamp(30px,_3.2vw,_45px)] [&_dd]:font-[650]
        [&_dd]:leading-[1.1] [&_dd]:tracking-[-.045em] max-[800px]:[grid-template-columns:repeat(2,_minmax(0,_1fr))]
        max-[800px]:[row-gap:24px] max-[800px]:[column-gap:0] max-[800px]:[margin-top:32px]
        max-[800px]:[&_>_div:nth-child(3)]:[border-left-width:0]
        max-[800px]:[&_>_div:nth-child(3)]:[border-left-style:none]
        max-[800px]:[&_>_div:nth-child(3)]:[border-left-color:currentColor] max-[800px]:[&_dt]:text-[length:10px]" aria-label="AntIntern in numbers">
        {cultureStats.map(stat => <div key={stat.label}><dt>{stat.label}</dt><dd>{stat.value}</dd></div>)}
      </dl>
    </div>
    <svg className="careers-culture__waves absolute z-[0] [bottom:0] [height:150px] pointer-events-none [width:110%] [left:-5%]
      [animation:culture-wave-drift_14s_ease-in-out_infinite_alternate] max-[800px]:[height:100px]
      [@media(prefers-reduced-motion:reduce)]:[animation:none]!
      [@media(prefers-reduced-motion:reduce)]:[&_stop]:[animation:none]!" viewBox="0 0 1440 180" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="culture-wave-back" x1="0" y1="0" x2="1" y2="0" className={"[&_stop:nth-child(1)]:[animation:culture-wave-blue_7s_ease-in-out_infinite_alternate] [&_stop:nth-child(3)]:[animation:culture-wave-pearl_9s_ease-in-out_infinite_alternate]"} ><stop stopColor="#ebc8a9" /><stop offset=".5" stopColor="#fff7ef" /><stop offset="1" stopColor="#fff7ef" /></linearGradient>
        <linearGradient id="culture-wave-front" x1="0" y1="0" x2="1" y2="0" className={"[&_stop:nth-child(2)]:[animation:culture-wave-cyan_8s_ease-in-out_infinite_alternate]"} ><stop stopColor="#fff7ef" /><stop offset=".5" stopColor="#ebc8a9" /><stop offset="1" stopColor="#fff7ef" /></linearGradient>
      </defs>
      <path d="M0 15C145 40 240 150 410 133S665 75 860 143S1190 57 1440 14V180H0Z" fill="url(#culture-wave-back)" />
      <path d="M0 180H310C560 82 665 109 850 143S1180 181 1440 140V180Z" fill="url(#culture-wave-front)" opacity=".8" />
    </svg>
  </section>;
}
