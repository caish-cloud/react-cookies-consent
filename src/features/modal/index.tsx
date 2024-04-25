import { ModalBody } from './modal-body';
import { ModalRoot } from './modal-root';

// Types
export type { ModalBodyProps as CookiesConsentModalBodyProps } from './modal-body';
export type {
  ModalRootProps as CookiesConsentModalProps,
  ModalRootRef as CookiesConsentModalRef
} from './modal-root';

// Components
const CookiesConsentModalBody = ModalBody;

export const CookiesConsentModal = ModalRoot as typeof ModalRoot & {
  Body: typeof CookiesConsentModalBody;
};

CookiesConsentModal.Body = CookiesConsentModalBody;
