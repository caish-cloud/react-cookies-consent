import React from 'react';

type AlertContextType = { theme: 'dark' | 'light' };

export const AlertContext = React.createContext<AlertContextType>({
  theme: 'light'
});
