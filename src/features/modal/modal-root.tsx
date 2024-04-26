import {
  ChakraProvider,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay
} from '@chakra-ui/react';
import React from 'react';
import { Theme, ThemeStyles } from '../../constants/types';
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
  theme?: Theme;
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
      store.setModalTheme(theme);
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
        ...defaultCloseButtonStyle[store.modalTheme]
      };

      if (closeButtonStyle) {
        tempStyle = {
          ...tempStyle,
          ...(closeButtonStyle[store.modalTheme] ?? {})
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
        ...defaultContainerStyle[store.modalTheme]
      };

      if (containerStyle) {
        tempStyle = {
          ...tempStyle,
          ...(containerStyle[store.modalTheme] ?? {})
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
          size="xl"
        >
          {shouldShowOverlay && <ModalOverlay />}

          <ModalContent mx={{ base: 2, md: 0 }} style={getContainerStyle()}>
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
