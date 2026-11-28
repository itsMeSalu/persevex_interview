"use client";

import { useRef } from 'react';
import { Sparkles, Globe2, Code2, BookOpen, Compass, Users } from 'lucide-react';
import useSectionReveal from '../useSectionReveal';

const benefits = [
  {
    title: 'Impact from Day One',
    description: "Help learners practice interview skills and communicate their work with confidence.",
    icon: Sparkles,
  },
  {
    title: 'Clear Communication',
    description: "Share context, ask questions, and make collaboration easier.",
    icon: Globe2,
  },
  {
    title: 'Modern Tech Stack',
    description: "Build thoughtful experiences with React, Tailwind CSS, and interactive animation.",
    icon: Code2,
  },
  {
    title: 'Continuous Learning',
    description: 'Explore ideas, learn from feedback, and develop your craft through practical work.',
    icon: BookOpen,
  },
  {
    title: 'Ownership & Autonomy',
    description: "Think through decisions from the learner’s perspective and take care with implementation.",
    icon: Compass,
  },
  {
    title: 'Share Your Perspective',
    description: "Bring ideas that make interview preparation more accessible and useful.",
    icon: Users,
  },
];

export default function CareersBenefits() {
  const root = useRef(null);
  useSectionReveal(root);

  return <section className="careers-benefits [padding-top:80px] [padding-right:6%] [padding-bottom:100px] [padding-left:6%] bg-white
    text-[#402b19] [&_h2]:[margin-top:15px] [&_h2]:[margin-right:0] [&_h2]:[margin-bottom:14px]
    [&_h2]:[margin-left:0] [&_h2]:text-[length:clamp(28px,_3vw,_40px)] [&_h2]:font-semibold [&_h2]:leading-[1.2]
    [&_h2]:tracking-[-.045em] max-[850px]:[padding-top:60px] max-[850px]:[padding-bottom:75px]
    max-[520px]:[padding-top:50px] max-[520px]:[padding-bottom:60px]" ref={root} aria-labelledby="careers-benefits-heading">
    <div className="careers-benefits__inner [width:min(100%,_1180px)] [margin-left:auto] [margin-right:auto]">
      <header className="careers-benefits__heading text-center [max-width:680px] [margin-top:0] [margin-right:auto] [margin-bottom:42px]
        [margin-left:auto] [&_>_p]:[margin-top:0] [&_>_p]:[margin-right:0] [&_>_p]:[margin-bottom:0]
        [&_>_p]:[margin-left:0] [&_>_p]:text-[#a4a4a4] [&_>_p]:text-[length:13px] [&_>_p]:leading-[1.85]
        [&.rise-pending]:opacity-[0] [&.rise-pending]:[transform:translate3d(0,_36px,_0)]
        [&.rise-pending]:[transition:opacity_.8s_ease,_transform_.8s_cubic-bezier(.16,_1,_.3,_1)]
        [&.rise-visible]:opacity-[1] [&.rise-visible]:[transform:translate3d(0,_0,_0)] max-[520px]:[margin-bottom:30px]
        max-[520px]:[&_>_p]:text-[length:12px] [@media(prefers-reduced-motion:reduce)]:[&.rise-pending]:opacity-[1]
        [@media(prefers-reduced-motion:reduce)]:[&.rise-pending]:[transform:none]
        [@media(prefers-reduced-motion:reduce)]:[&.rise-pending]:[transition:none]" data-reveal-group>
        <span className="careers-benefits__eyebrow inline-block text-[#c46e28] text-[length:clamp(24px,_2.5vw,_34px)] font-extrabold leading-[1.2] tracking-[-.035em]">Benefits</span>
        <h2 id="careers-benefits-heading">Why build at AntIntern?</h2>
        <p>We&apos;re a small team that ships big things. Here&apos;s what working with us looks like.</p>
      </header>
      <div className="careers-benefits__grid grid [grid-template-columns:repeat(3,_minmax(0,_1fr))] [perspective:1200px]
        [row-gap:28px] [column-gap:28px] max-[850px]:[grid-template-columns:repeat(2,_minmax(0,_1fr))]
        max-[850px]:[row-gap:22px] max-[850px]:[column-gap:22px] max-[520px]:[grid-template-columns:1fr]">
        {benefits.map(({ title, description, icon: Icon }, index) => <article className="career-benefit [padding-top:28px] [padding-right:29px] [padding-bottom:30px] [padding-left:29px]
          [border-top-width:1px] [border-top-style:solid] [border-top-color:#fff7ef] [border-right-width:1px]
          [border-right-style:solid] [border-right-color:#fff7ef] [border-bottom-width:1px] [border-bottom-style:solid]
          [border-bottom-color:#fff7ef] [border-left-width:1px] [border-left-style:solid] [border-left-color:#fff7ef]
          rounded-[15px] bg-white relative [transform-style:preserve-3d] [border-color:#fff7ef]
          shadow-[0_2px_3px_#402b1908,_0_8px_12px_-5px_#51392518,_0_20px_30px_-15px_#51392526,_inset_0_1px_0_#fff]
          [transition:translate_.4s_ease,_rotate_.4s_ease,_box-shadow_.4s_ease,_border-color_.4s_ease]
          [&_h3]:text-[length:16px] [&_h3]:font-semibold [&_h3]:tracking-[-.025em] [&_h3]:leading-[1.4]
          [&_h3]:[margin-top:22px] [&_h3]:[margin-right:0] [&_h3]:[margin-bottom:12px] [&_h3]:[margin-left:0]
          [&_>_p]:[margin-top:0] [&_>_p]:[margin-right:0] [&_>_p]:[margin-bottom:0] [&_>_p]:[margin-left:0]
          [&_>_p]:text-[#9e9e9e] [&_>_p]:text-[length:12px] [&_>_p]:leading-[1.9] [&.rise-pending]:opacity-[0]
          [&.rise-pending]:[transform:translate3d(0,_36px,_0)]
          [&.rise-pending]:[transition:opacity_.8s_ease,_transform_.8s_cubic-bezier(.16,_1,_.3,_1)]
          [&.rise-pending]:[transition-property:opacity,_transform,_translate,_rotate,_box-shadow,_border-color]
          [&.rise-pending]:[transition-duration:.8s,_.8s,_.4s,_.4s,_.4s,_.4s]
          [&.rise-pending]:[transition-timing-function:ease,_cubic-bezier(.16,_1,_.3,_1),_ease,_ease,_ease,_ease]
          [&.rise-pending]:[transition-delay:var(--benefit-delay,_0ms),_var(--benefit-delay,_0ms),_0s,_0s,_0s,_0s]
          [&.rise-visible]:opacity-[1] [&.rise-visible]:[transform:translate3d(0,_0,_0)] max-[850px]:[padding-top:25px]
          max-[850px]:[padding-right:25px] max-[850px]:[padding-bottom:25px] max-[850px]:[padding-left:25px]
          max-[850px]:[&.rise-pending]:[transition-delay:0s] max-[520px]:[padding-top:25px]
          max-[520px]:[padding-right:25px] max-[520px]:[padding-bottom:25px] max-[520px]:[padding-left:25px]
          max-[520px]:[&_h3]:[margin-top:18px] [@media(prefers-reduced-motion:reduce)]:[&.rise-pending]:opacity-[1]
          [@media(prefers-reduced-motion:reduce)]:[&.rise-pending]:[transform:none]
          [@media(prefers-reduced-motion:reduce)]:[&.rise-pending]:[transition:none]
          [@media(hover:hover)_and_(pointer:fine)]:[&:hover]:[translate:0_-8px]
          [@media(hover:hover)_and_(pointer:fine)]:[&:hover]:[rotate:1_-.3_0_2deg]
          [@media(hover:hover)_and_(pointer:fine)]:[&:hover]:[border-color:#ebc8a9]
          [@media(hover:hover)_and_(pointer:fine)]:[&:hover]:shadow-[0_3px_5px_#402b190a,_0_12px_20px_-6px_#51392521,_0_32px_45px_-17px_#a3643145,_inset_0_1px_0_#fff]
          [@media(prefers-reduced-motion:reduce)]:[transition:none]
          [@media(prefers-reduced-motion:reduce)]:[&:hover]:[translate:none]
          [@media(prefers-reduced-motion:reduce)]:[&:hover]:[rotate:none]" key={title} data-reveal-group style={{ '--benefit-delay': `${index % 3 * 100}ms` }}>
          <span className="career-benefit__icon grid [place-items:center] [width:45px] [height:45px] rounded-[12px] [background:#fff7ef]
            text-[#fa7405] [transform:translateZ(12px)] [@media(prefers-reduced-motion:reduce)]:[transform:none]" aria-hidden="true"><Icon size={23} strokeWidth={1.65} /></span>
          <h3>{title}</h3>
          <p>{description}</p>
        </article>)}
      </div>
    </div>
  </section>;
}
