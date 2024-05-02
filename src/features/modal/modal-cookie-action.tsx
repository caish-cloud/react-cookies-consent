import { Flex, Switch } from '@chakra-ui/react';
import React from 'react';
import { Text } from '../../components/Text';
import { ThemeStyles } from '../../constants/types';
import { useStore } from '../../services/zustand/store';

export type ModalCookieActionProps = {
  /**
   * The styles for the container of the action.
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
   * Handles what happens when the switch is toggled.
   * @param isSwitchOn - Whether the switch is off or on.
   */
  onSwitchToggle?: (isSwitchOn: boolean) => void;

  /**
   * Whether the switch is disabled.
   * @default false
   */
  switchDisabled?: boolean;

  /**
   * The color of the switch when it is off.
   * @default '#cbd5e0'
   */
  switchToggledOffColor?: string;

  /**
   * Whether the switch is toggled on by default.
   * @default true
   */
  switchToggledOn?: boolean;

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
  switchDisabled = false,
  switchToggledOffColor = '#cbd5e0',
  switchToggledOn = true,
  switchToggledOnColor = '#0082ba',
  ...props
}: ModalCookieActionProps) {
  const store = useStore();

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

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

  /**
   * Handles what happens when the switch is toggled.
   * @param event - The event that triggered the switch toggle.
   */
  function handleOnSwitchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setIsSwitchOn(event.currentTarget.checked);

    // Handle the user's custom toggle handler
    props.onSwitchToggle && props.onSwitchToggle(event.currentTarget.checked);
  }

  return (
    <Flex align="center" gap={4} style={getContainerStyle()}>
      <Switch
        defaultChecked={switchToggledOn ? switchToggledOn : isSwitchOn}
        isDisabled={switchDisabled}
        onChange={handleOnSwitchChange}
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
          fontSize={{ base: 'sm', lg: 'md' }}
          fontWeight="semibold"
          theme={store.modalTheme}
          userDefinedStyle={props.titleStyle}
        >
          {props.title}
        </Text>

        {props.description && (
          <Text
            fontSize={{ base: 'xs', lg: 'sm' }}
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
