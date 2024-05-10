import {
  ChakraProvider,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay
} from '@chakra-ui/react';
import React from 'react';
import { Theme, ThemeStyles } from '../../constants/types';
import { useModalShown, useModalTheme } from '../../services/zustand/hooks';
import { useStore } from '../../services/zustand/store';

export type ModalRootRef = {
  /**
   * Hides the modal.
   */
  hide: () => void;

  /**
   * Shows the modal.
   */
  show: () => void;
};

export type ModalRootProps = {
  /**
   * The content of the modal. You should use the provided components to
   * structure the modal, or you can use your own.
   */
  children: React.ReactNode;

  /**
   * The styles for the close button.
   */
  closeButtonStyle?: ThemeStyles;

  /**
   * The styles for the modal content container.
   */
  containerStyle?: ThemeStyles;

  /**
   * Handles what happens when the modal is closed.
   */
  onModalClose?: () => void;

  /**
   * The amount of blur for the overlay.
   * @default 4
   */
  overlayBlurAmount?: number;

  /**
   * Whether the overlay should have a blurred effect.
   * @default true
   */
  overlayBlurEnabled?: boolean;

  /**
   * The color of the overlay.
   * @default 'rgba(0, 0, 0, 0.5)'
   */
  overlayColor?: string;

  /**
   * The placement of the modal on the screen.
   * @default 'center'
   */
  placement?: 'center' | 'middle-top';

  /**
   * Whether the close button should be shown in the modal.
   * @default true
   */
  shouldShowCloseButton?: boolean;

  /**
   * Whether the overlay should be shown when the modal is open.
   * @default true
   */
  shouldShowOverlay?: boolean;

  /**
   * The theme for the modal (i.e. light/dark mode).
   * @default 'light'
   */
  theme?: Theme;
};

/**
 * The root of the modal + content container. This component should wrap all
 * other modal components.
 */
export const ModalRoot = React.forwardRef<ModalRootRef, ModalRootProps>(
  (
    {
      overlayBlurAmount = 4,
      overlayColor = 'rgba(0, 0, 0, 0.5)',
      overlayBlurEnabled = true,
      placement = 'center',
      shouldShowCloseButton = true,
      shouldShowOverlay = true,
      theme = 'light',
      ...props
    },
    ref
  ) => {
    const modalShown = useModalShown();
    const modalTheme = useModalTheme();
    const store = useStore();

    // Update the stored theme when the theme prop changes
    React.useEffect(() => {
      store.setModalTheme(theme);
    }, [theme]);

    // Create an imperative handle to handle actions the user can perform
    // on the modal.
    React.useImperativeHandle(
      ref,
      () => ({
        hide: () => {
          store.setModalShown(false);
        },

        show: () => {
          store.setModalShown(true);
        }
      }),
      []
    );

    /**
     * Gets the styles for the close button based on the theme.
     * @returns The styles for the close button.
     */
    function getCloseButtonStyle(): React.CSSProperties | undefined {
      let tempStyle: React.CSSProperties = {
        ...defaultCloseButtonStyle[modalTheme]
      };

      if (props.closeButtonStyle) {
        tempStyle = {
          ...tempStyle,
          ...(props.closeButtonStyle[modalTheme] ?? {})
        };
      }

      return tempStyle;
    }

    /**
     * Gets the styles for the modal content container based on the theme.
     * @returns The styles for the modal content container.
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

    /**
     * Handles what happens when the modal is closed.
     */
    function handleOnModalClose() {
      store.setModalShown(false);

      // Handle the user's custom on close event
      props.onModalClose && props.onModalClose();
    }

    return (
      <ChakraProvider>
        <Modal
          isCentered={placement === 'center'}
          isOpen={modalShown}
          onClose={handleOnModalClose}
          size="xl"
        >
          {shouldShowOverlay && (
            <ModalOverlay
              backdropFilter={
                overlayBlurEnabled ? `blur(${overlayBlurAmount}px)` : 'none'
              }
              bg={overlayBlurEnabled ? 'none' : overlayColor}
            />
          )}

          <ModalContent mx={{ base: 2, md: 0 }} style={getContainerStyle()}>
            {shouldShowCloseButton && (
              <ModalCloseButton style={getCloseButtonStyle()} />
            )}

            {props.children}
          </ModalContent>
        </Modal>
      </ChakraProvider>
    );
  }
);

const defaultCloseButtonStyle: ThemeStyles = {
  dark: {
    color: 'white'
  },
  light: {
    color: '#2D3748'
  }
};

const defaultContainerStyle: ThemeStyles = {
  dark: {
    backgroundColor: '#2D3748'
  },
  light: {
    backgroundColor: 'white'
  }
};
