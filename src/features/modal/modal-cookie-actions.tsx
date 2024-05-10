import React from 'react';
import { Container } from '../../components/Container';
import { ThemeStyles } from '../../constants/types';
import { useModalTheme } from '../../services/zustand/hooks';

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
  const modalTheme = useModalTheme();

  return (
    <Container
      flexDirection="column"
      gap={4}
      mb={4}
      mt={8}
      theme={modalTheme}
      userDefinedStyle={props.containerStyle}
    >
      {props.children}
    </Container>
  );
}
