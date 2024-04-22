import React from 'react';

type CookiesConsentModalProps = {
  title: string;
};

export function CookiesConsentModal(props: CookiesConsentModalProps) {
  return <div>{props.title}</div>;
}
