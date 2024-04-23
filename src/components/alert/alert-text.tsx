import { ChakraProps, Text } from '@chakra-ui/react';
import React from 'react';
import { ThemeStyles } from '../../constants/types';
import { AlertContext } from './alert-context';

interface AlertTextProps extends ChakraProps {
  /**
   * The text.
   */
  children: string;

  /**
   * The default styles for the text.
   */
  defaultStyle: ThemeStyles;

  /**
   * The user-defined styles for the text.
   */
  userDefinedStyle?: ThemeStyles;
}

/**
 * A basic text component for use within the Alert component.
 * @param props - The properties to pass to the component.
 */
export function AlertText(props: AlertTextProps) {
  const { defaultStyle, userDefinedStyle, ...rest } = props;
  const theme = React.useContext(AlertContext).theme;

  /**
   * Gets the styles for the text based on the theme.
   * @returns The styles for the text.
   */
  function getTextStyle(): React.CSSProperties | undefined {
    let tempStyle: React.CSSProperties = {
      ...defaultStyle[theme]
    };

    if (userDefinedStyle) {
      tempStyle = {
        ...(userDefinedStyle[theme] ?? {})
      };
    }

    return tempStyle;
  }

  return (
    <Text {...rest} style={getTextStyle()}>
      {props.children}
    </Text>
  );
}
