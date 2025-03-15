import { useState, useEffect } from 'react';

function useSlidesPerView(): number {
  const [slidesPerView, setSlidesPerView] = useState(4); // مقدار پیش‌فرض

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(5);
      } else {
        setSlidesPerView(4);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // فراخوانی اولیه

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return slidesPerView;
}

export default useSlidesPerView;
