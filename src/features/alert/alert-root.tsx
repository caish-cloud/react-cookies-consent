import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence, Variants } from 'framer-motion';
import React from 'react';
import { Container } from '../../components/Container';
import { MotionBox } from '../../components/MotionBox';
import { Theme, ThemeStyles } from '../../constants/types';
import { useStore } from '../../services/zustand/store';

export type AlertRootRef = {
  /**
   * Hides the alert.
   */
  hide: () => void;

  /**
   * Shows the alert.
   */
  show: () => void;
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
   * How the alert should enter and exit the screen.
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
   * The theme for the alert (i.e. light/dark mode).
   * @default 'light'
   */
  theme?: Theme;
};

/**
 * The root of the alert. This component should wrap all other alert components.
 */
export const AlertRoot = React.forwardRef<AlertRootRef, AlertRootProps>(
  (
    {
      enterExitAnimation = 'from-bottom',
      enterExitAnimationEnabled = true,
      placement = 'bottom-center',
      theme = 'light',
      ...props
    },
    ref
  ) => {
    const store = useStore();

    // Set the theme in the store when the component mounts.
    React.useEffect(() => {
      store.setAlertTheme(theme);
    }, []);

    // Create an imperative handle to handle actions the user can perform
    // on the alert.
    React.useImperativeHandle(
      ref,
      () => ({
        hide: () => {
          store.setAlertDismissed(true);
        },

        show: () => {
          store.setAlertDismissed(false);
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
              position="fixed"
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
              <Container
                borderRadius={8}
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                defaultStyle={defaultContainerStyle}
                flexDirection={{ base: 'column', lg: 'row' }}
                gap={4}
                mx={{ base: 4, lg: placement !== 'bottom-center' ? 4 : 0 }}
                padding={3}
                theme={theme}
                userDefinedStyle={props.containerStyle}
                w={{ base: 'auto', lg: '50%' }}
              >
                {props.children}
              </Container>
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
