import React from 'react';
import { AlertContext } from './alert-context';

export type AlertTitleProps = {
  /**
   * The text to display as the title.
   */
  children: string;

  /**
   * The styles for the container of the title.
   */
  containerStyle?: {
    /**
     * The dark theme styles for the container of the title.
     */
    dark?: React.CSSProperties;

    /**
     * The light theme styles for the container of the title.
     * This will be the default theme if no theme is provided to the parent.
     */
    light: React.CSSProperties;
  };

  /**
   * The styles for the title text.
   */
  textStyle?: {
    /**
     * The dark theme styles for the title.
     */
    dark?: React.CSSProperties;

    /**
     * The light theme styles for the title.
     * This will be the default theme if no theme is provided to the parent.
     */
    light: React.CSSProperties;
  };
};

/**
 * The title of the alert.
 * @param props - The properties to pass to the component.
 */
export function AlertTitle(props: AlertTitleProps) {
  const theme = React.useContext(AlertContext).theme;

  /**
   * Gets the styles for the container of the title based on the theme.
   * @returns The styles for the container of the title.
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

  /**
   * Gets the styles for the title based on the theme.
   * @returns The styles for the title.
   */
  function getTextStyle(): React.CSSProperties | undefined {
    let defaultTextStyle: React.CSSProperties = {};

    if (props.textStyle) {
      defaultTextStyle = {
        ...defaultTextStyle,
        ...(props.textStyle[theme] ?? {})
      };
    }

    return defaultTextStyle;
  }

  return (
    <div style={getContainerStyle()}>
      <h2 style={getTextStyle()}>{props.children}</h2>
    </div>
  );
}
