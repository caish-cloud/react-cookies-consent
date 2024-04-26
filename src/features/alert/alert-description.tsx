import React from 'react';
import { Container } from '../../components/Container';
import { Text } from '../../components/Text';
import { ThemeStyles } from '../../constants/types';
import { useStore } from '../../services/zustand/store';

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
  const store = useStore();

  return (
    <Container
      defaultStyle={defaultContainerStyle}
      theme={store.alertTheme}
      userDefinedStyle={props.containerStyle}
    >
      <Text
        defaultStyle={defaultTextStyle}
        fontSize={{ base: 'sm', lg: 'md' }}
        theme={store.alertTheme}
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
