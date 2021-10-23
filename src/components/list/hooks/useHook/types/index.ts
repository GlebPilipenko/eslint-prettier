import { ChangeEvent } from 'react';

export type UseHookReturnType = {
  inputValue: string;
  handleInputValueChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
