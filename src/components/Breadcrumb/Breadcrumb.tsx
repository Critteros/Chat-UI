import type { ComponentProps } from 'react';

export type BreadcrumbProps = ComponentProps<'nav'>;

export function Breadcrumb(props: BreadcrumbProps) {
  return <nav aria-label="breadcrumb" {...props} />;
}
