import { create } from 'zustand';
import { LocalStorageKeys } from '../../constants/settings';
import { Theme } from '../../constants/types';

export type ZustandStore = {
  /**
   * Whether the alert has been dismissed or not.
   */
  alertDismissed: boolean;

  /**
   * Sets the alert dismissed state.
   */
  setAlertDismissed: (dismissed: boolean) => void;

  /**
   * The key name for the local storage item that stores the alert dismissed
   * state.
   */
  alertDismissedLocalStorageKeyName: string;

  /**
   * Sets the key name for the local storage item that stores the alert
   * dismissed state.
   */
  setAlertDismissedLocalStorageKeyName: (keyName: string) => void;

  /**
   * The theme of the alert.
   */
  alertTheme: Theme;

  /**
   * Sets the theme of the alert.
   */
  setAlertTheme: (theme: Theme) => void;

  /**
   * Whether the modal is shown or not.
   */
  modalShown: boolean;

  /**
   * Sets the modal shown state.
   */
  setModalShown: (shown: boolean) => void;

  /**
   * The theme of the modal.
   */
  modalTheme: Theme;

  /**
   * Sets the theme of the modal.
   */
  setModalTheme: (theme: Theme) => void;
};

export const useStore = create<ZustandStore>()((set) => ({
  alertDismissed: true,
  setAlertDismissed: (dismissed) => {
    set((state) => {
      localStorage.setItem(
        state.alertDismissedLocalStorageKeyName,
        String(dismissed)
      );
      return { alertDismissed: dismissed };
    });
  },

  alertDismissedLocalStorageKeyName: LocalStorageKeys.AlertDismissed,
  setAlertDismissedLocalStorageKeyName: (keyName) =>
    set({ alertDismissedLocalStorageKeyName: keyName }),

  alertTheme: 'light',
  setAlertTheme: (theme) => set({ alertTheme: theme }),

  modalShown: false,
  setModalShown: (shown) => set({ modalShown: shown }),

  modalTheme: 'light',
  setModalTheme: (theme) => set({ modalTheme: theme })
}));
