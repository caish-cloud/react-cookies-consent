import { ChakraProvider, Flex } from '@chakra-ui/react';
import { Variants } from 'framer-motion';
import React from 'react';
import { MotionBox } from '../../components/MotionBox';
import { ThemeStyles } from '../../constants/types';
import { AlertContainer } from './alert-container';
import { AlertContext } from './alert-context';

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
   */
  enterExitAnimation?: 'from-bottom' | 'from-left' | 'from-right';

  /**
   * Whether the enter/exit animations for the alert is enabled.
   */
  enterExitAnimationEnabled?: boolean;

  /**
   * The placement of the alert on the screen.
   * Defaults to 'bottom-center' if not provided.
   */
  placement?: 'bottom-center' | 'bottom-left' | 'bottom-right';

  /**
   * The theme for the alert.
   * Defaults to 'light' if not provided.
   */
  theme?: 'dark' | 'light';
};

/**
 * The root of the alert. This component should wrap all other alert components.
 * @param props - The properties to pass to the component.
 */
export function AlertRoot({
  children,
  containerStyle,
  enterExitAnimation = 'from-bottom',
  enterExitAnimationEnabled = true,
  placement = 'bottom-center',
  theme = 'light'
}: AlertRootProps) {
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
            y: 300
          },
          visible: {
            ...variants['visible'],
            y: 50
          }
        };
        break;

      case 'from-left':
        variants = {
          ...variants,
          hidden: {
            ...variants['hidden'],
            x: '-100%'
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
            x: '100%'
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
      <AlertContext.Provider value={{ theme }}>
        <MotionBox
          animate={enterExitAnimationEnabled ? 'visible' : 'disabled'}
          exit={enterExitAnimationEnabled ? 'hidden' : 'disabled'}
          initial={enterExitAnimationEnabled ? 'hidden' : 'disabled'}
          transition={{
            damping: 20,
            duration: 0.5,
            ease: 'easeInOut',
            mass: 1,
            stiffness: 200,
            type: 'spring'
          }}
          variants={getAnimationVariants()}
        >
          {/* This container cannot be modified, and is only used for modifying
              the placement of the alert. */}
          <Flex justifyContent={placement.split('-')[1]} w="100%">
            <AlertContainer
              borderRadius={8}
              bottom={6}
              defaultStyle={defaultContainerStyle}
              flexDirection={{ base: 'column', lg: 'row' }}
              gap={4}
              mx={{ base: 4, lg: placement !== 'bottom-center' ? 4 : 0 }}
              padding={3}
              position="absolute"
              w={{ base: 'auto', lg: '50%' }}
              userDefinedStyle={containerStyle}
            >
              {children}
            </AlertContainer>
          </Flex>
        </MotionBox>
      </AlertContext.Provider>
    </ChakraProvider>
  );
}

const defaultContainerStyle: ThemeStyles = {
  dark: {
    backgroundColor: '#2D3748'
  },
  light: {
    backgroundColor: 'white'
  }
};
