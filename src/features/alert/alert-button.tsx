import React from 'react';
import { Button, ButtonProps } from '../../components/Button';
import { ThemeStyles } from '../../constants/types';
import { useAlertTheme } from '../../services/zustand/hooks';
import { useStore } from '../../services/zustand/store';

export interface AlertButtonProps extends Omit<ButtonProps, 'theme'> {
  /**
   * Whether the alert should be dismissed when the button is clicked.
   * @default true
   */
  shouldDismissAlert?: boolean;

  /**
   * Whether the modal should be shown when the button is clicked.
   * @default false
   */
  shouldShowModal?: boolean;
}

/**
 * A button to be used within the alert.
 */
export function AlertButton(props: AlertButtonProps) {
  const {
    containerStyle,
    onClick,
    shouldDismissAlert = true,
    shouldShowModal = false,
    variant = 'regular',
    ...rest
  } = props;

  const alertTheme = useAlertTheme();
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

    // Only dismiss the alert if the user chooses to and we're not showing the
    // modal
    !shouldShowModal && shouldDismissAlert && store.setAlertDismissed(true);
    shouldShowModal && store.setModalShown(true);
  }

  return (
    <Button
      {...rest}
      containerStyle={getContainerStyle()}
      onClick={handleOnClick}
      theme={alertTheme}
      variant={variant}
    />
  );
}

const commonRegularContainerStyle: React.CSSProperties = {
  minWidth: '150px',
  padding: '8px'
};
