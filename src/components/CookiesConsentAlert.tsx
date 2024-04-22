import React from 'react';

type CookiesConsentAlertProps = {
  title: string;
};

export function CookiesConsentAlert(props: CookiesConsentAlertProps) {
  return (
    <div>
      <h1>This is a test: {props.title}!</h1>
    </div>
  );
}
