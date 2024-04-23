import React from 'react';
import { ThemeStyles } from '../../constants/types';
import { AlertContainer } from './alert-container';
import { AlertText } from './alert-text';

export type AlertDescriptionProps = {
  /**
   * The styles for the container of the description.
   */
  containerStyle?: ThemeStyles;

  /**
   * The text to display as the description.
   */
  text: string;

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
      defaultStyle={defaultContainerStyle}
      userDefinedStyle={props.containerStyle}
    >
      <AlertText
        defaultStyle={defaultTextStyle}
        fontSize={{ base: 'sm', lg: 'md' }}
        userDefinedStyle={props.textStyle}
      >
        {props.text}
      </AlertText>
    </AlertContainer>
  );
}

const defaultContainerStyle: ThemeStyles = { dark: {}, light: {} };

const defaultTextStyle: ThemeStyles = {
  dark: {
    color: 'white'
  },
  light: {
    color: '#2D3748'
  }
};
