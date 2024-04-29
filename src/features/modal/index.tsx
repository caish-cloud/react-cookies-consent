import { ModalBody } from './modal-body';
import { ModalButton } from './modal-button';
import { ModalCookieAction } from './modal-cookie-action';
import { ModalCookieActions } from './modal-cookie-actions';
import { ModalCtaActions } from './modal-cta-actions';
import { ModalFooter } from './modal-footer';
import { ModalHeader } from './modal-header';
import { ModalRoot } from './modal-root';
import { ModalText } from './modal-text';

// Types
export type { ModalBodyProps as CookiesConsentModalBodyProps } from './modal-body';
export type { ModalButtonProps as CookiesConsentModalButtonProps } from './modal-button';
export type { ModalCookieActionProps as CookiesConsentModalCookieActionProps } from './modal-cookie-action';
export type { ModalCookieActionsProps as CookiesConsentModalCookieActionsProps } from './modal-cookie-actions';
export type { ModalCtaActionsProps as CookiesConsentModalActionsProps } from './modal-cta-actions';
export type { ModalFooterProps as CookiesConsentModalFooterProps } from './modal-footer';
export type { ModalHeaderProps as CookiesConsentModalHeaderProps } from './modal-header';
export type {
  ModalRootProps as CookiesConsentModalProps,
  ModalRootRef as CookiesConsentModalRef
} from './modal-root';
export type { ModalTextProps as CookiesConsentModalTextProps } from './modal-text';

// Components
const CookiesConsentModalBody = ModalBody;
const CookiesConsentModalButton = ModalButton;
const CookiesConsentModalCookieAction = ModalCookieAction;
const CookiesConsentModalCookieActions = ModalCookieActions;
const CookiesConsentModalCtaActions = ModalCtaActions;
const CookiesConsentModalFooter = ModalFooter;
const CookiesConsentModalHeader = ModalHeader;
const CookiesConsentModalText = ModalText;

export const CookiesConsentModal = ModalRoot as typeof ModalRoot & {
  Body: typeof CookiesConsentModalBody;
  Button: typeof CookiesConsentModalButton;
  CookieAction: typeof CookiesConsentModalCookieAction;
  CookieActions: typeof CookiesConsentModalCookieActions;
  CtaActions: typeof CookiesConsentModalCtaActions;
  Footer: typeof CookiesConsentModalFooter;
  Header: typeof CookiesConsentModalHeader;
  Text: typeof CookiesConsentModalText;
};

CookiesConsentModal.Body = CookiesConsentModalBody;
CookiesConsentModal.Button = CookiesConsentModalButton;
CookiesConsentModal.CookieAction = CookiesConsentModalCookieAction;
CookiesConsentModal.CookieActions = CookiesConsentModalCookieActions;
CookiesConsentModal.CtaActions = CookiesConsentModalCtaActions;
CookiesConsentModal.Footer = CookiesConsentModalFooter;
CookiesConsentModal.Header = CookiesConsentModalHeader;
CookiesConsentModal.Text = CookiesConsentModalText;
