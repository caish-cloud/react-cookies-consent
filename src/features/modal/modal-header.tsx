import {
  ModalHeader as ChakraUiModalHeader,
  ModalHeaderProps as ChakraUiModalHeaderProps
} from '@chakra-ui/react';
import React from 'react';
import { ThemeStyles } from '../../constants/types';
import { useStore } from '../../services/zustand/store';

export interface ModalHeaderProps extends ChakraUiModalHeaderProps {
  /**
   * The styles for the container of the header.
   * The naming of this key differs from convention due to a conflict with the
   * Chakra UI props.
   */
  containerStyles?: ThemeStyles;

  /**
   * The text to display as the header.
   */
  text: string;

  /**
   * The styles for the header text.
   * The naming of this key differs from convention due to a conflict with the
   * Chakra UI props.
   */
  textStyles?: ThemeStyles;
}

/**
 * The header text of the modal.
 * @param props - The properties to pass to the component.
 */
export function ModalHeader(props: ModalHeaderProps) {
  const { containerStyles, textStyles, ...rest } = props;

  const store = useStore();

  /**
   * Gets the styles for the modal header container and text based on the theme.
   * @returns The styles for the modal header container and text.
   */
  function getContainerAndTextStyle(): React.CSSProperties | undefined {
    let tempStyle: React.CSSProperties = {
      ...defaultContainerStyle[store.theme],
      ...defaultTextStyle[store.theme]
    };

    if (containerStyles) {
      tempStyle = {
        ...tempStyle,
        ...(containerStyles[store.theme] ?? {})
      };
    }

    if (textStyles) {
      tempStyle = {
        ...tempStyle,
        ...(textStyles[store.theme] ?? {})
      };
    }

    return tempStyle;
  }

  return (
    <ChakraUiModalHeader {...rest} style={getContainerAndTextStyle()}>
      {props.text}
    </ChakraUiModalHeader>
  );
}

const defaultContainerStyle: ThemeStyles = { dark: {}, light: {} };

const defaultTextStyle: ThemeStyles = {
  dark: {
    color: 'white'
  },
  light: {
    color: '#2D3748'
  }
};
