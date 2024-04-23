// export { AlertRoot as CookiesConsentAlert } from './alert-root';
import { AlertContent } from './alert-content';
import { AlertDescription } from './alert-description';
import { AlertRoot } from './alert-root';
import { AlertTitle } from './alert-title';

export type { AlertContentProps as CookiesConsentAlertContentProps } from './alert-content';
export type { AlertDescription as CookiesConsentAlertDescriptionProps } from './alert-description';
export type { AlertRootProps as CookiesConsentAlertProps } from './alert-root';
export type { AlertTitleProps as CookiesConsentAlertTitleProps } from './alert-title';

const CookiesConsentAlertContent = AlertContent;
const CookiesConsentAlertDescription = AlertDescription;
const CookiesConsentAlertTitle = AlertTitle;

export const CookiesConsentAlert = AlertRoot as typeof AlertRoot & {
  Content: typeof CookiesConsentAlertContent;
  Description: typeof CookiesConsentAlertDescription;
  Title: typeof CookiesConsentAlertTitle;
};
CookiesConsentAlert.Content = CookiesConsentAlertContent;
CookiesConsentAlert.Description = CookiesConsentAlertDescription;
CookiesConsentAlert.Title = CookiesConsentAlertTitle;
