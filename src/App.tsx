import { FC } from 'react';

import { CustomInputWith } from 'components';
import { ReturnComponentType } from 'types';

export const App: FC = (): ReturnComponentType => {
  console.log('Render App...');

  return <CustomInputWith title="Some title" />
};
