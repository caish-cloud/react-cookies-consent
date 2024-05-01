import { ChakraProps, Flex } from '@chakra-ui/react';
import React from 'react';
import { Theme, ThemeStyles } from '../constants/types';

interface ContainerProps extends ChakraProps {
  /**
   * The children of the container.
   */
  children: React.ReactNode;

  /**
   * The default styles for the container.
   */
  defaultStyle?: ThemeStyles;

  /**
   * Handles what happens when the container is clicked.
   */
  onClick?: () => void;

  /**
   * The theme of the container (i.e. light/dark mode).
   */
  theme: Theme;

  /**
   * The user-defined styles for the container.
   */
  userDefinedStyle?: ThemeStyles;
}

/**
 * A basic container for any components used within the Alert or Modal
 * components.
 * @param props - The properties to pass to the component.
 */
export function Container(props: ContainerProps) {
  const { defaultStyle, onClick, theme, userDefinedStyle, ...rest } = props;

  /**
   * Gets the styles for the container based on the theme.
   * @returns The styles for the container.
   */
  function getContainerStyle(): React.CSSProperties | undefined {
    let tempStyle: React.CSSProperties = {
      ...(defaultStyle ? defaultStyle[theme] : defaultContainerStyle[theme])
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
    <Flex {...rest} onClick={onClick} style={getContainerStyle()}>
      {props.children}
    </Flex>
  );
}

const defaultContainerStyle: ThemeStyles = { dark: {}, light: {} };
