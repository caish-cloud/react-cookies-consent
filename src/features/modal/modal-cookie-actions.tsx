import React from 'react';
import { Container } from '../../components/Container';
import { ThemeStyles } from '../../constants/types';
import { useStore } from '../../services/zustand/store';

export type ModalCookieActionsProps = {
  /**
   * The children of the modal cookie actions.
   */
  children: React.ReactNode;

  /**
   * The styles for the container of the modal cookie actions.
   */
  containerStyle?: ThemeStyles;
};

/**
 * The modal cookie actions container that contains the cookie action
 * components.
 * @param props - The properties to pass to the component.
 */
export function ModalCookieActions(props: ModalCookieActionsProps) {
  const store = useStore();

  return (
    <Container
      defaultStyle={defaultContainerStyle}
      flexDirection="column"
      gap={4}
      mb={4}
      mt={8}
      theme={store.modalTheme}
      userDefinedStyle={props.containerStyle}
    >
      {props.children}
    </Container>
  );
}

const defaultContainerStyle: ThemeStyles = { dark: {}, light: {} };
