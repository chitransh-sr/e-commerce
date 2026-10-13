import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* Reset scroll to top on every route change (instant, no smooth fight) */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    // Fallback for browsers without 'instant'
    if (window.scrollY !== 0) window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
