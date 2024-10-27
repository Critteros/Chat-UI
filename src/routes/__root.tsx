import { createRootRoute, Link, Outlet } from '@tanstack/react-router';

import { Devtools } from '@/modules/Devtools';

import '../globals.css';

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <>
      <div className="flex gap-2 p-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <p>IS DEV: {JSON.stringify(import.meta.env.DEV)}</p>
      </div>
      <hr />
      <Outlet />
      <Devtools />
    </>
  );
}
