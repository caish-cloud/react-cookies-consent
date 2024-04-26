import React from 'react';
import { Container } from '../../components/Container';
import { ThemeStyles } from '../../constants/types';

export type AlertActionsProps = {
  /**
   * The children of the alert actions.
   */
  children: React.ReactNode;

  /**
   * The styles for the container of the alert actions.
   */
  containerStyle?: ThemeStyles;
};

/**
 * The alert actions container that contains the CTA buttons.
 * @param props - The properties to pass to the component.
 */
export function AlertActions(props: AlertActionsProps) {
  return (
    <Container
      defaultStyle={defaultContainerStyle}
      flexBasis={{ base: 0, lg: '215px' }}
      flexDirection={{ base: 'row', lg: 'column' }}
      justifyContent={{ base: 'left', lg: 'center' }}
      gap={2}
      userDefinedStyle={props.containerStyle}
    >
      {props.children}
    </Container>
  );
}

const defaultContainerStyle: ThemeStyles = { dark: {}, light: {} };
