import { ModalBody } from './modal-body';
import { ModalFooter } from './modal-footer';
import { ModalHeader } from './modal-header';
import { ModalRoot } from './modal-root';

// Types
export type { ModalBodyProps as CookiesConsentModalBodyProps } from './modal-body';
export type { ModalFooterProps as CookiesConsentModalFooterProps } from './modal-footer';
export type { ModalHeaderProps as CookiesConsentModalHeaderProps } from './modal-header';
export type {
  ModalRootProps as CookiesConsentModalProps,
  ModalRootRef as CookiesConsentModalRef
} from './modal-root';

// Components
const CookiesConsentModalBody = ModalBody;
const CookiesConsentModalFooter = ModalFooter;
const CookiesConsentModalHeader = ModalHeader;

export const CookiesConsentModal = ModalRoot as typeof ModalRoot & {
  Body: typeof CookiesConsentModalBody;
  Footer: typeof CookiesConsentModalFooter;
  Header: typeof CookiesConsentModalHeader;
};

CookiesConsentModal.Body = CookiesConsentModalBody;
CookiesConsentModal.Footer = CookiesConsentModalFooter;
CookiesConsentModal.Header = CookiesConsentModalHeader;
