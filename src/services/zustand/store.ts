import { create } from 'zustand';
import { LocalStorageKeys } from '../../constants/settings';

export type ZustandStore = {
  alertDismissed: boolean;
  setAlertDismissed: (dismissed: boolean) => void;

  modalShown: boolean;
  setModalShown: (shown: boolean) => void;

  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
};

export const useStore = create<ZustandStore>()((set) => ({
  alertDismissed:
    localStorage.getItem(LocalStorageKeys.AlertDismissed) === 'true',
  setAlertDismissed: (dismissed) => {
    localStorage.setItem(LocalStorageKeys.AlertDismissed, String(dismissed));
    set({ alertDismissed: dismissed });
  },

  modalShown: false,
  setModalShown: (shown) => set({ modalShown: shown }),

  theme: 'light',
  setTheme: (theme) => set({ theme })
}));
