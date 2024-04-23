// export { AlertRoot as CookiesConsentAlert } from './alert-root';
import { AlertActions } from './alert-actions';
import { AlertContent } from './alert-content';
import { AlertDescription } from './alert-description';
import { AlertRoot } from './alert-root';
import { AlertTitle } from './alert-title';

export type { AlertActionsProps as CookiesConsentAlertActionsProps } from './alert-actions';
export type { AlertContentProps as CookiesConsentAlertContentProps } from './alert-content';
export type { AlertDescription as CookiesConsentAlertDescriptionProps } from './alert-description';
export type { AlertRootProps as CookiesConsentAlertProps } from './alert-root';
export type { AlertTitleProps as CookiesConsentAlertTitleProps } from './alert-title';

const CookiesConsentAlertActions = AlertActions;
const CookiesConsentAlertContent = AlertContent;
const CookiesConsentAlertDescription = AlertDescription;
const CookiesConsentAlertTitle = AlertTitle;

export const CookiesConsentAlert = AlertRoot as typeof AlertRoot & {
  Actions: typeof CookiesConsentAlertActions;
  Content: typeof CookiesConsentAlertContent;
  Description: typeof CookiesConsentAlertDescription;
  Title: typeof CookiesConsentAlertTitle;
};

CookiesConsentAlert.Actions = CookiesConsentAlertActions;
CookiesConsentAlert.Content = CookiesConsentAlertContent;
CookiesConsentAlert.Description = CookiesConsentAlertDescription;
CookiesConsentAlert.Title = CookiesConsentAlertTitle;
