'use client';
import { useRef, useState } from 'react';
import Project from '@/interfaces/Project';
import Locale, { Translations } from '@/interfaces/Locale';
import Subheader from '@/components/styled/Subheader';
import FeaturedProjectCard from '@/components/sections/projects/FeaturedProjectCard';

interface Props {
  projects: Project[];
  texts: Translations;
  locale: Locale['locale'];
}

export default function FeaturedProjects({ projects, texts, locale }: Props) {
  const scrollRef = useRef<HTMLUListElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(projects.length > 1);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.offsetWidth < el.scrollWidth - 1);
  };

  const scroll = (dir: 'left' | 'right') => {
    const width = scrollRef.current?.offsetWidth ?? 0;
    scrollRef.current?.scrollBy({
      left: dir === 'left' ? -width : width,
      behavior: 'smooth',
    });
  };

  if (projects.length === 0) return null;

  const btnClass = 'absolute top-1/2 -translate-y-1/2 z-20 bg-gray-800/20 hover:bg-gray-600 border border-gray-500 w-12 h-12 rounded-full flex items-center justify-center text-3xl text-gray-200 shadow-lg transition';

  return (
    <div className='mb-8'>
      <Subheader>{texts.titles.featured}</Subheader>
      <div className='relative'>
        {canScrollLeft && (
          <button onClick={() => scroll('left')} className={`-left-14 ${btnClass}`} aria-label='Scroll left'>
            &lt;
          </button>
        )}
        <ul
          ref={scrollRef}
          onScroll={updateScrollState}
          className='flex overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar'
        >
          {projects.map((project) => (
            <FeaturedProjectCard key={project._id} project={project} locale={locale} />
          ))}
        </ul>
        {canScrollRight && (
          <button onClick={() => scroll('right')} className={`-right-14 ${btnClass}`} aria-label='Scroll right'>
            &gt;
          </button>
        )}
      </div>
    </div>
  );
}
