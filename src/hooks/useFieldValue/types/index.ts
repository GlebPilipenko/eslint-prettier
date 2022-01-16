import { ChangeEvent } from 'react';

export type EventFieldValueType = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export type UseFieldValueReturnType = {
  inputValue: string;
  handleFieldValueChange: (event: EventFieldValueType) => void;
};
