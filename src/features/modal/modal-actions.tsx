import React from 'react';
import { Container } from '../../components/Container';
import { ThemeStyles } from '../../constants/types';
import { useStore } from '../../services/zustand/store';

export type ModalActionsProps = {
  /**
   * The children of the modal actions.
   */
  children: React.ReactNode;

  /**
   * The styles for the container of the modal actions.
   */
  containerStyle?: ThemeStyles;
};

/**
 * The modal actions container that contains the CTA buttons.
 * @param props - The properties to pass to the component.
 */
export function ModalActions(props: ModalActionsProps) {
  const store = useStore();

  return (
    <Container
      defaultStyle={defaultContainerStyle}
      gap={2}
      my={2}
      theme={store.modalTheme}
      userDefinedStyle={props.containerStyle}
    >
      {props.children}
    </Container>
  );
}

const defaultContainerStyle: ThemeStyles = { dark: {}, light: {} };
