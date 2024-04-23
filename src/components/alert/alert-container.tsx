import { AlertContext } from '@/components/alert/alert-context';
import { ThemeStyles } from '@/constants/types';
import React from 'react';

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
  defaultContainerStyle: React.CSSProperties;
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
    let defaultContainerStyle = props.defaultContainerStyle;

    if (props.containerStyle) {
      defaultContainerStyle = {
        ...props.defaultContainerStyle,
        ...(props.containerStyle[theme] ?? {})
      };
    }

    return defaultContainerStyle;
  }

  return <div style={getContainerStyle()}>{props.children}</div>;
}
