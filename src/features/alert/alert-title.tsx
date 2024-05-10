import React from 'react';
import { Container } from '../../components/Container';
import { Text } from '../../components/Text';
import { ThemeStyles } from '../../constants/types';
import { useAlertTheme } from '../../services/zustand/hooks';

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
  const alertTheme = useAlertTheme();

  return (
    <Container theme={alertTheme} userDefinedStyle={props.containerStyle}>
      <Text
        fontSize={{ base: 'md', lg: 'lg' }}
        fontWeight="semibold"
        theme={alertTheme}
        userDefinedStyle={props.textStyle}
      >
        {props.text}
      </Text>
    </Container>
  );
}
