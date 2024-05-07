export type ButtonThemeStyles = {
  /**
   * The dark theme color for the button.
   */
  dark?: string;

  /**
   * The light theme color for the button.
   */
  light: string;
};

export type Theme = 'dark' | 'light';

export type ThemeStyles = {
  /**
   * The dark theme styles for the container.
   */
  dark?: React.CSSProperties;

  /**
   * The light theme styles for the container.
   */
  light: React.CSSProperties;
};
