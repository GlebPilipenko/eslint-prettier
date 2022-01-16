import { FC, memo } from 'react';

import { CustomInputType } from './types';

import { useFieldValue } from 'hooks';
import { ReturnComponentType } from 'types';

// const CROP_INDEX = 3;

export const CustomInput: FC<CustomInputType> = memo(({ title }): ReturnComponentType => {
  const { inputValue, handleFieldValueChange } = useFieldValue();

  // If you are using a magic number and this is a local case,
  // you can create a constant before declaring the component => see line #8

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  // const arrayOfNumbers = [1, 2, 3];
  // const slicedArrayOfNumbers = arrayOfNumbers.slice(CROP_INDEX); // Not used number 3, use constant

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  return (
    <div>
      <h1>{title}</h1>
      <input type="text" value={inputValue} onChange={handleFieldValueChange} />
    </div>
  );
});
