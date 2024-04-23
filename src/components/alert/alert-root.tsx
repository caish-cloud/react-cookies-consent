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
    <AlertContext.Provider value={{ theme }}>
      <AlertContainer
        containerStyle={props.containerStyle}
        defaultContainerStyle={defaultContainerStyle}
      >
        {props.children}
      </AlertContainer>
    </AlertContext.Provider>
  );
}

const defaultContainerStyle: React.CSSProperties = {};
