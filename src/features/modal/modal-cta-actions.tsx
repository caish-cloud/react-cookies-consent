import React from 'react';
import { Container } from '../../components/Container';
import { ThemeStyles } from '../../constants/types';
import { useModalTheme } from '../../services/zustand/hooks';

export type ModalCtaActionsProps = {
  /**
   * The children of the modal CTA actions.
   */
  children: React.ReactNode;

  /**
   * The styles for the container of the modal CTA actions.
   */
  containerStyle?: ThemeStyles;
};

/**
 * The modal actions container that contains the CTA buttons, such as for
 * accepting or rejecting all cookies.
 * @param props - The properties to pass to the component.
 */
export function ModalCtaActions(props: ModalCtaActionsProps) {
  const modalTheme = useModalTheme();

  return (
    <Container
      gap={2}
      my={2}
      theme={modalTheme}
      userDefinedStyle={props.containerStyle}
    >
      {props.children}
    </Container>
  );
}
