import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ComponentProps,
  type CSSProperties,
} from 'react';

import { TooltipProvider } from '@/components/Tooltip';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

import {
  SIDEBAR_COOKIE_MAX_AGE,
  SIDEBAR_COOKIE_NAME,
  SIDEBAR_KEYBOARD_SHORTCUT,
  SIDEBAR_WIDTH,
  SIDEBAR_WIDTH_ICON,
} from './constants';
import { SidebarContext } from './SidebarContext';

export type SidebarProviderProps = {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
} & ComponentProps<'div'>;

export function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: SidebarProviderProps) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = useState(false);

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      if (setOpenProp) {
        return setOpenProp?.(typeof value === 'function' ? value(open) : value);
      }

      _setOpen(value);

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${open}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open],
  );

  // Helper to toggle the sidebar.
  const toggleSidebar = useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
  }, [isMobile, setOpen, setOpenMobile]);

  // Adds a keyboard shortcut to toggle the sidebar.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleSidebar]);

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? 'expanded' : 'collapsed';

  const contextValue = useMemo<SidebarContext>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar],
  );

  return (
    <SidebarContext value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          style={
            {
              '--sidebar-width': SIDEBAR_WIDTH,
              '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
              ...style,
            } as CSSProperties
          }
          className={cn(
            'group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar',
            className,
          )}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext>
  );
}