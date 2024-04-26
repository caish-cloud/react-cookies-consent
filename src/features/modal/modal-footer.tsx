import {
  ModalFooter as ChakraUiModalFooter,
  ModalFooterProps as ChakraUiModalFooterProps
} from '@chakra-ui/react';
import React from 'react';
import { ThemeStyles } from '../../constants/types';
import { useStore } from '../../services/zustand/store';

export interface ModalFooterProps extends ChakraUiModalFooterProps {
  /**
   * The children of the modal footer.
   */
  children: React.ReactNode;

  /**
   * The styles for the container of the modal footer.
   */
  containerStyle?: ThemeStyles;
}

/**
 * The footer of the modal.
 * @param props - The properties to pass to the component.
 */
export function ModalFooter(props: ModalFooterProps) {
  const { children, containerStyle, ...rest } = props;

  const store = useStore();

  /**
   * Gets the styles for the modal footer container based on the theme.
   * @returns The styles for the modal footer container.
   */
  function getContainerStyle(): React.CSSProperties | undefined {
    let tempStyle: React.CSSProperties = {
      ...defaultContainerStyle[store.theme]
    };

    if (containerStyle) {
      tempStyle = {
        ...tempStyle,
        ...(containerStyle[store.theme] ?? {})
      };
    }

    return tempStyle;
  }

  return (
    <ChakraUiModalFooter {...rest} style={getContainerStyle()}>
      {children}
    </ChakraUiModalFooter>
  );
}

const defaultContainerStyle: ThemeStyles = { dark: {}, light: {} };
