import React from 'react';
import { Button, ButtonProps } from '../../components/Button';
import { ThemeStyles } from '../../constants/types';
import { useStore } from '../../services/zustand/store';

export interface ModalButtonProps extends ButtonProps {
  /**
   * Whether the alert should be dismissed when the button is clicked.
   * @default true
   */
  shouldDismissAlert?: boolean;

  /**
   * Whether the modal should be hidden when the button is clicked.
   * @default true
   */
  shouldHideModal?: boolean;
}

/**
 * A button to be used within the modal.
 */
export function ModalButton(props: ModalButtonProps) {
  const {
    containerStyle,
    onClick,
    shouldDismissAlert = true,
    shouldHideModal = true,
    variant = 'regular',
    ...rest
  } = props;

  const store = useStore();

  /**
   * Gets the styles for the container based on the theme.
   * @returns The styles for the container.
   */
  function getContainerStyle(): ThemeStyles {
    let tempStyle: ThemeStyles = {
      dark: variant === 'regular' ? commonRegularContainerStyle : {},
      light: variant === 'regular' ? commonRegularContainerStyle : {}
    };

    if (containerStyle) {
      tempStyle = {
        dark: { ...tempStyle.dark, ...containerStyle.dark },
        light: { ...tempStyle.light, ...containerStyle.light }
      };
    }

    return tempStyle;
  }

  // Handles what happens when the button is clicked.
  function handleOnClick() {
    // Call the user-defined onClick handler first
    onClick();

    // Dismiss the alert and hide the modal if the user chooses to
    shouldDismissAlert && store.setAlertDismissed(true);
    shouldHideModal && store.setModalShown(false);
  }

  return (
    <Button
      {...rest}
      containerStyle={getContainerStyle()}
      onClick={handleOnClick}
      theme={store.modalTheme}
      variant={variant}
    />
  );
}

const commonRegularContainerStyle: React.CSSProperties = {
  padding: '6px 12px'
};
