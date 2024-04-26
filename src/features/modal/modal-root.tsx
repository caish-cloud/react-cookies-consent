import {
  ChakraProvider,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay
} from '@chakra-ui/react';
import React from 'react';
import { ThemeStyles } from '../../constants/types';
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
   * The theme for the modal.
   * @default 'light'
   */
  theme?: 'dark' | 'light';
};

/**
 * The root of the modal + content container. This component should wrap all
 * other modal components.
 */
export const ModalRoot = React.forwardRef<ModalRootRef, ModalRootProps>(
  (
    {
      children,
      closeButtonStyle,
      containerStyle,
      placement = 'center',
      shouldShowCloseButton = true,
      shouldShowOverlay = true,
      theme = 'light'
    },
    ref
  ) => {
    const store = useStore();

    // Set the theme in the store when the component mounts.
    React.useEffect(() => {
      store.setTheme(theme);
    }, []);

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
        ...defaultCloseButtonStyle[store.theme]
      };

      if (closeButtonStyle) {
        tempStyle = {
          ...tempStyle,
          ...(closeButtonStyle[store.theme] ?? {})
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
      <ChakraProvider>
        <Modal
          isCentered={placement === 'center'}
          isOpen={store.modalShown}
          onClose={() => store.setModalShown(false)}
        >
          {shouldShowOverlay && <ModalOverlay />}

          <ModalContent style={getContainerStyle()}>
            {shouldShowCloseButton && (
              <ModalCloseButton style={getCloseButtonStyle()} />
            )}

            {children}
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
