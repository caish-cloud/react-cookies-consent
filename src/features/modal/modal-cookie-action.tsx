import { Flex, Switch } from '@chakra-ui/react';
import React from 'react';
import { Text } from '../../components/Text';
import { ThemeStyles } from '../../constants/types';
import { useStore } from '../../services/zustand/store';

export type ModalCookieActionProps = {
  /**
   * The styles for the container of the header.
   */
  containerStyle?: ThemeStyles;

  /**
   * The description text to display.
   */
  description?: string;

  /**
   * The styles for the description text.
   */
  descriptionStyle?: ThemeStyles;

  /**
   * The color of the switch when it is off.
   * @default '#CBD5E0'
   */
  switchToggledOffColor?: string;

  /**
   * The color of the switch when it is on.
   * @default '#0082ba'
   */
  switchToggledOnColor?: string;

  /**
   * The title text to display.
   */
  title: string;

  /**
   * The styles for the title text.
   */
  titleStyle?: ThemeStyles;
};

/**
 * The action to take in the modal that will perform a given action for a
 * specific type of cookie category (e.g. turn off cookies for analytics).
 * @param props - The properties to pass to the component.
 */
export function ModalCookieAction({
  switchToggledOffColor = '#CBD5E0',
  switchToggledOnColor = '#0082ba',
  ...props
}: ModalCookieActionProps) {
  const store = useStore();

  /**
   * Gets the styles for the modal cookie action container based on the theme.
   * @returns The styles for the modal cookie action container.
   */
  function getContainerStyle(): React.CSSProperties | undefined {
    let tempStyle: React.CSSProperties = {
      ...defaultContainerStyle[store.modalTheme]
    };

    if (props.containerStyle) {
      tempStyle = {
        ...tempStyle,
        ...(props.containerStyle[store.modalTheme] ?? {})
      };
    }

    return tempStyle;
  }

  return (
    <Flex align="center" gap={4} style={getContainerStyle()}>
      <Switch
        sx={{
          'span.chakra-switch__track[data-checked]': {
            backgroundColor: switchToggledOnColor
          },
          'span.chakra-switch__track:not([data-checked])': {
            backgroundColor: switchToggledOffColor
          }
        }}
        size="md"
      />

      <Flex align="start" direction="column">
        <Text
          defaultStyle={defaultTitleStyle}
          fontSize="md"
          fontWeight="semibold"
          theme={store.modalTheme}
          userDefinedStyle={props.titleStyle}
        >
          {props.title}
        </Text>

        {props.description && (
          <Text
            defaultStyle={defaultDescriptionStyle}
            fontSize="sm"
            userDefinedStyle={props.descriptionStyle}
            theme={store.modalTheme}
          >
            {props.description}
          </Text>
        )}
      </Flex>
    </Flex>
  );
}

const defaultContainerStyle: ThemeStyles = { dark: {}, light: {} };
const defaultDescriptionStyle: ThemeStyles = { dark: {}, light: {} };
const defaultTitleStyle: ThemeStyles = { dark: {}, light: {} };
