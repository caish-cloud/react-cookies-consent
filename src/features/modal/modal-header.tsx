import { ModalHeader as ChakraUiModalHeader } from '@chakra-ui/react';
import React from 'react';
import { ThemeStyles } from '../../constants/types';
import { useModalTheme } from '../../services/zustand/hooks';

export type ModalHeaderProps = {
  /**
   * The styles for the container of the header.
   */
  containerStyle?: ThemeStyles;

  /**
   * The text to display as the header.
   */
  text: string;

  /**
   * The styles for the header text.
   */
  textStyle?: ThemeStyles;
};

/**
 * The header text of the modal.
 * @param props - The properties to pass to the component.
 */
export function ModalHeader(props: ModalHeaderProps) {
  const modalTheme = useModalTheme();

  /**
   * Gets the styles for the modal header container and text based on the theme.
   * @returns The styles for the modal header container and text.
   */
  function getContainerAndTextStyle(): React.CSSProperties | undefined {
    let tempStyle: React.CSSProperties = {
      ...defaultContainerStyle[modalTheme],
      ...defaultTextStyle[modalTheme]
    };

    if (props.containerStyle) {
      tempStyle = {
        ...tempStyle,
        ...(props.containerStyle[modalTheme] ?? {})
      };
    }

    if (props.textStyle) {
      tempStyle = {
        ...tempStyle,
        ...(props.textStyle[modalTheme] ?? {})
      };
    }

    return tempStyle;
  }

  return (
    <ChakraUiModalHeader style={getContainerAndTextStyle()}>
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
