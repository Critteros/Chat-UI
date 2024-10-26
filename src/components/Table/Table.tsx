import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type TableProps = ComponentProps<'table'>;

export function Table({ className, ...props }: TableProps) {
  return (
    <div className="relative w-full overflow-auto">
      <table className={cn('w-full caption-bottom text-sm', className)} {...props} />
    </div>
  );
}
