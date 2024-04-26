import React from 'react';
import { Container } from '../../components/Container';
import { Text } from '../../components/Text';
import { ThemeStyles } from '../../constants/types';

export type AlertTitleProps = {
  /**
   * The styles for the container of the title.
   */
  containerStyle?: ThemeStyles;

  /**
   * The text to display as the title.
   */
  text: string;

  /**
   * The styles for the title text.
   */
  textStyle?: ThemeStyles;
};

/**
 * The title of the alert.
 * @param props - The properties to pass to the component.
 */
export function AlertTitle(props: AlertTitleProps) {
  return (
    <Container
      defaultStyle={defaultContainerStyle}
      userDefinedStyle={props.containerStyle}
    >
      <Text
        defaultStyle={defaultTextStyle}
        fontSize={{ base: 'md', lg: 'lg' }}
        fontWeight="semibold"
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
