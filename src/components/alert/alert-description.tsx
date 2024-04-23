import React from 'react';
import { ThemeStyles } from '../../constants/types';
import { AlertContainer } from './alert-container';
import { AlertText } from './alert-text';

export type AlertDescriptionProps = {
  /**
   * The text to display as the description.
   */
  children: string;

  /**
   * The styles for the container of the description.
   */
  containerStyle?: ThemeStyles;

  /**
   * The styles for the description text.
   */
  textStyle?: ThemeStyles;
};

/**
 * The description of the alert.
 * @param props - The properties to pass to the component.
 */
export function AlertDescription(props: AlertDescriptionProps) {
  return (
    <AlertContainer
      containerStyle={props.containerStyle}
      defaultContainerStyle={defaultContainerStyle}
    >
      <AlertText
        defaultTextStyle={defaultTextStyle}
        textStyle={props.textStyle}
      >
        {props.children}
      </AlertText>
    </AlertContainer>
  );
}

const defaultContainerStyle: React.CSSProperties = {};

const defaultTextStyle: React.CSSProperties = {};
