import React from 'react';
import { AlertContext } from './alert-context';

export type AlertRootProps = {
  /**
   * The content of the alert. You should use the provided components to
   * structure the alert, or you can use your own.
   */
  children: React.ReactNode;

  /**
   * The styles for the container of the alert.
   */
  containerStyle?: {
    /**
     * The dark theme styles for the container of the alert.
     */
    dark?: React.CSSProperties;

    /**
     * The light theme styles for the container of the alert.
     */
    light: React.CSSProperties;
  };
  // description: string;
  // learnMoreButton?: {
  //   onClick: () => void;
  //   style?: React.CSSProperties;
  //   title: string;
  // };
  // primaryButton: {
  //   onClick: () => void;
  //   style?: React.CSSProperties;
  //   title: string;
  // };
  /**
   * The theme for the alert.
   * Defaults to 'light' if not provided.
   */
  theme?: 'dark' | 'light';
};

/**
 * The root of the alert. This component should wrap all other alert components.
 * @param props - The properties to pass to the component.
 */
export function AlertRoot(props: AlertRootProps) {
  const theme = props.theme ?? 'light';

  /**
   * Gets the styles for the container of the alert based on the theme.
   * @returns The styles for the container of the alert.
   */
  function getContainerStyle(): React.CSSProperties | undefined {
    let defaultContainerStyle: React.CSSProperties = {};

    if (props.containerStyle) {
      defaultContainerStyle = {
        ...defaultContainerStyle,
        ...(props.containerStyle[theme] ?? {})
      };
    }

    return defaultContainerStyle;
  }

  return (
    <AlertContext.Provider value={{ theme }}>
      <div style={getContainerStyle()}>{props.children}</div>
    </AlertContext.Provider>
  );
}
