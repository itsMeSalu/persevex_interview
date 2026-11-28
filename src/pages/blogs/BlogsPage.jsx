"use client";
import "./blogs.css";
import { useRef, useState } from 'react';
import SiteHeader from '../../components/SiteHeader.jsx';
import SiteFooter from '../../components/SiteFooter.jsx';
import { formatBlogDate } from './format-blog-date';
import { ArrowUpRight, CalendarDays, BookOpen, BriefcaseBusiness, Layers, Cpu, GraduationCap } from 'lucide-react';
import { adaptBlogPost, blogTopics, matchesTopic } from './blog-data';
import useSectionReveal from './useSectionReveal';

import BlogHeroSlideshow from './components/BlogHeroSlideshow';
import featuredImage from '../../assets/practice.webp';

const topics = [
  { name: 'Career Growth', detail: 'Resumes, interviews & your next step', icon: BriefcaseBusiness },
  { name: 'Interview Preparation', detail: 'Your learning journey, explained', icon: GraduationCap },
  { name: 'Projects & Portfolio', detail: 'Build work you’re proud to share', icon: Layers },
  { name: 'AI & Skills', detail: 'Practical skills for a changing world', icon: Cpu },
];
function BlogCard({ blog, featured = false }) {
 const [failedImage,setFailedImage]=useState(false);
  return <article className={(`bg-white [border-top-width:1px] [border-top-style:solid] [border-top-color:#fff7ef] [border-right-width:1px]
    [border-right-style:solid] [border-right-color:#fff7ef] [border-bottom-width:1px] [border-bottom-style:solid]
    [border-bottom-color:#fff7ef] [border-left-width:1px] [border-left-style:solid] [border-left-color:#fff7ef]
    rounded-[20px] overflow-hidden flex flex-col [transition:box-shadow_.25s]
    [&:hover]:shadow-[0_12px_35px_#263f7410] [&:hover_img]:[transform:scale(1.035)] [&_h3]:text-[length:18px]
    [&_h3]:font-medium [&_h3]:leading-[1.5] [&_h3]:tracking-[-.025em] [&_h3]:[margin-top:14px]
    [&_h3]:[margin-right:0] [&_h3]:[margin-bottom:10px] [&_h3]:[margin-left:0] [&_h3_a:hover]:text-[#fa7405]
    [&_p]:text-[length:12px] [&_p]:leading-[1.85] [&_p]:text-[#8490a2] [&_p]:[margin-top:0] [&_p]:[margin-right:0]
    [&_p]:[margin-bottom:22px] [&_p]:[margin-left:0] [&_p]:[display:-webkit-box] [&_p]:[-webkit-line-clamp:3]
    [&_p]:[-webkit-box-orient:vertical] [&_p]:overflow-hidden
    [@media(prefers-reduced-motion:reduce)]:[transition:none] blog-card${featured ? String.raw` blog-card--featured [&_.blog-card\_\_image]:[aspect-ratio:1.95] [&_h3]:text-[length:23px] max-[520px]:[&_h3]:text-[length:21px]` : ''}`) + " [&[data-rise].rise-pending]:opacity-[0] [&[data-rise].rise-pending]:[transform:translate3d(0,_36px,_0)] [&[data-rise].rise-pending]:[transition:opacity_.8s_ease,_transform_.8s_cubic-bezier(.16,_1,_.3,_1)] [&[data-rise].rise-pending.rise-visible]:opacity-[1] [&[data-rise].rise-pending.rise-visible]:[transform:translate3d(0,_0,_0)] [@media(prefers-reduced-motion:reduce)]:[&[data-rise].rise-pending]:opacity-[1] [@media(prefers-reduced-motion:reduce)]:[&[data-rise].rise-pending]:[transform:none] [@media(prefers-reduced-motion:reduce)]:[&[data-rise].rise-pending]:[transition:none]"} data-rise={featured ? undefined : ""}>
    <a className="blog-card__image block relative overflow-hidden [aspect-ratio:1.6] [background:#fff7ef] [&_img]:w-full
      [&_img]:h-full [&_img]:object-cover [&_img]:[transition:transform_.6s]
      [@media(prefers-reduced-motion:reduce)]:[&_img]:[transition:none]" href={blog.href} tabIndex={-1} aria-hidden="true"><span className="block h-full w-full">{blog.image && !failedImage ? <img src={featured ? featuredImage : blog.image} alt="" loading={featured ? 'eager' : 'lazy'} onError={()=>setFailedImage(true)}/> : <span className="grid h-full w-full place-items-center"><BookOpen size={40} aria-hidden="true"/></span>}</span></a>
    <div className="blog-card__body [padding-top:24px] [padding-right:24px] [padding-bottom:24px] [padding-left:24px] [flex:1] flex flex-col">
      <div className="blog-meta flex items-center flex-wrap [row-gap:7px] [column-gap:7px] text-[#8a94a4] text-[length:10px]"><CalendarDays size={14} aria-hidden="true" /><time dateTime={blog.date}>{formatBlogDate(blog.date)}</time><span>·</span><span>{blog.minutes} min read</span>{blog.author && <><span>·</span><span>By {blog.author}</span></>}</div>
      <h3><a href={blog.href}>{blog.title}</a></h3>
      <p>{blog.description}</p><a className="blog-read flex items-center [row-gap:8px] [column-gap:8px] text-[length:11px] font-semibold [margin-top:auto] text-[#fa7405]!" href={blog.href}>Read story <ArrowUpRight size={16} aria-hidden="true" /></a>
    </div>
  </article>;
}
export default function Blogs({ posts }) {
  const blogs = posts.map(adaptBlogPost);
  const [category, setCategory] = useState('All Posts');
  const root = useRef(null);
  useSectionReveal(root, category);
  const filtered = blogs.filter(blog => matchesTopic(blog, category));
  return <><SiteHeader /><main className="blogs-page bg-white text-[#192840] font-[family-name:var(--font-sans,Inter,system-ui,sans-serif)] overflow-clip
    [&_a]:no-underline [&_a]:text-[inherit] [&_:is(a,button):focus-visible]:[outline:2px_solid_#fa7405]
    [&_:is(a,button):focus-visible]:[outline-offset:4px]" ref={root}>
    <section className="blogs-intro-slide box-border [height:calc(100svh_-_100px)] [min-height:480px] [max-height:940px] grid
      [grid-template-rows:minmax(0,_1fr)_auto] [row-gap:clamp(20px,_4svh,_44px)] [column-gap:clamp(20px,_4svh,_44px)]
      [padding-top:24px] [padding-right:clamp(18px,_3vw,_48px)] [padding-bottom:32px]
      [padding-left:clamp(18px,_3vw,_48px)] [&_.blogs-hero]:flex [&_.blogs-hero]:flex-col
      [&_.blogs-hero]:items-center [&_.blogs-hero]:justify-center [&_.blogs-hero]:w-full
      [&_.blogs-hero]:[max-width:1440px] [&_.blogs-hero]:[margin-top:0] [&_.blogs-hero]:[margin-right:auto]
      [&_.blogs-hero]:[margin-bottom:0] [&_.blogs-hero]:[margin-left:auto] [&_.blogs-hero]:[padding-top:32px]
      [&_.blogs-hero]:[padding-right:24px] [&_.blogs-hero]:[padding-bottom:32px] [&_.blogs-hero]:[padding-left:24px]
      [&_.blogs-hero]:[border-top-width:1px] [&_.blogs-hero]:[border-top-style:solid]
      [&_.blogs-hero]:[border-top-color:#fff7ef] [&_.blogs-hero]:[border-right-width:1px]
      [&_.blogs-hero]:[border-right-style:solid] [&_.blogs-hero]:[border-right-color:#fff7ef]
      [&_.blogs-hero]:[border-bottom-width:1px] [&_.blogs-hero]:[border-bottom-style:solid]
      [&_.blogs-hero]:[border-bottom-color:#fff7ef] [&_.blogs-hero]:[border-left-width:1px]
      [&_.blogs-hero]:[border-left-style:solid] [&_.blogs-hero]:[border-left-color:#fff7ef]
      [&_.blogs-hero]:rounded-[28px] [&_.blogs-hero]:bg-white [&_.blogs-hero]:shadow-[0_12px_40px_#19284003]
      [&_.blogs-hero_h1]:text-[length:clamp(36px,_4.4vw,_66px)] [&_.blogs-hero_h1]:[margin-top:22px]
      [&_.blogs-hero_h1]:[margin-right:0] [&_.blogs-hero_h1]:[margin-bottom:18px] [&_.blogs-hero_h1]:[margin-left:0]
      [&_.blogs-hero_>_p]:[max-width:590px] [&_.blogs-hero_>_p]:[margin-top:0] [&_.blogs-hero_>_p]:[margin-right:0]
      [&_.blogs-hero_>_p]:[margin-bottom:0] [&_.blogs-hero_>_p]:[margin-left:0]
      max-[1200px]:[height:calc(100svh_-_76px)] max-[520px]:[padding-top:14px] max-[520px]:[padding-right:14px]
      max-[520px]:[padding-bottom:24px] max-[520px]:[padding-left:14px] max-[520px]:[row-gap:22px]
      max-[520px]:[column-gap:22px] max-[520px]:[&_.blogs-hero]:[padding-top:28px]
      max-[520px]:[&_.blogs-hero]:[padding-right:18px] max-[520px]:[&_.blogs-hero]:[padding-bottom:28px]
      max-[520px]:[&_.blogs-hero]:[padding-left:18px] max-[520px]:[&_.blogs-hero]:rounded-[22px]
      max-[520px]:[&_.blogs-hero_h1]:text-[length:clamp(30px,_8.5vw,_40px)]
      [@media(max-height:560px)_and_(min-width:521px)]:[min-height:340px]
      [@media(max-height:560px)_and_(min-width:521px)]:[padding-top:12px]
      [@media(max-height:560px)_and_(min-width:521px)]:[padding-bottom:12px]
      [@media(max-height:560px)_and_(min-width:521px)]:[row-gap:12px]
      [@media(max-height:560px)_and_(min-width:521px)]:[column-gap:12px]
      [@media(max-height:560px)_and_(min-width:521px)]:[&_.blogs-hero]:[padding-top:20px]
      [@media(max-height:560px)_and_(min-width:521px)]:[&_.blogs-hero]:[padding-bottom:20px]
      [@media(max-height:560px)_and_(min-width:521px)]:[&_.blogs-hero_h1]:text-[length:34px]
      [@media(max-height:560px)_and_(min-width:521px)]:[&_.blogs-hero_h1]:[margin-top:12px]
      [@media(max-height:560px)_and_(min-width:521px)]:[&_.blogs-hero_h1]:[margin-bottom:12px]
      [@media(max-height:560px)_and_(min-width:521px)]:[&_.blogs-hero_>_p]:text-[length:12px]" aria-labelledby="blogs-title">
      <BlogHeroSlideshow blogs={blogs} />
      <p className="blogs-intro-tagline [margin-top:0] [margin-right:0] [margin-bottom:0] [margin-left:0] text-center
        text-[#66758d] text-[length:clamp(12px,_1.2vw,_17px)] leading-[1.8] [text-wrap:balance]
        [animation:blogs-tagline-down_.95s_cubic-bezier(.16,_1,_.3,_1)_1.9s_both] max-[520px]:[max-width:310px]
        max-[520px]:[justify-self:center] [@media(prefers-reduced-motion:reduce)]:[animation:none]">Sample guides for technical interviews, resumes, and your next career step.</p>
    </section>
    <div className="blogs-container [max-width:1200px] [padding-top:0] [padding-right:36px] [padding-bottom:0] [padding-left:36px]
      [margin-top:auto] [margin-right:auto] [margin-bottom:auto] [margin-left:auto] max-[800px]:[padding-top:0]
      max-[800px]:[padding-right:22px] max-[800px]:[padding-bottom:0] max-[800px]:[padding-left:22px]">
      <section className="blogs-feature [padding-top:74px] [padding-right:0] [padding-bottom:0] [padding-left:0]
        max-[800px]:[padding-top:48px] [&.rise-pending_.blogs-feature\_\_heading]:opacity-[0]
        [&.rise-pending_.blogs-feature\_\_heading]:[transform:translate3d(0,_36px,_0)]
        [&.rise-pending_.blogs-feature\_\_heading]:[transition:opacity_.85s_ease,_transform_.85s_cubic-bezier(.16,_1,_.3,_1)]
        [&.rise-visible_.blogs-feature\_\_heading]:opacity-[1]
        [&.rise-visible_.blogs-feature\_\_heading]:[transform:translate3d(0,_0,_0)]
        [&.rise-pending_.blog-card--featured]:opacity-[0]
        [&.rise-pending_.blog-card--featured]:[transform:translate3d(-64px,_0,_0)]
        [&.rise-pending_.blog-card--featured]:[transition:opacity_.95s_ease_.6s,_transform_.95s_cubic-bezier(.16,_1,_.3,_1)_.6s,_box-shadow_.25s]
        [&.rise-visible_.blog-card--featured]:opacity-[1]
        [&.rise-visible_.blog-card--featured]:[transform:translate3d(0,_0,_0)]
        [@media(prefers-reduced-motion:reduce)]:[&.rise-pending_.blogs-feature\_\_heading]:opacity-[1]
        [@media(prefers-reduced-motion:reduce)]:[&.rise-pending_.blogs-feature\_\_heading]:[transform:none]
        [@media(prefers-reduced-motion:reduce)]:[&.rise-pending_.blogs-feature\_\_heading]:[transition:none]
        [@media(prefers-reduced-motion:reduce)]:[&.rise-pending_.blog-card--featured]:opacity-[1]
        [@media(prefers-reduced-motion:reduce)]:[&.rise-pending_.blog-card--featured]:[transform:none]
        [@media(prefers-reduced-motion:reduce)]:[&.rise-pending_.blog-card--featured]:[transition:none]" aria-labelledby="blogs-feature-title" data-reveal-group>
        <div className="blogs-feature__heading">
        <span className="blogs-eyebrow inline-flex [row-gap:8px] [column-gap:8px] items-center text-[#fa7405] text-[length:10px]
          font-semibold tracking-[.12em] [.blogs-hero_>_&]:[animation-delay:.1s]">OUR BLOGS</span>
        <div className="blogs-section-heading flex items-center justify-between [row-gap:20px] [column-gap:20px] [margin-top:14px]
          [margin-right:0] [margin-bottom:30px] [margin-left:0] [&_h2]:text-[length:clamp(26px,3vw,38px)]
          [&_h2]:font-medium [&_h2]:tracking-[-.045em] [&_h2]:leading-[1.25] [&_h2]:[margin-top:0]
          [&_h2]:[margin-right:0] [&_h2]:[margin-bottom:0] [&_h2]:[margin-left:0] [&>span]:text-[length:11px]
          [&>span]:text-[#8d97a7] max-[800px]:[&>span]:hidden"><h2 id="blogs-feature-title">Your next chapter starts here.</h2><span>Ideas to help you move forward ↗</span></div>
        </div>
        <div className="blogs-feature__layout grid [grid-template-columns:1.45fr_1fr] [row-gap:25px] [column-gap:25px] max-[800px]:[grid-template-columns:1fr]">{blogs.length > 0 ? <BlogCard blog={blogs[0]} featured /> : <div className="blog-empty-state" role="status"><BookOpen size={40}/><h3>No blog posts yet</h3><p>New stories are on the way. Check back soon.</p><a href="/">Back to home</a></div>}<aside className="blogs-topics bg-white [padding-top:30px] [padding-right:30px] [padding-bottom:30px] [padding-left:30px]
          [border-top-width:1px] [border-top-style:solid] [border-top-color:#fff7ef] [border-right-width:1px]
          [border-right-style:solid] [border-right-color:#fff7ef] [border-bottom-width:1px] [border-bottom-style:solid]
          [border-bottom-color:#fff7ef] [border-left-width:1px] [border-left-style:solid] [border-left-color:#fff7ef]
          rounded-[20px] [&_h3]:text-[length:26px] [&_h3]:font-medium [&_h3]:tracking-[-.04em] [&_h3]:leading-[1.3]
          [&_h3]:[margin-top:15px] [&_h3]:[margin-right:0] [&_h3]:[margin-bottom:23px] [&_h3]:[margin-left:0]
          [&_button]:flex [&_button]:items-center [&_button]:[row-gap:14px] [&_button]:[column-gap:14px]
          [&_button]:[background:none] [&_button]:w-full [&_button]:[border-right-width:0]
          [&_button]:[border-right-style:none] [&_button]:[border-right-color:currentColor]
          [&_button]:[border-bottom-width:0] [&_button]:[border-bottom-style:none]
          [&_button]:[border-bottom-color:currentColor] [&_button]:[border-left-width:0]
          [&_button]:[border-left-style:none] [&_button]:[border-left-color:currentColor]
          [&_button]:[border-top-width:1px] [&_button]:[border-top-style:solid] [&_button]:[border-top-color:#fff7ef]
          [&_button]:[padding-top:19px] [&_button]:[padding-right:0] [&_button]:[padding-bottom:19px]
          [&_button]:[padding-left:0] [&_button]:text-left [&_button]:font-[family-name:inherit]
          [&_button]:text-[length:inherit] [&_button]:font-[inherit] [&_button]:[font-style:inherit]
          [&_button]:leading-[inherit] [&_button]:text-[#253551] [&_button]:cursor-pointer
          [&_button>span:nth-child(2)]:[flex:1] [&_strong]:block [&_strong]:font-medium [&_strong]:text-[length:12px]
          [&_small]:block [&_small]:text-[#929bad] [&_small]:text-[length:10px] [&_small]:[margin-top:6px]
          [&_button>svg]:text-[#9cacc9] [&_button:hover_strong]:text-[#fa7405] max-[520px]:[padding-top:25px]
          max-[520px]:[padding-right:25px] max-[520px]:[padding-bottom:25px] max-[520px]:[padding-left:25px]"><span className="blogs-topics__label text-[#8e99ab] text-[length:9px] tracking-[.12em]">FIND YOUR INSPIRATION</span><h3>A little direction.<br />A lot of possibility.</h3>{topics.map(({ name, detail, icon: Icon }) => <button key={name} onClick={() => { setCategory(name); document.getElementById('all-stories').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); }}><span className="blogs-topic-icon [width:43px] [height:43px] [background:#fff7ef] text-[#fa7405] rounded-[10px] grid [place-items:center] [flex-shrink:0]"><Icon size={22} /></span><span><strong>{name}</strong><small>{detail}</small></span><ArrowUpRight size={16} /></button>)}</aside></div>
      </section>
      <section className="blogs-library [&_h2]:text-[length:clamp(26px,3vw,38px)] [&_h2]:font-medium [&_h2]:tracking-[-.045em]
        [&_h2]:leading-[1.25] [&_h2]:[margin-top:17px] [&_h2]:[margin-right:0] [&_h2]:[margin-bottom:17px]
        [&_h2]:[margin-left:0] [padding-top:88px] [padding-right:0] [padding-bottom:0] [padding-left:0] text-center
        [scroll-margin-top:115px] [&_h2_span]:text-[#8d99ac] [&>p]:text-[#8893a5] [&>p]:text-[length:12px]
        [&>p]:leading-[1.8] max-[800px]:[padding-top:60px] [&.rise-pending_.blogs-library\_\_heading]:opacity-[0]
        [&.rise-pending_.blogs-library\_\_heading]:[transform:translate3d(0,_36px,_0)]
        [&.rise-pending_.blogs-library\_\_heading]:[transition:opacity_.85s_ease,_transform_.85s_cubic-bezier(.16,_1,_.3,_1)]
        [&.rise-visible_.blogs-library\_\_heading]:opacity-[1]
        [&.rise-visible_.blogs-library\_\_heading]:[transform:translate3d(0,_0,_0)]
        [@media(prefers-reduced-motion:reduce)]:[&.rise-pending_.blogs-library\_\_heading]:opacity-[1]
        [@media(prefers-reduced-motion:reduce)]:[&.rise-pending_.blogs-library\_\_heading]:[transform:none]
        [@media(prefers-reduced-motion:reduce)]:[&.rise-pending_.blogs-library\_\_heading]:[transition:none]" id="all-stories" aria-labelledby="all-stories-title" data-reveal-group>
        <div className="blogs-library__heading [&_>_p]:text-[#8893a5] [&_>_p]:text-[length:12px] [&_>_p]:leading-[1.8]"><span className="blogs-eyebrow inline-flex [row-gap:8px] [column-gap:8px] items-center text-[#fa7405] text-[length:10px]
          font-semibold tracking-[.12em] [.blogs-hero_>_&]:[animation-delay:.1s]"><BookOpen size={14} /> KEEP EXPLORING</span><h2 id="all-stories-title">Good reads. <span>Great next steps.</span></h2><p>Find your inspiration, build your skills, and make your next move with confidence.</p></div>
        <div className="blogs-filters flex justify-center flex-wrap [row-gap:10px] [column-gap:10px] [margin-top:32px] [margin-right:0]
          [margin-bottom:22px] [margin-left:0] [&_button]:font-[family-name:inherit] [&_button]:font-[inherit]
          [&_button]:[font-style:inherit] [&_button]:leading-[inherit] [&_button]:text-[length:11px]
          [&_button]:text-[#68768d] [&_button]:[padding-top:11px] [&_button]:[padding-right:18px]
          [&_button]:[padding-bottom:11px] [&_button]:[padding-left:18px] [&_button]:[border-top-width:1px]
          [&_button]:[border-top-style:solid] [&_button]:[border-top-color:transparent]
          [&_button]:[border-right-width:1px] [&_button]:[border-right-style:solid]
          [&_button]:[border-right-color:transparent] [&_button]:[border-bottom-width:1px]
          [&_button]:[border-bottom-style:solid] [&_button]:[border-bottom-color:transparent]
          [&_button]:[border-left-width:1px] [&_button]:[border-left-style:solid]
          [&_button]:[border-left-color:transparent] [&_button]:rounded-[7px] [&_button]:bg-white
          [&_button]:cursor-pointer [&_button]:[transition:background_.2s,border-color_.2s]
          [&_button[aria-pressed=true]]:text-[#fa7405] [&_button[aria-pressed=true]]:[border-color:#efd1b4]
          [&_button[aria-pressed=true]]:[background:#fff7ef] max-[520px]:[row-gap:7px] max-[520px]:[column-gap:7px]
          max-[520px]:[&_button]:[padding-top:10px] max-[520px]:[&_button]:[padding-right:12px]
          max-[520px]:[&_button]:[padding-bottom:10px] max-[520px]:[&_button]:[padding-left:12px]
          max-[520px]:[&_button]:text-[length:10px]" aria-label="Filter stories by topic">{blogTopics.map(topic => <button key={topic} aria-pressed={category === topic} onClick={() => setCategory(topic)}>{topic}</button>)}</div>
        <p className="blogs-result-count text-left text-[length:10px]! [margin-bottom:12px]" role="status">{filtered.length} stories{category !== 'All Posts' ? ` in ${category}` : ' to explore'}</p>
        <div className="blogs-grid grid [grid-template-columns:repeat(3,minmax(0,1fr))] [row-gap:24px] [column-gap:24px] text-left
          max-[800px]:[grid-template-columns:repeat(2,minmax(0,1fr))] max-[520px]:[grid-template-columns:1fr]
          max-[520px]:[row-gap:20px] max-[520px]:[column-gap:20px]">{filtered.map(blog => <BlogCard key={blog.slug} blog={blog} />)}{blogs.length > 0 && !filtered.length && <div className="blog-empty-state"><p>No stories match this topic yet.</p><button type="button" onClick={()=>setCategory('All Posts')}>View all stories</button></div>}</div>
      </section>
      <section className="blogs-cta relative isolate overflow-hidden rounded-[26px] text-center [padding-top:83px] [padding-right:100px]
        [padding-bottom:83px] [padding-left:100px] [margin-top:90px] bg-white [border-top-width:1px]
        [border-top-style:solid] [border-top-color:#fff7ef] [border-right-width:1px] [border-right-style:solid]
        [border-right-color:#fff7ef] [border-bottom-width:1px] [border-bottom-style:solid]
        [border-bottom-color:#fff7ef] [border-left-width:1px] [border-left-style:solid] [border-left-color:#fff7ef]
        shadow-[0_2px_3px_#1928400a,_0_8px_12px_-4px_#1928401a,_0_22px_28px_-10px_#19284029,_0_42px_55px_-20px_#19284033,_inset_0_1px_0_#fff]
        [margin-bottom:40px] [&_h2]:text-[length:clamp(30px,3.8vw,48px)] [&_h2]:font-medium [&_h2]:tracking-[-.05em]
        [&_h2]:[margin-top:20px] [&_h2]:[margin-right:0] [&_h2]:[margin-bottom:20px] [&_h2]:[margin-left:0]
        [&_h2_span]:text-[#fa7405] [&_p]:text-[length:12px] [&_p]:leading-[1.9] [&_p]:text-[#8792a5] [&>a]:inline-flex
        [&>a]:items-center [&>a]:[row-gap:15px] [&>a]:[column-gap:15px] [&>a]:[background:#fa7405] [&>a]:text-[white]
        [&>a]:[padding-top:14px] [&>a]:[padding-right:21px] [&>a]:[padding-bottom:14px] [&>a]:[padding-left:21px]
        [&>a]:rounded-[8px] [&>a]:text-[length:11px] [&>a]:[margin-top:24px] max-[800px]:[padding-top:65px]
        max-[800px]:[padding-right:60px] max-[800px]:[padding-bottom:65px] max-[800px]:[padding-left:60px]
        max-[800px]:[margin-top:60px] max-[520px]:[padding-top:60px] max-[520px]:[padding-right:30px]
        max-[520px]:[padding-bottom:60px] max-[520px]:[padding-left:30px] [&::before]:[content:none]
        [&.rise-pending_>_*]:opacity-[0] [&.rise-pending_>_*]:[transform:translate3d(0,_32px,_0)]
        [&.rise-pending_>_*]:[transition:opacity_.85s_ease,_transform_.85s_cubic-bezier(.16,_1,_.3,_1)]
        [&.rise-pending_>_h2]:[transition-delay:.12s] [&.rise-pending_>_p]:[transition-delay:.25s]
        [&.rise-pending_>_a]:[transition-delay:.38s] [&.rise-visible_>_*]:opacity-[1]
        [&.rise-visible_>_*]:[transform:translate3d(0,_0,_0)]
        [@media(prefers-reduced-motion:reduce)]:[&.rise-pending_>_*]:opacity-[1]
        [@media(prefers-reduced-motion:reduce)]:[&.rise-pending_>_*]:[transform:none]
        [@media(prefers-reduced-motion:reduce)]:[&.rise-pending_>_*]:[transition:none]" data-reveal-group aria-labelledby="blogs-cta-title">
        <span className="blogs-eyebrow inline-flex [row-gap:8px] [column-gap:8px] items-center text-[#fa7405] text-[length:10px]
          font-semibold tracking-[.12em] [.blogs-hero_>_&]:[animation-delay:.1s]">YOUR NEXT CHAPTER</span><h2 id="blogs-cta-title">Let’s build <span>your future.</span></h2><p>Turn what you learn into something real.<br />Practice your answers and take your next step with AntIntern.</p><a href="/#interviews">Explore interview tracks</a>
      </section>
      <footer className="blogs-footer flex justify-between items-center [row-gap:20px] [column-gap:20px] [padding-top:35px]
        [padding-right:0] [padding-bottom:35px] [padding-left:0] text-[#98a1b1] text-[length:10px]
        [&>a]:text-[length:17px] [&>a]:font-semibold [&>a]:text-[#253551] [&_a_span]:text-[length:10px]
        [&_a_span]:font-normal [&_a_span]:[margin-left:14px] [&_a_span]:text-[#98a1b1] max-[520px]:items-start
        max-[520px]:flex-col max-[520px]:[&_a_span]:block max-[520px]:[&_a_span]:[margin-top:7px]
        max-[520px]:[&_a_span]:[margin-right:0] max-[520px]:[&_a_span]:[margin-bottom:0]
        max-[520px]:[&_a_span]:[margin-left:0]"><a href="/">AntIntern<span> Learn. Build. Launch.</span></a><span>Ideas for a future full of possibilities.</span></footer>
    </div>
  </main><SiteFooter /></>;
}

