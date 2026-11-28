"use client";

import { useLayoutEffect, useRef, useState } from 'react';
import { Search, MapPin, BriefcaseBusiness, ChevronDown, SlidersHorizontal, X, Wallet, ArrowUpRight } from 'lucide-react';
import { careerRoles, filterCareerRoles } from '../career-data';
import useSectionReveal from '../useSectionReveal';

const departments = [...new Set(careerRoles.map(role => role.department))];
const locations = [...new Set(careerRoles.map(role => role.location))];
const initialFilters = { query: '', department: '', type: '', location: '', remoteOnly: false };

function FilterSelect({ label, value, options, allLabel, onChange }) {
  const id = `careers-filter-${label.toLowerCase().replace(/\s+/g, '-')}`;
  return <div className="positions-filter [&_>_label]:block [&_>_label]:[margin-bottom:9px] [&_>_label]:text-[#81634a]
    [&_>_label]:text-[length:11px] [&_>_label]:font-medium [&_select]:w-full [&_select]:[height:44px]
    [&_select]:appearance-none [&_select]:[padding-top:0] [&_select]:[padding-right:34px]
    [&_select]:[padding-bottom:0] [&_select]:[padding-left:13px] [&_select]:font-[family-name:inherit]
    [&_select]:font-[inherit] [&_select]:[font-style:inherit] [&_select]:leading-[inherit]
    [&_select]:text-[length:11px] [&_select]:text-[#856c57] [&_select]:[border-top-width:1px]
    [&_select]:[border-top-style:solid] [&_select]:[border-top-color:#ebc8a9] [&_select]:[border-right-width:1px]
    [&_select]:[border-right-style:solid] [&_select]:[border-right-color:#ebc8a9]
    [&_select]:[border-bottom-width:1px] [&_select]:[border-bottom-style:solid]
    [&_select]:[border-bottom-color:#ebc8a9] [&_select]:[border-left-width:1px]
    [&_select]:[border-left-style:solid] [&_select]:[border-left-color:#ebc8a9] [&_select]:rounded-[8px]
    [&_select]:cursor-pointer [&_select]:[text-overflow:ellipsis] [&_select]:bg-white [&_select]:[translate:none]
    [&_select]:shadow-[0_2px_3px_#51392508,_0_8px_12px_-5px_#5139251c,_0_19px_27px_-14px_#a3643133,_inset_0_1px_0_#fff]"><label htmlFor={id}>{label}</label><div className="positions-filter__select relative [&_>_svg]:absolute [&_>_svg]:[right:13px] [&_>_svg]:[top:15px]
    [&_>_svg]:pointer-events-none [&_>_svg]:text-[#b4b4b4]"><select id={id} value={value} onChange={event => onChange(event.target.value)}><option value="">{allLabel}</option>{options.map(option => <option key={option} value={option}>{option}</option>)}</select><ChevronDown size={15} aria-hidden="true" /></div></div>;
}

export default function CareersPositions({ onApply }) {
  const root = useRef(null);
  const gridRef = useRef(null);
  const [filters, setFilters] = useState(initialFilters);
  const [search, setSearch] = useState('');
  const roles = filterCareerRoles(careerRoles, filters);
  const update = (key, value) => setFilters(current => ({ ...current, [key]: value }));
  const hasFilters = Object.values(filters).some(Boolean) || Boolean(search);
  useSectionReveal(root, JSON.stringify(filters));

  // Let each following card fill the next available space, independently
  // of expanded neighbors, while retaining DOM order and the mobile list.
  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll('.position-card'));
    let frame;
    const layout = () => {
      if (window.matchMedia('(max-width: 520px)').matches) {
        delete grid.dataset.masonry;
        cards.forEach(card => { card.style.gridRowEnd = ''; });
        return;
      }
      const spans = cards.map(card => Math.ceil(card.getBoundingClientRect().height + 20));
      cards.forEach((card, index) => {
        const span = `span ${spans[index]}`;
        if (card.style.gridRowEnd !== span) card.style.gridRowEnd = span;
      });
      grid.dataset.masonry = 'true';
    };
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(layout);
    });
    observer.observe(grid);
    cards.forEach(card => observer.observe(card));
    layout();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      delete grid.dataset.masonry;
      cards.forEach(card => { card.style.gridRowEnd = ''; });
    };
  }, [roles]);

  const reset = () => { setFilters(initialFilters); setSearch(''); };
  return <section id="open-roles" className="careers-positions [padding-top:10px] [padding-right:6%] [padding-bottom:100px] [padding-left:6%] bg-white
    text-[#402b19] [scroll-margin-top:145px] [&_:is(button,select,input):focus-visible]:[outline:2px_solid_#fa7405]
    [&_:is(button,select,input):focus-visible]:[outline-offset:4px] max-[520px]:[padding-bottom:65px]" ref={root} aria-labelledby="positions-title">
    <div className="careers-positions__inner [width:min(100%,_1240px)] [margin-left:auto] [margin-right:auto]">
      <header className="positions-banner relative isolate overflow-hidden [min-height:300px] [padding-top:55px] [padding-right:48px]
        [padding-bottom:55px] [padding-left:48px] flex flex-col justify-center rounded-[20px] [background:#7e4f29]
        text-[#fff] [&_>_img]:absolute [&_>_img]:z-[-2] [&_>_img]:[top:0] [&_>_img]:[right:0] [&_>_img]:[bottom:0]
        [&_>_img]:[left:0] [&_>_img]:w-full [&_>_img]:h-full [&_>_img]:object-cover
        [&_>_img]:[object-position:center_50%] [&_h2]:[margin-top:16px] [&_h2]:[margin-right:0]
        [&_h2]:[margin-bottom:14px] [&_h2]:[margin-left:0] [&_h2]:leading-[1.15]
        [&_h2]:text-[length:clamp(30px,_3vw,_42px)] [&_h2]:font-medium [&_h2]:tracking-[-.035em]
        [&_p]:[max-width:480px] [&_p]:[margin-top:0] [&_p]:[margin-right:0] [&_p]:[margin-bottom:0]
        [&_p]:[margin-left:0] [&_p]:text-[length:13px] [&_p]:leading-[1.8] [&_p]:text-[#ebc8a9]
        max-[850px]:[padding-top:40px] max-[850px]:[padding-right:30px] max-[850px]:[padding-bottom:40px]
        max-[850px]:[padding-left:30px] max-[520px]:[min-height:280px] max-[520px]:[padding-top:32px]
        max-[520px]:[padding-right:25px] max-[520px]:[padding-bottom:54px] max-[520px]:[padding-left:25px]
        max-[520px]:rounded-[15px] max-[520px]:[&_p]:text-[length:12px] [&.rise-pending]:opacity-[0]
        [&.rise-pending]:[transform:translate3d(0,_32px,_0)]
        [&.rise-pending]:[transition:opacity_.8s_ease,_transform_.8s_cubic-bezier(.16,_1,_.3,_1)]
        [&.rise-visible]:opacity-[1] [&.rise-visible]:[transform:translate3d(0,_0,_0)]
        [@media(prefers-reduced-motion:reduce)]:[&.rise-pending]:opacity-[1]
        [@media(prefers-reduced-motion:reduce)]:[&.rise-pending]:[transform:none]
        [@media(prefers-reduced-motion:reduce)]:[&.rise-pending]:[transition:none]" data-reveal-group>
        <img src="/careers/office-banner.jpg" alt="" loading="lazy" />
        <div className="positions-banner__shade absolute [top:0] [right:0] [bottom:0] [left:0] z-[-1] [background:linear-gradient(90deg,_#4b2d14e6,_#78492299_60%,_#da864133)]" aria-hidden="true" />
        <div className="positions-banner__copy [&_>_span:first-child]:uppercase [&_>_span:first-child]:text-[#ebc8a9]
          [&_>_span:first-child]:text-[length:11px] [&_>_span:first-child]:font-semibold
          [&_>_span:first-child]:tracking-[.14em]"><span>Explore Our Work</span><h2 id="positions-title">Ways to Contribute</h2><p>Illustrative role profiles, not confirmed vacancies. Send an expression of interest to ask about current opportunities.</p><span className="positions-banner__line [height:3px] [width:30px] [margin-top:24px] rounded-[3px] [background:#ebc8a9] hidden" aria-hidden="true" /></div>
        <span className="positions-banner__count absolute [bottom:27px] [right:30px] text-[#fff7ef] text-[length:10px]
          max-[520px]:[left:25px] max-[520px]:[bottom:22px] max-[520px]:[right:auto] max-[520px]:text-[length:9px]">{careerRoles.length} opportunities to make an impact</span>
      </header>
      <div className="positions-browser [padding-top:35px] [padding-right:12px] [padding-bottom:0] [padding-left:12px]
        max-[520px]:[padding-top:24px] max-[520px]:[padding-right:0] max-[520px]:[padding-bottom:0]
        max-[520px]:[padding-left:0]">
        <form data-reveal-group className="positions-search flex items-stretch [row-gap:12px] [column-gap:12px] [&_input]:[min-width:0] [&_input]:[flex:1]
          [&_input]:h-full [&_input]:[border-top-width:0] [&_input]:[border-top-style:none]
          [&_input]:[border-top-color:currentColor] [&_input]:[border-right-width:0] [&_input]:[border-right-style:none]
          [&_input]:[border-right-color:currentColor] [&_input]:[border-bottom-width:0]
          [&_input]:[border-bottom-style:none] [&_input]:[border-bottom-color:currentColor]
          [&_input]:[border-left-width:0] [&_input]:[border-left-style:none] [&_input]:[border-left-color:currentColor]
          [&_input]:[outline:none] [&_input]:font-[family-name:inherit] [&_input]:font-[inherit]
          [&_input]:[font-style:inherit] [&_input]:leading-[inherit] [&_input]:text-[length:12px]
          [&_input]:[background:transparent] [&_input]:text-[#513925] [&_input::placeholder]:text-[#b4b4b4]
          [&_button]:inline-flex [&_button]:items-center [&_button]:justify-center [&_button]:[row-gap:16px]
          [&_button]:[column-gap:16px] [&_button]:[padding-top:0] [&_button]:[padding-right:26px]
          [&_button]:[padding-bottom:0] [&_button]:[padding-left:26px] [&_button]:[border-top-width:0]
          [&_button]:[border-top-style:none] [&_button]:[border-top-color:currentColor] [&_button]:[border-right-width:0]
          [&_button]:[border-right-style:none] [&_button]:[border-right-color:currentColor]
          [&_button]:[border-bottom-width:0] [&_button]:[border-bottom-style:none]
          [&_button]:[border-bottom-color:currentColor] [&_button]:[border-left-width:0]
          [&_button]:[border-left-style:none] [&_button]:[border-left-color:currentColor] [&_button]:rounded-[9px]
          [&_button]:[background:#fa7405] [&_button]:text-[#fff] [&_button]:font-[family-name:inherit]
          [&_button]:[font-style:inherit] [&_button]:leading-[inherit] [&_button]:text-[length:12px]
          [&_button]:font-medium [&_button]:cursor-pointer [&_button:hover]:[background:#c17231]
          max-[520px]:[row-gap:8px] max-[520px]:[column-gap:8px] max-[520px]:[&_input]:text-[length:11px]
          max-[520px]:[&_button]:[padding-left:15px] max-[520px]:[&_button]:[padding-right:15px]
          max-[520px]:[&_button]:[row-gap:7px] max-[520px]:[&_button]:[column-gap:7px]
          max-[520px]:[&_button]:text-[length:11px] max-[520px]:[&_button_>_svg]:hidden
          [&_>_button]:[transition:translate_.2s,_box-shadow_.2s,_background_.2s] [&_>_button]:[translate:none]
          [&_>_button]:shadow-[0_3px_0_#ad662c,_0_10px_17px_-6px_#da86415c] [&_>_button:hover]:[translate:none]
          [&_>_button:hover]:shadow-[0_4px_0_#ad662c,_0_13px_20px_-6px_#da864166] [&_>_button:active]:[translate:none]
          [&_>_button:active]:shadow-[0_1px_0_#ad662c,_0_5px_10px_-5px_#da864140] [&.rise-pending]:opacity-[0]
          [&.rise-pending]:[transform:translate3d(0,_32px,_0)]
          [&.rise-pending]:[transition:opacity_.8s_ease,_transform_.8s_cubic-bezier(.16,_1,_.3,_1)]
          [&.rise-visible]:opacity-[1] [&.rise-visible]:[transform:translate3d(0,_0,_0)]
          [@media(prefers-reduced-motion:reduce)]:[&.rise-pending]:opacity-[1]
          [@media(prefers-reduced-motion:reduce)]:[&.rise-pending]:[transform:none]
          [@media(prefers-reduced-motion:reduce)]:[&.rise-pending]:[transition:none]
          [@media(prefers-reduced-motion:reduce)]:[&_>_button]:[transition:none]" role="search" aria-label="Search open positions" onSubmit={event => { event.preventDefault(); update('query', search); }}>
          <div className="positions-search__field [flex:1] [min-width:0] flex items-center [row-gap:12px] [column-gap:12px]
            [padding-top:0] [padding-right:18px] [padding-bottom:0] [padding-left:18px] [height:51px]
            [border-top-width:1px] [border-top-style:solid] [border-top-color:#fff7ef] [border-right-width:1px]
            [border-right-style:solid] [border-right-color:#fff7ef] [border-bottom-width:1px] [border-bottom-style:solid]
            [border-bottom-color:#fff7ef] [border-left-width:1px] [border-left-style:solid] [border-left-color:#fff7ef]
            rounded-[10px] text-[#bd9d83] bg-white [translate:none]
            shadow-[0_2px_3px_#51392508,_0_8px_12px_-5px_#5139251c,_0_19px_27px_-14px_#a3643133,_inset_0_1px_0_#fff]
            [&:focus-within]:[border-color:#f0b88a] max-[520px]:[padding-left:12px] max-[520px]:[padding-right:12px]
            max-[520px]:[row-gap:8px] max-[520px]:[column-gap:8px]"><Search size={19} aria-hidden="true" /><label className="positions-sr-only absolute [width:1px] [height:1px] [padding-top:0] [padding-right:0] [padding-bottom:0]
            [padding-left:0] [margin-top:-1px] [margin-right:-1px] [margin-bottom:-1px] [margin-left:-1px] overflow-hidden
            [clip-path:inset(50%)] whitespace-nowrap [border-top-width:0] [border-top-style:none]
            [border-top-color:currentColor] [border-right-width:0] [border-right-style:none]
            [border-right-color:currentColor] [border-bottom-width:0] [border-bottom-style:none]
            [border-bottom-color:currentColor] [border-left-width:0] [border-left-style:none]
            [border-left-color:currentColor]" htmlFor="positions-search">Search roles by title, department, or keyword</label><input id="positions-search" type="search" placeholder="Search by title, department, keywords…" value={search} onChange={event => { setSearch(event.target.value); update('query', event.target.value); }} /></div>
          <button type="submit">Search <Search size={15} aria-hidden="true" /></button>
        </form>
        <div className="positions-filters grid [grid-template-columns:repeat(3,minmax(0,1fr))_auto] [row-gap:20px] [column-gap:20px]
          [align-items:end] [margin-top:24px] max-[850px]:[grid-template-columns:repeat(2,minmax(0,1fr))]
          max-[850px]:[row-gap:18px] max-[850px]:[column-gap:18px] max-[520px]:[row-gap:15px]
          max-[520px]:[column-gap:12px] [&.rise-pending]:opacity-[0] [&.rise-pending]:[transform:translate3d(0,_32px,_0)]
          [&.rise-pending]:[transition:opacity_.8s_ease,_transform_.8s_cubic-bezier(.16,_1,_.3,_1)]
          [&.rise-visible]:opacity-[1] [&.rise-visible]:[transform:translate3d(0,_0,_0)]
          [@media(prefers-reduced-motion:reduce)]:[&.rise-pending]:opacity-[1]
          [@media(prefers-reduced-motion:reduce)]:[&.rise-pending]:[transform:none]
          [@media(prefers-reduced-motion:reduce)]:[&.rise-pending]:[transition:none]" data-reveal-group>
          <FilterSelect label="Department" value={filters.department} options={departments} allLabel="All Departments" onChange={value => update('department', value)} />
          <FilterSelect label="Work Type" value={filters.type} options={[...new Set(careerRoles.map(role => role.type))]} allLabel="All Work Types" onChange={value => update('type', value)} />
          <FilterSelect label="Location" value={filters.location} options={locations} allLabel="All Locations" onChange={value => update('location', value)} />
          <label className="positions-remote inline-flex items-center [row-gap:9px] [column-gap:9px] [min-height:44px] text-[length:11px]
            text-[#927a66] cursor-pointer whitespace-nowrap bg-white [padding-top:0] [padding-right:13px]
            [padding-bottom:0] [padding-left:13px] [border-top-width:1px] [border-top-style:solid]
            [border-top-color:#ebc8a9] [border-right-width:1px] [border-right-style:solid] [border-right-color:#ebc8a9]
            [border-bottom-width:1px] [border-bottom-style:solid] [border-bottom-color:#ebc8a9] [border-left-width:1px]
            [border-left-style:solid] [border-left-color:#ebc8a9] rounded-[8px] [translate:none]
            shadow-[0_2px_3px_#51392508,_0_8px_12px_-5px_#5139251c,_0_19px_27px_-14px_#a3643133,_inset_0_1px_0_#fff]
            [&_input]:[width:15px] [&_input]:[height:15px] [&_input]:[accent-color:#fa7405]"><input type="checkbox" checked={filters.remoteOnly} onChange={event => update('remoteOnly', event.target.checked)} /><span>Remote only</span></label>
        </div>
        <div className="positions-results-bar flex items-center justify-between [row-gap:15px] [column-gap:15px] [padding-top:24px]
          [padding-right:0] [padding-left:0] [border-bottom-width:1px] [border-bottom-style:solid]
          [border-bottom-color:#fff7ef] [margin-top:13px] [margin-bottom:23px] [padding-bottom:22px] [&_p]:[margin-top:0]
          [&_p]:[margin-right:0] [&_p]:[margin-bottom:0] [&_p]:[margin-left:0] [&_p]:text-[#8f7662]
          [&_p]:text-[length:13px] [&_strong]:text-[#fa7405] [&_strong]:inline-block [&_strong]:[margin-left:1px]
          [&_strong]:[margin-right:1px] [&_strong]:text-[length:inherit] [&_strong]:font-semibold
          [&_strong]:tracking-[normal] [&_>_span]:inline-flex [&_>_span]:items-center [&_>_span]:[row-gap:7px]
          [&_>_span]:[column-gap:7px] [&_>_span]:text-[#b8b8b8] [&_>_span]:text-[length:10px] [&_>_button]:inline-flex
          [&_>_button]:items-center [&_>_button]:[row-gap:7px] [&_>_button]:[column-gap:7px]
          [&_>_button]:[background:none] [&_>_button]:[border-top-width:0] [&_>_button]:[border-top-style:none]
          [&_>_button]:[border-top-color:currentColor] [&_>_button]:[border-right-width:0]
          [&_>_button]:[border-right-style:none] [&_>_button]:[border-right-color:currentColor]
          [&_>_button]:[border-bottom-width:0] [&_>_button]:[border-bottom-style:none]
          [&_>_button]:[border-bottom-color:currentColor] [&_>_button]:[border-left-width:0]
          [&_>_button]:[border-left-style:none] [&_>_button]:[border-left-color:currentColor]
          [&_>_button]:font-[family-name:inherit] [&_>_button]:font-[inherit] [&_>_button]:[font-style:inherit]
          [&_>_button]:leading-[inherit] [&_>_button]:text-[length:11px] [&_>_button]:text-[#fa7405]
          [&_>_button]:cursor-pointer max-[520px]:[&_>_span]:hidden [&.rise-pending]:opacity-[0]
          [&.rise-pending]:[transform:translate3d(0,_32px,_0)]
          [&.rise-pending]:[transition:opacity_.8s_ease,_transform_.8s_cubic-bezier(.16,_1,_.3,_1)]
          [&.rise-visible]:opacity-[1] [&.rise-visible]:[transform:translate3d(0,_0,_0)]
          [@media(prefers-reduced-motion:reduce)]:[&.rise-pending]:opacity-[1]
          [@media(prefers-reduced-motion:reduce)]:[&.rise-pending]:[transform:none]
          [@media(prefers-reduced-motion:reduce)]:[&.rise-pending]:[transition:none]" data-reveal-group><p role="status" aria-live="polite">Showing <strong>{roles.length}</strong> {roles.length === 1 ? 'role' : 'roles'}</p>{hasFilters ? <button type="button" onClick={reset}><X size={13} /> Clear filters</button> : <span><SlidersHorizontal size={13} aria-hidden="true" /> Find your next chapter</span>}</div>
        {roles.length > 0 ? <div ref={gridRef} className="positions-grid grid [grid-template-columns:repeat(2,minmax(0,1fr))] items-start [row-gap:20px]
          [column-gap:20px] [grid-auto-rows:minmax(230px,_auto)] max-[520px]:[grid-template-columns:1fr]
          max-[520px]:[row-gap:15px] max-[520px]:[column-gap:15px] max-[520px]:[grid-auto-rows:minmax(220px,_auto)]">{roles.map(role => <article className="position-card bg-white box-border min-h-[230px] max-[520px]:min-h-[220px] [padding-top:25px] [padding-right:27px] [padding-bottom:25px]
          [padding-left:27px] [border-top-width:1px] [border-top-style:solid] [border-top-color:#fff7ef]
          [border-right-width:1px] [border-right-style:solid] [border-right-color:#fff7ef] [border-bottom-width:1px]
          [border-bottom-style:solid] [border-bottom-color:#fff7ef] [border-left-width:1px] [border-left-style:solid]
          [border-left-color:#fff7ef] rounded-[10px]
          shadow-[0_2px_3px_#51392508,_0_8px_12px_-5px_#5139251c,_0_19px_27px_-14px_#a3643133,_inset_0_1px_0_#fff]
          [&_h3]:[min-height:2.8em] [&_h3]:[margin-top:14px] [&_h3]:[margin-right:0] [&_h3]:[margin-bottom:15px]
          [&_h3]:[margin-left:0] [&_h3]:text-[length:clamp(18px,_1.6vw,_21px)] [&_h3]:font-medium [&_h3]:leading-[1.4]
          [&_h3]:tracking-[-.02em] max-[520px]:[padding-top:22px] max-[520px]:[padding-right:22px]
          max-[520px]:[padding-bottom:22px] max-[520px]:[padding-left:22px] [&.rise-pending]:opacity-[0]
          [&.rise-pending]:[transform:translate3d(0,_32px,_0)]
          [&.rise-pending]:[transition:opacity_.8s_ease,_transform_.8s_cubic-bezier(.16,_1,_.3,_1)]
          [&.rise-visible]:opacity-[1] [&.rise-visible]:[transform:translate3d(0,_0,_0)]
          [@media(prefers-reduced-motion:reduce)]:[&.rise-pending]:opacity-[1]
          [@media(prefers-reduced-motion:reduce)]:[&.rise-pending]:[transform:none]
          [@media(prefers-reduced-motion:reduce)]:[&.rise-pending]:[transition:none]
          max-[520px]:[&_h3]:text-[length:19px]" key={role.id} data-reveal-group>
          <div className="position-card__department flex items-center justify-between [row-gap:12px] [column-gap:12px] text-[length:10px]
            text-[#a1a1a1] [padding-top:0] [padding-right:0] [padding-bottom:0] [padding-left:0] [border-top-width:0]
            [border-top-style:none] [border-top-color:currentColor] [border-right-width:0] [border-right-style:none]
            [border-right-color:currentColor] [border-bottom-width:0] [border-bottom-style:none]
            [border-bottom-color:currentColor] [border-left-width:0] [border-left-style:none]
            [border-left-color:currentColor] [&_>_span]:text-[length:11px] [&_>_span]:text-[#fa7405]
            [&_>_span]:font-semibold [&_small]:text-[#b8b8b8] [&_small]:text-[length:11px]"><span>{role.department}</span></div>
          <details className="position-card__accordion [&[open]_.position-card\_\_expand_>_svg]:[transform:rotate(180deg)]
            [&[open]_.position-card\_\_details_>_*]:[animation:position-detail-rise_.45s_cubic-bezier(.16,_1,_.3,_1)_both]
            [&[open]_.position-card\_\_details_h4]:[animation-delay:.05s]
            [&[open]_.position-card\_\_details_ul]:[animation-delay:.1s]
            [&[open]_.position-card\_\_details_>_a]:[animation-delay:.15s]
            [@media(prefers-reduced-motion:reduce)]:[&[open]_.position-card\_\_details_>_*]:[animation:none]">
            <summary className="position-card__summary flex items-start list-none cursor-pointer [row-gap:16px] [column-gap:16px]
              [&::-webkit-details-marker]:hidden [&:hover_.position-card\_\_expand]:[background:#fff7ef]
              [&:focus-visible]:[outline:2px_solid_#fa7405] [&:focus-visible]:[outline-offset:5px]
              [&:focus-visible]:rounded-[8px]">
              <div className="position-card__overview [flex:1] [min-width:0]">
                <h3>{role.title}</h3>
                <div className="position-card__meta flex flex-wrap [min-height:30px] text-[length:11px] [row-gap:9px] [column-gap:17px]
                  text-[#a8a8a8] [&_>_span]:inline-flex [&_>_span]:items-center [&_>_span]:[row-gap:6px]
                  [&_>_span]:[column-gap:6px]"><span><MapPin size={14} aria-hidden="true" />{role.location}</span><span><BriefcaseBusiness size={14} aria-hidden="true" />{role.type}</span></div>
                <div className="position-card__compensation [min-height:28px] [margin-top:6px]">{role.stipend && <span className="position-card__stipend inline-flex items-center [row-gap:7px] [column-gap:7px] rounded-[6px] [padding-top:0]
                  [padding-right:0] [padding-bottom:0] [padding-left:0] [margin-top:0] [margin-right:0] [margin-bottom:0]
                  [margin-left:0] [background:transparent] text-[length:11px] text-[#a68163]"><Wallet size={14} aria-hidden="true" />{role.stipend}</span>}</div>
              </div>
              <span className="position-card__expand grid [place-items:center] [flex-shrink:0] rounded-[50%] [transition:background_.2s]
                [width:28px] [height:28px] [margin-top:16px] [border-top-width:0] [border-top-style:none]
                [border-top-color:currentColor] [border-right-width:0] [border-right-style:none]
                [border-right-color:currentColor] [border-bottom-width:0] [border-bottom-style:none]
                [border-bottom-color:currentColor] [border-left-width:0] [border-left-style:none]
                [border-left-color:currentColor] [background:transparent] text-[#b0b0b0]
                [&_>_svg]:[transition:transform_.3s_ease] [@media(prefers-reduced-motion:reduce)]:[&_>_svg]:[transition:none]" aria-hidden="true"><ChevronDown size={20} /></span>
            </summary>
            <div className="position-card__details [border-top-width:1px] [border-top-style:solid] [border-top-color:#fff7ef]
              [margin-top:16px] [padding-top:20px] [&_>_p]:[margin-top:0] [&_>_p]:[margin-right:0] [&_>_p]:[margin-bottom:0]
              [&_>_p]:[margin-left:0] [&_>_p]:text-[#9a9a9a] [&_>_p]:text-[length:12px] [&_>_p]:leading-[1.9]
              [&_h4]:[margin-top:21px] [&_h4]:[margin-right:0] [&_h4]:[margin-bottom:13px] [&_h4]:[margin-left:0]
              [&_h4]:text-[#6a4c33] [&_h4]:text-[length:12px] [&_h4]:font-semibold [&_ul]:[margin-top:0]
              [&_ul]:[margin-right:0] [&_ul]:[margin-bottom:0] [&_ul]:[margin-left:0] [&_ul]:[padding-left:18px]
              [&_ul]:text-[#9a9a9a] [&_ul]:text-[length:12px] [&_ul]:leading-[1.8] [&_ul]:list-disc
              [&_li_+_li]:[margin-top:7px] [&_li::marker]:text-[#fa7405]">
              <p>{role.description}</p>
              <h4>Requirements</h4>
              <ul>{role.requirements.map(requirement => <li key={requirement}>{requirement}</li>)}</ul>
              <a className="position-card__apply inline-flex items-center [row-gap:10px] [column-gap:10px] [min-height:42px]
                [padding-top:0] [padding-right:17px] [padding-bottom:0] [padding-left:17px] [margin-top:23px] rounded-[8px]
                [background:#fa7405] text-[white] no-underline text-[length:11px] shadow-[none] font-medium
                [&:hover]:[background:#c17231] [&:focus-visible]:[outline:2px_solid_#fa7405]
                [&:focus-visible]:[outline-offset:5px] [&:focus-visible]:rounded-[8px]" href="#application" onClick={event => { event.preventDefault(); onApply(role); }} aria-label={`Apply for ${role.title}`}>Express interest <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
          </details>
        </article>)}</div> : <div className="positions-empty [&_button]:inline-flex [&_button]:items-center [&_button]:justify-center
          [&_button]:[row-gap:16px] [&_button]:[column-gap:16px] [&_button]:[padding-top:0]
          [&_button]:[padding-right:26px] [&_button]:[padding-bottom:0] [&_button]:[padding-left:26px]
          [&_button]:[border-top-width:0] [&_button]:[border-top-style:none] [&_button]:[border-top-color:currentColor]
          [&_button]:[border-right-width:0] [&_button]:[border-right-style:none]
          [&_button]:[border-right-color:currentColor] [&_button]:[border-bottom-width:0]
          [&_button]:[border-bottom-style:none] [&_button]:[border-bottom-color:currentColor]
          [&_button]:[border-left-width:0] [&_button]:[border-left-style:none]
          [&_button]:[border-left-color:currentColor] [&_button]:rounded-[9px] [&_button]:[background:#fa7405]
          [&_button]:text-[#fff] [&_button]:font-[family-name:inherit] [&_button]:[font-style:inherit]
          [&_button]:leading-[inherit] [&_button]:text-[length:12px] [&_button]:font-medium [&_button]:cursor-pointer
          [&_button]:[min-height:42px] [&_button]:[margin-top:20px] [&_button:hover]:[background:#c17231] text-center
          [padding-top:65px] [padding-right:20px] [padding-bottom:65px] [padding-left:20px] text-[#b1b1b1]
          [&_>_svg]:[margin-top:auto] [&_>_svg]:[margin-right:auto] [&_>_svg]:[margin-bottom:auto]
          [&_>_svg]:[margin-left:auto] [&_>_svg]:text-[#e7bd9b] [&_h3]:text-[length:20px] [&_h3]:text-[#513925]
          [&_h3]:font-medium [&_h3]:[margin-top:18px] [&_h3]:[margin-right:0] [&_h3]:[margin-bottom:10px]
          [&_h3]:[margin-left:0] [&_p]:text-[length:12px]"><Search size={28} aria-hidden="true" /><h3>No matching roles</h3><p>Try a different keyword or adjust your filters.</p><button type="button" onClick={reset}>View all positions</button></div>}
        <aside className="positions-open-application flex items-center justify-between [row-gap:32px] [column-gap:32px] [margin-top:42px]
          [padding-top:35px] [padding-right:36px] [padding-bottom:35px] [padding-left:36px] [border-top-width:1px]
          [border-top-style:solid] [border-top-color:#ebc8a9] [border-right-width:1px] [border-right-style:solid]
          [border-right-color:#ebc8a9] [border-bottom-width:1px] [border-bottom-style:solid]
          [border-bottom-color:#ebc8a9] [border-left-width:1px] [border-left-style:solid] [border-left-color:#ebc8a9]
          rounded-[12px] bg-white shadow-[0_2px_3px_#51392508,_0_8px_12px_-5px_#5139251c,_0_19px_27px_-14px_#a3643133]
          [&_h3]:[margin-top:11px] [&_h3]:[margin-right:0] [&_h3]:[margin-bottom:13px] [&_h3]:[margin-left:0]
          [&_h3]:text-[#513925] [&_h3]:text-[length:clamp(20px,_2vw,_26px)] [&_h3]:font-medium [&_h3]:leading-[1.3]
          [&_h3]:tracking-[-.025em] [&_p]:[max-width:660px] [&_p]:[margin-top:0] [&_p]:[margin-right:0]
          [&_p]:[margin-bottom:0] [&_p]:[margin-left:0] [&_p]:text-[#a1a1a1] [&_p]:text-[length:12px] [&_p]:leading-[1.9]
          [&_>_a]:inline-flex [&_>_a]:[flex-shrink:0] [&_>_a]:items-center [&_>_a]:justify-center [&_>_a]:[row-gap:16px]
          [&_>_a]:[column-gap:16px] [&_>_a]:[min-height:45px] [&_>_a]:[padding-top:0] [&_>_a]:[padding-right:22px]
          [&_>_a]:[padding-bottom:0] [&_>_a]:[padding-left:22px] [&_>_a]:rounded-[8px] [&_>_a]:[background:#fa7405]
          [&_>_a]:text-[#fff] [&_>_a]:text-[length:12px] [&_>_a]:font-medium [&_>_a]:no-underline
          [&_>_a]:shadow-[0_3px_0_#ad662c,_0_10px_17px_-6px_#da864140] [&_>_a:hover]:[background:#c17231]
          [&_>_a:focus-visible]:[outline:2px_solid_#fa7405] [&_>_a:focus-visible]:[outline-offset:5px]
          max-[700px]:items-start max-[700px]:flex-col max-[700px]:[padding-top:28px] max-[700px]:[padding-right:24px]
          max-[700px]:[padding-bottom:28px] max-[700px]:[padding-left:24px] max-[700px]:[row-gap:22px]
          max-[700px]:[column-gap:22px] max-[700px]:[margin-top:30px] [&[data-rise].rise-pending]:opacity-[0]
          [&[data-rise].rise-pending]:[transform:translate3d(0,_36px,_0)]
          [&[data-rise].rise-pending]:[transition:opacity_.8s_ease,_transform_.8s_cubic-bezier(.16,_1,_.3,_1)]
          [&[data-rise].rise-pending.rise-visible]:opacity-[1]
          [&[data-rise].rise-pending.rise-visible]:[transform:translate3d(0,_0,_0)]
          [@media(prefers-reduced-motion:reduce)]:[&[data-rise].rise-pending]:opacity-[1]
          [@media(prefers-reduced-motion:reduce)]:[&[data-rise].rise-pending]:[transform:none]
          [@media(prefers-reduced-motion:reduce)]:[&[data-rise].rise-pending]:[transition:none]" data-rise aria-labelledby="open-application-title">
          <div>
            <span className="positions-open-application__eyebrow text-[#fa7405] text-[length:12px] font-semibold">Don&apos;t see your role?</span>
            <h3 id="open-application-title">Send us an open application</h3>
            <p>We hire on culture fit and skill first. If you&apos;re exceptional at what you do and passionate about education — let us know.</p>
          </div>
          <a href="#application" onClick={event => { event.preventDefault(); onApply({ title: "Open Application", id: "open" }); }}>Express Interest <ArrowUpRight size={17} aria-hidden="true" /></a>
        </aside>
      </div>
    </div>
  </section>;
}
