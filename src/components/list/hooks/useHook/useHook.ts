import { ChangeEvent, useCallback, useMemo, useState } from 'react';

import { UseHookReturnType } from './types';

import { ADD_COUPON } from 'components/list/constants';

export const useHook = (): UseHookReturnType => {
  const copyCoupon = ADD_COUPON;

  console.log({ copyCoupon });

  const [inputValue, setInputValue] = useState('');

  const handleInputValueChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      const currentValue = event.currentTarget.value;

      if (currentValue) {
        setInputValue(currentValue);
      }
    },
    [],
  );

  return useMemo(
    () => ({
      inputValue,
      handleInputValueChange,
    }),
    [inputValue, handleInputValueChange],
  );
};
