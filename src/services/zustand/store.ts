import { create } from 'zustand';
import { LocalStorageKeys } from '../../constants/settings';
import { Theme } from '../../constants/types';

export type ZustandStore = {
  alertDismissed: boolean;
  setAlertDismissed: (dismissed: boolean) => void;

  alertTheme: Theme;
  setAlertTheme: (theme: Theme) => void;

  modalShown: boolean;
  setModalShown: (shown: boolean) => void;

  modalTheme: Theme;
  setModalTheme: (theme: Theme) => void;
};

export const useStore = create<ZustandStore>()((set) => ({
  alertDismissed:
    localStorage.getItem(LocalStorageKeys.AlertDismissed) === 'true',
  setAlertDismissed: (dismissed) => {
    localStorage.setItem(LocalStorageKeys.AlertDismissed, String(dismissed));
    set({ alertDismissed: dismissed });
  },

  alertTheme: 'light',
  setAlertTheme: (theme) => set({ alertTheme: theme }),

  modalShown: false,
  setModalShown: (shown) => set({ modalShown: shown }),

  modalTheme: 'light',
  setModalTheme: (theme) => set({ modalTheme: theme })
}));
