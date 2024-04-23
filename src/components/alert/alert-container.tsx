import { ChakraProps, Flex } from '@chakra-ui/react';
import React from 'react';
import { ThemeStyles } from '../../constants/types';
import { AlertContext } from './alert-context';

interface AlertContainerProps extends ChakraProps {
  /**
   * The children of the container.
   */
  children: React.ReactNode;

  /**
   * The default styles for the container.
   */
  defaultStyle: ThemeStyles;

  /**
   * The user-defined styles for the container.
   */
  userDefinedStyle?: ThemeStyles;
}

/**
 * A basic container for any components used within the Alert component.
 * @param props - The properties to pass to the component.
 */
export function AlertContainer(props: AlertContainerProps) {
  const { defaultStyle, userDefinedStyle, ...rest } = props;
  const theme = React.useContext(AlertContext).theme;

  /**
   * Gets the styles for the container based on the theme.
   * @returns The styles for the container.
   */
  function getContainerStyle(): React.CSSProperties | undefined {
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
    <Flex {...rest} style={getContainerStyle()}>
      {props.children}
    </Flex>
  );
}
