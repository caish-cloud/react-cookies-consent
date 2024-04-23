import { ChakraProvider, Flex } from '@chakra-ui/react';
import React from 'react';
import { ThemeStyles } from '../../constants/types';
import { AlertContainer } from './alert-container';
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
  containerStyle?: ThemeStyles;

  /**
   * The placement of the alert on the screen.
   * Defaults to 'bottom-center' if not provided.
   */
  placement?: 'center' | 'left' | 'right';

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
  const placement = props.placement ?? 'center';
  const theme = props.theme ?? 'light';

  return (
    <ChakraProvider>
      <AlertContext.Provider value={{ theme }}>
        {/* This container cannot be modified, and is only used for modifying
        the placement of the alert. */}
        <Flex justifyContent={placement} w="100%">
          <AlertContainer
            borderRadius={8}
            bottom={6}
            defaultStyle={defaultContainerStyle}
            flexDirection={{ base: 'column', lg: 'row' }}
            gap={4}
            mx={{ base: 4, lg: placement !== 'center' ? 4 : 0 }}
            padding={3}
            position="absolute"
            w={{ base: 'auto', lg: '50%' }}
            userDefinedStyle={props.containerStyle}
          >
            {props.children}
          </AlertContainer>
        </Flex>
      </AlertContext.Provider>
    </ChakraProvider>
  );
}

const defaultContainerStyle: ThemeStyles = {
  dark: {
    backgroundColor: '#2D3748'
  },
  light: {
    backgroundColor: 'white'
  }
};
