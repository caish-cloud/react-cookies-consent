import React from 'react';

export const AlertContext = React.createContext<{ theme: 'dark' | 'light' }>({
  theme: 'light'
});
