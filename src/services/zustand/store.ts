import { create } from 'zustand';
import { LocalStorageKeys } from '../../constants/settings';

export type ZustandStore = {
  alertDismissed: boolean;
  setAlertDismissed: (dismissed: boolean) => void;
};

export const useStore = create<ZustandStore>()((set) => ({
  alertDismissed:
    localStorage.getItem(LocalStorageKeys.AlertDismissed) === 'true',
  setAlertDismissed: (dismissed) => set({ alertDismissed: dismissed })
}));
