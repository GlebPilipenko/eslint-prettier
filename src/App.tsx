import { FC } from 'react';

import { CustomInput } from './components';
import { ReturnComponentType } from './types';

export const App: FC = (): ReturnComponentType => <CustomInput title="Some title" />;
