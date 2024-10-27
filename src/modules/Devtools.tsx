import { lazy, Suspense } from 'react';

import { Empty } from '@/components/Empty';

// Ensure that Vite will not bundle the devtools in production
const TanstackRouterDevtools = import.meta.env.DEV
  ? lazy(() =>
      import('@tanstack/router-devtools').then((m) => ({ default: m.TanStackRouterDevtools })),
    )
  : Empty;

function ActiveDevtools() {
  return (
    <Suspense fallback={<Empty />}>
      <TanstackRouterDevtools />
    </Suspense>
  );
}

function InactiveDevtools() {
  return <Empty />;
}

export const Devtools = import.meta.env.DEV ? ActiveDevtools : InactiveDevtools;
