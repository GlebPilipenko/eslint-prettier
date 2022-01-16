import { useCallback, useMemo, useState } from 'react';

import { EventFieldValueType, UseFieldValueReturnType } from './types';

import { EMPTY_STRING } from 'constants/base';

export const useFieldValue = (): UseFieldValueReturnType => {
  const [inputValue, setInputValue] = useState<string>(EMPTY_STRING);

  const handleSetInputValue = (newValue: string): void => setInputValue(newValue);

  const handleFieldValueChange = useCallback(
    (event: EventFieldValueType): void => {
      handleSetInputValue(event.currentTarget.value);
    },
    [handleSetInputValue],
  );

  return useMemo(
    () => ({ inputValue, handleFieldValueChange }),
    [inputValue, handleFieldValueChange],
  );
};
