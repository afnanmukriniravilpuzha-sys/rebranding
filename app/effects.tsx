'use client';
import { useEffect } from 'react';

export default function Effects() {
  useEffect(() => {
    const els = document.querySelectorAll('.card, .page-img, table, .hero');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    els.forEach((el) => {
      el.classList.add('reveal');
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return null;
}
