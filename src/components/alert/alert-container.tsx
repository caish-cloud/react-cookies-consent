import React from 'react';
import { ThemeStyles } from '../../constants/types';
import { AlertContext } from './alert-context';

type AlertContainerProps = {
  /**
   * The children of the container.
   */
  children: React.ReactNode;

  /**
   * The styles for the container.
   */
  containerStyle?: ThemeStyles;

  /**
   * The default styles for the container.
   */
  defaultContainerStyle: ThemeStyles;
};

/**
 * A basic container for any components used within the Alert component.
 * @param props - The properties to pass to the component.
 */
export function AlertContainer(props: AlertContainerProps) {
  const theme = React.useContext(AlertContext).theme;

  /**
   * Gets the styles for the container based on the theme.
   * @returns The styles for the container.
   */
  function getContainerStyle(): React.CSSProperties | undefined {
    let defaultContainerStyle: React.CSSProperties = {
      ...props.defaultContainerStyle[theme]
    };

    if (props.containerStyle) {
      defaultContainerStyle = {
        ...(props.containerStyle[theme] ?? {})
      };
    }

    return defaultContainerStyle;
  }

  return <div style={getContainerStyle()}>{props.children}</div>;
}
