import React from 'react';
import { ButtonThemeStyles, Theme, ThemeStyles } from '../constants/types';
import { Container } from './Container';
import { MotionBox } from './MotionBox';
import { Text } from './Text';

export interface ButtonProps {
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
   * Whether the button should animate when hovered.
   * @default true
   */
  hoverAnimationEnabled?: boolean;

  /**
   * Handles what happens when the button is clicked.
   */
  onClick: () => void;

  /**
   * The color of the regular variant button.
   * @default { dark: '#0082ba', light: '#0082ba' }
   */
  regularButtonColor?: ButtonThemeStyles;

  /**
   * The text to display in the button.
   */
  text: string;

  /**
   * The color of the text variant button.
   * @default { dark: '#00a2e8', light: '#00a2e8' }
   */
  textButtonColor?: ButtonThemeStyles;

  /**
   * The styles for the button text.
   */
  textStyle?: ThemeStyles;

  /**
   * The theme for the button (i.e. light/dark mode).
   */
  theme: Theme;

  /**
   * The type of button to render.
   * 'regular' - A regular looking button.
   * 'text' - A button that looks like a text link.
   * @default 'regular'
   */
  variant?: 'regular' | 'text';
}

/**
 * A button to be used within the alert and modal components.
 */
export function Button({
  clickAnimationEnabled = true,
  hoverAnimationEnabled = true,
  regularButtonColor = { dark: '#0082ba', light: '#0082ba' },
  textButtonColor = { dark: '#00a2e8', light: '#00a2e8' },
  variant = 'regular',
  ...props
}: ButtonProps) {
  // Common default styles for the button
  const commonContainerStyle__Regular: React.CSSProperties = {
    backgroundColor:
      props.theme === 'dark'
        ? regularButtonColor.dark
        : regularButtonColor.light
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
   * Creates the text component for the button.
   * This is in its own function to avoid code duplication.
   * @returns The text component for the button.
   */
  function getTextComponent() {
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
        color:
          props.theme === 'dark' ? textButtonColor.dark : textButtonColor.light
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
        onClick={variant === 'text' ? props.onClick : undefined}
        theme={props.theme}
        userDefinedStyle={props.textStyle}
      >
        {props.text}
      </Text>
    );
  }

  return (
    <MotionBox
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
          onClick={props.onClick}
          theme={props.theme}
          userDefinedStyle={props.containerStyle}
        >
          {getTextComponent()}
        </Container>
      ) : (
        <Container
          defaultStyle={defaultContainerStyle__Text}
          theme={props.theme}
          userDefinedStyle={props.containerStyle}
        >
          {getTextComponent()}
        </Container>
      )}
    </MotionBox>
  );
}
