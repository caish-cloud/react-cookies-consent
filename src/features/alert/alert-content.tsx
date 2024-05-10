import React from 'react';
import { Container } from '../../components/Container';
import { ThemeStyles } from '../../constants/types';
import { useAlertTheme } from '../../services/zustand/hooks';

export type AlertContentProps = {
  /**
   * The children of the alert content.
   */
  children: React.ReactNode;

  /**
   * The styles for the container of the content.
   */
  containerStyle?: ThemeStyles;
};

/**
 * The content of the alert, such as the title and description.
 * @param props - The properties to pass to the component.
 */
export function AlertContent(props: AlertContentProps) {
  const alertTheme = useAlertTheme();

  return (
    <Container
      flexDirection="column"
      flexGrow={1}
      theme={alertTheme}
      userDefinedStyle={props.containerStyle}
    >
      {props.children}
    </Container>
  );
}
