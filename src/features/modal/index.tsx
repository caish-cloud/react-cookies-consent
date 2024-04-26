import { ModalActions } from './modal-actions';
import { ModalBody } from './modal-body';
import { ModalButton } from './modal-button';
import { ModalFooter } from './modal-footer';
import { ModalHeader } from './modal-header';
import { ModalRoot } from './modal-root';

// Types
export type { ModalActionsProps as CookiesConsentModalActionsProps } from './modal-actions';
export type { ModalBodyProps as CookiesConsentModalBodyProps } from './modal-body';
export type { ModalButtonProps as CookiesConsentModalButtonProps } from './modal-button';
export type { ModalFooterProps as CookiesConsentModalFooterProps } from './modal-footer';
export type { ModalHeaderProps as CookiesConsentModalHeaderProps } from './modal-header';
export type {
  ModalRootProps as CookiesConsentModalProps,
  ModalRootRef as CookiesConsentModalRef
} from './modal-root';

// Components
const CookiesConsentModalActions = ModalActions;
const CookiesConsentModalBody = ModalBody;
const CookiesConsentModalButton = ModalButton;
const CookiesConsentModalFooter = ModalFooter;
const CookiesConsentModalHeader = ModalHeader;

export const CookiesConsentModal = ModalRoot as typeof ModalRoot & {
  Actions: typeof CookiesConsentModalActions;
  Body: typeof CookiesConsentModalBody;
  Button: typeof CookiesConsentModalButton;
  Footer: typeof CookiesConsentModalFooter;
  Header: typeof CookiesConsentModalHeader;
};

CookiesConsentModal.Actions = CookiesConsentModalActions;
CookiesConsentModal.Body = CookiesConsentModalBody;
CookiesConsentModal.Button = CookiesConsentModalButton;
CookiesConsentModal.Footer = CookiesConsentModalFooter;
CookiesConsentModal.Header = CookiesConsentModalHeader;
