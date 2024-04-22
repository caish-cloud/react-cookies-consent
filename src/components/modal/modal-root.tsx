import React from 'react';

export type ModalRootProps = {
  title: string;
};

export function ModalRoot(props: ModalRootProps) {
  return <div>Modal test: {props.title}</div>;
}
