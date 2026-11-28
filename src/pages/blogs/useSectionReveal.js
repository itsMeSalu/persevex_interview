"use client";
import { useEffect } from 'react';

export default function useSectionReveal(rootRef, dependency) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root || !('IntersectionObserver' in window)) return;
    const elements = root.querySelectorAll('[data-rise], [data-reveal-group]');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('rise-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -32px 0px' });
    elements.forEach(element => {
      if (!element.classList.contains('rise-visible') && (element.hasAttribute('data-reveal-group') || element.getBoundingClientRect().top >= window.innerHeight)) element.classList.add('rise-pending');
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, [rootRef, dependency]);
}
