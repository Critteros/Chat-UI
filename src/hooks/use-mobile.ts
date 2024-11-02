import { useLayoutEffect, useMemo, useState } from 'react';

import { evaluateCssMeasureToPx, theme } from '@/styles';

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  const mobileBreakpointPx = useMemo(() => evaluateCssMeasureToPx(theme.screens.md), []);

  useLayoutEffect(() => {
    const mql = window.matchMedia(`(max-width: calc(${theme.screens.md} - 1px))`);
    const onChange = () => {
      setIsMobile(window.innerWidth < mobileBreakpointPx);
    };
    mql.addEventListener('change', onChange);
    setIsMobile(window.innerWidth < mobileBreakpointPx);
    return () => mql.removeEventListener('change', onChange);
  }, [mobileBreakpointPx]);

  return Boolean(isMobile);
}
