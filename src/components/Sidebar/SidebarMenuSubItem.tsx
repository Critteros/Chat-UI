import { type ComponentProps } from 'react';

export type SidebarMenuSubItemProps = ComponentProps<'li'>;

export function SidebarMenuSubItem({ ...props }: SidebarMenuSubItemProps) {
  return <li {...props} />;
}
