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
