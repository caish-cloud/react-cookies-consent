import React from 'react';
import { ThemeStyles } from '../../constants/types';
import { AlertContext } from './alert-context';

type AlertTextProps = {
  /**
   * The text.
   */
  children: string;

  /**
   * The default styles for the text.
   */
  defaultTextStyle: React.CSSProperties;

  /**
   * The styles for the text.
   */
  textStyle?: ThemeStyles;
};

/**
 * A basic text component for use within the Alert component.
 * @param props - The properties to pass to the component.
 */
export function AlertText(props: AlertTextProps) {
  const theme = React.useContext(AlertContext).theme;

  /**
   * Gets the styles for the text based on the theme.
   * @returns The styles for the text.
   */
  function getTextStyle(): React.CSSProperties | undefined {
    let defaultTextStyle: React.CSSProperties = props.defaultTextStyle;

    if (props.textStyle) {
      defaultTextStyle = {
        ...defaultTextStyle,
        ...(props.textStyle[theme] ?? {})
      };
    }

    return defaultTextStyle;
  }

  return <p style={getTextStyle()}>{props.children}</p>;
}
