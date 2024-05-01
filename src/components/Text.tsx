import { ChakraProps, Text as ChakraUiText } from '@chakra-ui/react';
import React from 'react';
import { Theme, ThemeStyles } from '../constants/types';

interface TextProps extends ChakraProps {
  /**
   * The text.
   */
  children: string;

  /**
   * The default styles for the text.
   */
  defaultStyle?: ThemeStyles;

  /**
   * Handles what happens when the text is clicked.
   */
  onClick?: () => void;

  /**
   * The theme of the text (i.e. light/dark mode).
   */
  theme: Theme;

  /**
   * The user-defined styles for the text.
   */
  userDefinedStyle?: ThemeStyles;
}

/**
 * A basic text component for use within the Alert or Modal components.
 * @param props - The properties to pass to the component.
 */
export function Text(props: TextProps) {
  const { defaultStyle, onClick, theme, userDefinedStyle, ...rest } = props;

  /**
   * Gets the styles for the text based on the theme.
   * @returns The styles for the text.
   */
  function getTextStyle(): React.CSSProperties | undefined {
    let tempStyle: React.CSSProperties = {
      ...(defaultStyle ? defaultStyle[theme] : defaultTextStyle[theme])
    };

    if (userDefinedStyle) {
      tempStyle = {
        ...tempStyle,
        ...(userDefinedStyle[theme] ?? {})
      };
    }

    return tempStyle;
  }

  return (
    <ChakraUiText {...rest} onClick={onClick} style={getTextStyle()}>
      {props.children}
    </ChakraUiText>
  );
}

const defaultTextStyle: ThemeStyles = {
  dark: {
    color: 'white'
  },
  light: {
    color: '#2D3748'
  }
};
