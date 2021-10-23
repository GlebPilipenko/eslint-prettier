import { FC, memo, RefObject, useEffect, useRef } from 'react';

import { useHook } from './hooks';
import { PropsType } from './types';

import { ReturnComponentType } from 'types';

export const List: FC<PropsType> = memo(
  ({ addCoupon, onButtonCloseClick }): ReturnComponentType => {
    const inputRef: RefObject<HTMLInputElement> = useRef(null);

    const { inputValue, handleInputValueChange: onChange } = useHook();

    useEffect(() => {
      (async () => {
        const promise: Promise<string> = new Promise(resolve => {
          resolve('Good Luck');
        });

        promise.then((data: string) => console.log(data));
      })();
    }, []);

    useEffect(() => {
      console.log('useEffect');
    }, []);

    console.log({ addCoupon });

    if (typeof addCoupon !== 'string') {
      return null;
    }

    return (
      <>
        <input ref={inputRef} type="text" value={inputValue} onChange={onChange} />
        <button type="button" onClick={onButtonCloseClick}>
          Close
        </button>
      </>
    );
  },
);
