export type ThemeStyles = {
  /**
   * The dark theme styles for the container.
   */
  dark?: React.CSSProperties;

  /**
   * The light theme styles for the container.
   * This will be the default theme if no theme is provided to the parent.
   */
  light: React.CSSProperties;
};
