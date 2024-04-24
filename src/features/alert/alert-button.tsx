import React from 'react';
import { MotionBox } from '../../components/MotionBox';
import { ThemeStyles } from '../../constants/types';
import { useStore } from '../../services/zustand/store';
import { AlertContainer } from './alert-container';
import { AlertText } from './alert-text';

export type AlertButtonProps = {
  /**
   * The color of the button.
   * @default '#0082ba'
   */
  buttonColor?: string;

  /**
   * Whether the button should have click animations.
   * @default true
   */
  clickAnimationEnabled?: boolean;

  /**
   * The styles for the container of the button.
   */
  containerStyle?: ThemeStyles;

  /**
   * Whether the button should have hover animations.
   * @default true
   */
  hoverAnimationEnabled?: boolean;

  /**
   * The function to call when the button is clicked.
   */
  onClick: () => void;

  /**
   * Whether the alert should be dismissed when the button is clicked.
   * @default true
   */
  shouldDismissAlert?: boolean;

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
export function AlertButton({
  buttonColor = '#0082ba',
  clickAnimationEnabled = true,
  containerStyle,
  hoverAnimationEnabled = true,
  onClick,
  shouldDismissAlert = true,
  text,
  textStyle
}: AlertButtonProps) {
  const store = useStore();

  // Styles
  const commonContainerStyle: React.CSSProperties = {
    backgroundColor: buttonColor
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

  // Handles what happens when the button is clicked.
  function handleOnClick() {
    // Call the user-defined onClick handler first
    onClick();

    // Dismiss the alert if the user chose to do so
    shouldDismissAlert && store.setAlertDismissed(true);
  }

  return (
    <MotionBox
      onClick={handleOnClick}
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
        userDefinedStyle={containerStyle}
      >
        <AlertText
          defaultStyle={defaultTextStyle}
          fontSize={{ base: 'sm', lg: 'md' }}
          fontWeight="semibold"
          userDefinedStyle={textStyle}
        >
          {text}
        </AlertText>
      </AlertContainer>
    </MotionBox>
  );
}
