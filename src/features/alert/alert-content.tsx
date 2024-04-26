import React from 'react';
import { Container } from '../../components/Container';
import { ThemeStyles } from '../../constants/types';
import { useStore } from '../../services/zustand/store';

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
  const store = useStore();

  return (
    <Container
      defaultStyle={defaultContainerStyle}
      flexDirection="column"
      flexGrow={1}
      theme={store.alertTheme}
      userDefinedStyle={props.containerStyle}
    >
      {props.children}
    </Container>
  );
}

const defaultContainerStyle: ThemeStyles = { dark: {}, light: {} };
