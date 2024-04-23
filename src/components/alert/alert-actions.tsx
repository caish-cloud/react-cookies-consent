import React from 'react';
import { ThemeStyles } from '../../constants/types';
import { AlertContainer } from './alert-container';

export type AlertActionsProps = {
  /**
   * The children of the alert actions.
   */
  children: React.ReactNode;

  /**
   * The styles for the container of the alert actions.
   */
  containerStyle?: ThemeStyles;
};

/**
 * The alert actions container that contains the CTA buttons.
 * @param props - The properties to pass to the component.
 */
export function AlertActions(props: AlertActionsProps) {
  return (
    <AlertContainer
      defaultStyle={defaultContainerStyle}
      flexDirection="column"
      userDefinedStyle={props.containerStyle}
    >
      {props.children}
    </AlertContainer>
  );
}

const defaultContainerStyle: ThemeStyles = { dark: {}, light: {} };
