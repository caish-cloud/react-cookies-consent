import { ModalBody } from './modal-body';
import { ModalHeader } from './modal-header';
import { ModalRoot } from './modal-root';

// Types
export type { ModalBodyProps as CookiesConsentModalBodyProps } from './modal-body';
export type { ModalHeaderProps as CookiesConsentModalHeaderProps } from './modal-header';
export type {
  ModalRootProps as CookiesConsentModalProps,
  ModalRootRef as CookiesConsentModalRef
} from './modal-root';

// Components
const CookiesConsentModalBody = ModalBody;
const CookiesConsentModalHeader = ModalHeader;

export const CookiesConsentModal = ModalRoot as typeof ModalRoot & {
  Body: typeof CookiesConsentModalBody;
  Header: typeof CookiesConsentModalHeader;
};

CookiesConsentModal.Body = CookiesConsentModalBody;
CookiesConsentModal.Header = CookiesConsentModalHeader;
