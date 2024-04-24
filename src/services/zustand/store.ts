import { create } from 'zustand';
import { LocalStorageKeys } from '../../constants/settings';

export type ZustandStore = {
  alertDismissed: boolean;
  setAlertDismissed: (dismissed: boolean) => void;

  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
};

export const useStore = create<ZustandStore>()((set) => ({
  alertDismissed:
    localStorage.getItem(LocalStorageKeys.AlertDismissed) === 'true',
  setAlertDismissed: (dismissed) => set({ alertDismissed: dismissed }),

  theme: 'light',
  setTheme: (theme) => set({ theme })
}));
