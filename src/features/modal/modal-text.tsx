import React from 'react';
import { Container } from '../../components/Container';
import { Text } from '../../components/Text';
import { ThemeStyles } from '../../constants/types';
import { useStore } from '../../services/zustand/store';

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
  const store = useStore();

  return (
    <Container
      defaultStyle={defaultContainerStyle}
      theme={store.modalTheme}
      userDefinedStyle={props.containerStyle}
    >
      <Text
        defaultStyle={defaultTextStyle}
        fontSize={{ base: 'sm', lg: 'md' }}
        theme={store.modalTheme}
        userDefinedStyle={props.textStyle}
      >
        {props.text}
      </Text>
    </Container>
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
