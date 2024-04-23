import { ChakraProvider } from '@chakra-ui/react';
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

  return (
    <ChakraProvider>
      <AlertContext.Provider value={{ theme }}>
        <AlertContainer
          bottom={8}
          defaultStyle={defaultContainerStyle}
          left={{ base: '2.5%', lg: '25%' }}
          position="absolute"
          right={{ base: '2.5%', lg: '25%' }}
          userDefinedStyle={props.containerStyle}
        >
          {props.children}
        </AlertContainer>
      </AlertContext.Provider>
    </ChakraProvider>
  );
}

const defaultContainerStyle: ThemeStyles = {
  dark: {},
  light: {
    backgroundColor: '#fff',
    padding: '4px',
    borderRadius: '12px'
  }
};
