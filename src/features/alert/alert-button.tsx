import React from 'react';
import { MotionBox } from '../../components/MotionBox';
import { ThemeStyles } from '../../constants/types';
import { AlertContainer } from './alert-container';
import { AlertText } from './alert-text';

export type AlertButtonProps = {
  /**
   * The color of the button.
   */
  buttonColor?: string;

  /**
   * Whether the button should have click animations.
   */
  clickAnimationEnabled?: boolean;

  /**
   * The styles for the container of the button.
   */
  containerStyle?: ThemeStyles;

  /**
   * Whether the button should have hover animations.
   */
  hoverAnimationEnabled?: boolean;

  /**
   * The function to call when the button is clicked.
   */
  onClick: () => void;

  /**
   * The text to display in the button.
   */
  text: string;

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
  // Variables
  const clickAnimationEnabled = props.clickAnimationEnabled ?? true;
  const hoverAnimationEnabled = props.hoverAnimationEnabled ?? true;

  // Styles
  const commonContainerStyle: React.CSSProperties = {
    backgroundColor: props.buttonColor ?? '#0082ba'
  };
  const commonTextStyle: React.CSSProperties = {
    color: 'white'
  };

  const defaultContainerStyle: ThemeStyles = {
    dark: commonContainerStyle,
    light: commonContainerStyle
  };
  const defaultTextStyle: ThemeStyles = {
    dark: commonTextStyle,
    light: commonTextStyle
  };

  return (
    <MotionBox
      onClick={props.onClick}
      whileHover={{ opacity: hoverAnimationEnabled ? 0.8 : 1 }}
      whileTap={{ scale: clickAnimationEnabled ? 0.95 : 1 }}
    >
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
          {props.text}
        </AlertText>
      </AlertContainer>
    </MotionBox>
  );
}
