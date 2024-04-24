import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence, Variants } from 'framer-motion';
import React from 'react';
import { MotionBox } from '../../components/MotionBox';
import { ThemeStyles } from '../../constants/types';
import { useStore } from '../../services/zustand/store';
import { AlertContainer } from './alert-container';

export type AlertRootRef = {
  /**
   * Dismisses the alert.
   */
  dismissAlert: () => void;
};

export type AlertRootProps = {
  /**
   * The content of the alert. You should use the provided components to
   * structure the alert, or you can use your own.
   */
  children: React.ReactNode;

  /**
   * The styles for the container of the alert.
   */
  containerStyle?: ThemeStyles;

  /**
   * How the alert should enter the screen.
   * @default 'from-bottom'
   */
  enterExitAnimation?: 'from-bottom' | 'from-left' | 'from-right';

  /**
   * Whether the enter/exit animations for the alert is enabled.
   * @default true
   */
  enterExitAnimationEnabled?: boolean;

  /**
   * The placement of the alert on the screen.
   * @default 'bottom-center'
   */
  placement?: 'bottom-center' | 'bottom-left' | 'bottom-right';

  /**
   * The theme for the alert.
   * @default 'light'
   */
  theme?: 'dark' | 'light';
};

/**
 * The root of the alert. This component should wrap all other alert components.
 * @param props - The properties to pass to the component.
 */
export const AlertRoot = React.forwardRef<AlertRootRef, AlertRootProps>(
  (
    {
      children,
      containerStyle,
      enterExitAnimation = 'from-bottom',
      enterExitAnimationEnabled = true,
      placement = 'bottom-center',
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
    // on the alert.
    React.useImperativeHandle(
      ref,
      () => ({
        dismissAlert: () => {
          store.setAlertDismissed(true);
        }
      }),
      []
    );

    /**
     * Get the animation variants for the alert based on the user's preference in
     * the enterExitAnimation prop.
     * @returns The animation variants for the alert.
     */
    function getAnimationVariants(): Variants {
      let variants: Variants = {
        disabled: {},
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1
        }
      };

      // If the enter/exit animations are disabled, return the variants as is.
      if (!enterExitAnimationEnabled) {
        return variants;
      }

      switch (enterExitAnimation) {
        case 'from-bottom':
          variants = {
            ...variants,
            hidden: {
              ...variants['hidden'],
              y: '100vh'
            },
            visible: {
              ...variants['visible'],
              y: 0
            }
          };
          break;

        case 'from-left':
          variants = {
            ...variants,
            hidden: {
              ...variants['hidden'],
              x: '-100vw'
            },
            visible: {
              ...variants['visible'],
              x: 0
            }
          };
          break;

        case 'from-right':
          variants = {
            ...variants,
            hidden: {
              ...variants['hidden'],
              x: '100vw'
            },
            visible: {
              ...variants['visible'],
              x: 0
            }
          };
          break;

        default:
          break;
      }

      return variants;
    }

    return (
      <ChakraProvider>
        <AnimatePresence>
          {!store.alertDismissed && (
            <MotionBox
              animate={enterExitAnimationEnabled ? 'visible' : 'disabled'}
              bottom={6}
              display="flex"
              exit={enterExitAnimationEnabled ? 'hidden' : 'disabled'}
              flex={1}
              initial={enterExitAnimationEnabled ? 'hidden' : 'disabled'}
              justifyContent={placement.split('-')[1]}
              position="absolute"
              transition={{
                damping: 20,
                duration: 0.5,
                ease: 'easeInOut',
                mass: 1,
                stiffness: 200,
                type: 'spring'
              }}
              variants={getAnimationVariants()}
              w="100%"
            >
              <AlertContainer
                borderRadius={8}
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                defaultStyle={defaultContainerStyle}
                flexDirection={{ base: 'column', lg: 'row' }}
                gap={4}
                mx={{ base: 4, lg: placement !== 'bottom-center' ? 4 : 0 }}
                padding={3}
                w={{ base: 'auto', lg: '50%' }}
                userDefinedStyle={containerStyle}
              >
                {children}
              </AlertContainer>
            </MotionBox>
          )}
        </AnimatePresence>
      </ChakraProvider>
    );
  }
);

const defaultContainerStyle: ThemeStyles = {
  dark: {
    backgroundColor: '#2D3748'
  },
  light: {
    backgroundColor: 'white'
  }
};
