import {
  ModalBody as ChakraUiModalBody,
  ModalBodyProps as ChakraUiModalBodyProps
} from '@chakra-ui/react';
import React from 'react';
import { ThemeStyles } from '../../constants/types';
import { useStore } from '../../services/zustand/store';

export interface ModalBodyProps extends ChakraUiModalBodyProps {
  /**
   * The children of the modal body container.
   */
  children: React.ReactNode;

  /**
   * The user-defined styles for the modal body container.
   */
  containerStyle?: ThemeStyles;
}

/**
 * The modal body container that will contain all of the user's content.
 * @param props - The properties to pass to the component.
 */
export function ModalBody(props: ModalBodyProps) {
  const { containerStyle, ...rest } = props;

  const store = useStore();

  /**
   * Gets the styles for the modal body container based on the theme.
   * @returns The styles for the modal body container.
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
    <ChakraUiModalBody {...rest} style={getContainerStyle()}>
      {props.children}
    </ChakraUiModalBody>
  );
}

const defaultContainerStyle: ThemeStyles = {
  dark: {},
  light: {}
};
