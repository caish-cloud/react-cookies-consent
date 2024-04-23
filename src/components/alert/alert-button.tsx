import React from 'react';
import { ThemeStyles } from '../../constants/types';
import { AlertContainer } from './alert-container';
import { AlertText } from './alert-text';

export type AlertButtonProps = {
  /**
   * The color of the button.
   */
  buttonColor?: string;

  /**
   * The text to display in the button.
   */
  children: string;

  /**
   * The styles for the container of the button.
   */
  containerStyle?: ThemeStyles;

  /**
   * The styles for the button text.
   */
  textStyle?: ThemeStyles;
};

/**
 * A button to be used within the alert.
 * @param props - The properties to pass to the component.
 */
export function AlertButton(props: AlertButtonProps) {
  const commonContainerStyle: React.CSSProperties = {
    backgroundColor: props.buttonColor ?? '#0193d5'
  };
  const defaultContainerStyle: ThemeStyles = {
    dark: commonContainerStyle,
    light: commonContainerStyle
  };
  const defaultTextStyle: ThemeStyles = {
    dark: { color: 'white' },
    light: { color: 'white' }
  };

  return (
    <AlertContainer
      alignItems="center"
      borderRadius={4}
      cursor="pointer"
      defaultStyle={defaultContainerStyle}
      justifyContent="center"
      minW="150px"
      padding={2}
      userDefinedStyle={props.containerStyle}
    >
      <AlertText
        defaultStyle={defaultTextStyle}
        fontSize={{ base: 'sm', lg: 'md' }}
        fontWeight="semibold"
        userDefinedStyle={props.textStyle}
      >
        {props.children}
      </AlertText>
    </AlertContainer>
  );
}
