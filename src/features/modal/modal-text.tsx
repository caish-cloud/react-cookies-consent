import React from 'react';
import { Container } from '../../components/Container';
import { Text } from '../../components/Text';
import { ThemeStyles } from '../../constants/types';
import { useModalTheme } from '../../services/zustand/hooks';

export type ModalTextProps = {
  /**
   * The styles for the container of the text.
   */
  containerStyle?: ThemeStyles;

  /**
   * The text to display.
   */
  text: string;

  /**
   * The styles for the text.
   */
  textStyle?: ThemeStyles;
};

/**
 * The text used within the modal component.
 * @param props - The properties to pass to the component.
 */
export function ModalText(props: ModalTextProps) {
  const modalTheme = useModalTheme();

  return (
    <Container theme={modalTheme} userDefinedStyle={props.containerStyle}>
      <Text
        fontSize={{ base: 'sm', lg: 'md' }}
        theme={modalTheme}
        userDefinedStyle={props.textStyle}
      >
        {props.text}
      </Text>
    </Container>
  );
}
