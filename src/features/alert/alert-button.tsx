import React from 'react';
import { Container } from '../../components/Container';
import { MotionBox } from '../../components/MotionBox';
import { Text } from '../../components/Text';
import { ThemeStyles } from '../../constants/types';
import { useStore } from '../../services/zustand/store';

export type AlertButtonProps = {
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
   * The color of the regular variant button.
   * @default '#0082ba'
   */
  regularButtonColor?: string;

  /**
   * Whether the alert should be dismissed when the button is clicked.
   * @default true
   */
  shouldDismissAlert?: boolean;

  /**
   * Whether the modal should be shown when the button is clicked.
   * @default false
   */
  shouldShowModal?: boolean;

  /**
   * The text to display in the button.
   */
  text: string;

  /**
   * The color of the text variant button.
   * @default '#0082ba'
   */
  textButtonColor?: string;

  /**
   * The styles for the button text.
   */
  textStyle?: ThemeStyles;

  /**
   * The type of button to render.
   * 'regular' - A regular looking button.
   * 'text' - A button that looks like a text link.
   * @default 'regular'
   */
  variant?: 'regular' | 'text';
};

/**
 * A button to be used within the alert.
 */
export function AlertButton({
  clickAnimationEnabled = true,
  containerStyle,
  hoverAnimationEnabled = true,
  onClick,
  regularButtonColor = '#0082ba',
  shouldDismissAlert = true,
  shouldShowModal = false,
  text,
  textButtonColor = '#0082ba',
  textStyle,
  variant = 'regular'
}: AlertButtonProps) {
  const store = useStore();

  // Common default styles for the button
  const commonContainerStyle__Regular: React.CSSProperties = {
    backgroundColor: regularButtonColor
  };
  const commonContainerStyle__Text: React.CSSProperties = {};

  // Default styles for the button
  const defaultContainerStyle__Regular: ThemeStyles = {
    dark: commonContainerStyle__Regular,
    light: commonContainerStyle__Regular
  };
  const defaultContainerStyle__Text: ThemeStyles = {
    dark: commonContainerStyle__Text,
    light: commonContainerStyle__Text
  };

  /**
   * Creates the text component for the alert button.
   * This is in its own function to avoid code duplication.
   * @returns The text component for the alert button.
   */
  function getAlertTextComponent() {
    let defaultTextStyle: ThemeStyles;

    if (variant === 'regular') {
      const commonTextStyle: React.CSSProperties = {
        color: 'white'
      };

      defaultTextStyle = {
        dark: commonTextStyle,
        light: commonTextStyle
      };
    } else {
      const commonTextStyle: React.CSSProperties = {
        color: textButtonColor
      };

      defaultTextStyle = {
        dark: commonTextStyle,
        light: commonTextStyle
      };
    }

    return (
      <Text
        cursor="pointer"
        defaultStyle={defaultTextStyle}
        fontSize={{ base: 'sm', lg: 'md' }}
        fontWeight="semibold"
        userDefinedStyle={textStyle}
      >
        {text}
      </Text>
    );
  }

  // Handles what happens when the button is clicked.
  function handleOnClick() {
    // Call the user-defined onClick handler first
    onClick();

    // Only dismiss the alert if the user chooses to and we're not showing the
    // modal
    !shouldShowModal && shouldDismissAlert && store.setAlertDismissed(true);
    shouldShowModal && store.setModalShown(true);
  }

  return (
    <MotionBox
      onClick={handleOnClick}
      whileHover={{ opacity: hoverAnimationEnabled ? 0.8 : 1 }}
      whileTap={{
        scale: clickAnimationEnabled && variant === 'regular' ? 0.95 : 1
      }}
    >
      {variant === 'regular' ? (
        <Container
          alignItems="center"
          borderRadius={4}
          cursor="pointer"
          defaultStyle={defaultContainerStyle__Regular}
          justifyContent="center"
          minW="150px"
          padding={2}
          userDefinedStyle={containerStyle}
        >
          {getAlertTextComponent()}
        </Container>
      ) : (
        <Container
          defaultStyle={defaultContainerStyle__Text}
          userDefinedStyle={containerStyle}
        >
          {getAlertTextComponent()}
        </Container>
      )}
    </MotionBox>
  );
}
