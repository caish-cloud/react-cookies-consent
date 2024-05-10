import React from 'react';
import { Theme } from '../../constants/types';
import { useStore } from './store';

/**
 * Hook to get the alert dismissed state.
 * @returns {boolean} The alert dismissed state.
 */
export function useAlertDismissed(): boolean {
  const store = useStore;

  return React.useSyncExternalStore(
    store.subscribe,
    () => store.getState().alertDismissed,
    () => store.getState().alertDismissed
  );
}

/**
 * Hook to get the alert theme.
 * @returns {Theme} The alert theme.
 */
export function useAlertTheme(): Theme {
  const store = useStore;

  return React.useSyncExternalStore(
    store.subscribe,
    () => store.getState().alertTheme,
    () => store.getState().alertTheme
  );
}

/**
 * Hook to get the modal shown state.
 * @returns {boolean} The modal shown state.
 */
export function useModalShown(): boolean {
  const store = useStore;

  return React.useSyncExternalStore(
    store.subscribe,
    () => store.getState().modalShown,
    () => store.getState().modalShown
  );
}

/**
 * Hook to get the modal theme.
 * @returns {Theme} The modal theme.
 */
export function useModalTheme(): Theme {
  const store = useStore;

  return React.useSyncExternalStore(
    store.subscribe,
    () => store.getState().modalTheme,
    () => store.getState().modalTheme
  );
}
