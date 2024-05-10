import { ModalFooter as ChakraUiModalFooter } from '@chakra-ui/react';
import React from 'react';
import { ThemeStyles } from '../../constants/types';
import { useModalTheme } from '../../services/zustand/hooks';

export type ModalFooterProps = {
  /**
   * The children of the modal footer.
   */
  children: React.ReactNode;

  /**
   * The styles for the container of the modal footer.
   */
  containerStyle?: ThemeStyles;
};

/**
 * The footer of the modal.
 * @param props - The properties to pass to the component.
 */
export function ModalFooter(props: ModalFooterProps) {
  const modalTheme = useModalTheme();

  /**
   * Gets the styles for the modal footer container based on the theme.
   * @returns The styles for the modal footer container.
   */
  function getContainerStyle(): React.CSSProperties | undefined {
    let tempStyle: React.CSSProperties = {
      ...defaultContainerStyle[modalTheme]
    };

    if (props.containerStyle) {
      tempStyle = {
        ...tempStyle,
        ...(props.containerStyle[modalTheme] ?? {})
      };
    }

    return tempStyle;
  }

  return (
    <ChakraUiModalFooter style={getContainerStyle()}>
      {props.children}
    </ChakraUiModalFooter>
  );
}

const defaultContainerStyle: ThemeStyles = { dark: {}, light: {} };
