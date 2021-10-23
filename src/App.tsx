import { FC, useCallback } from 'react';

import { List } from './components';
import { ADD_COUPON } from './components/list/constants';
import { useHook } from './components/list/hooks';
import { ReturnComponentType } from './types';

export const App: FC = (): ReturnComponentType => {
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Remove all unused code, files, comments, folders, please get clean app
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Install all packages... (yarn add ~ or ~ npm install) => i did with YARN
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // yarn add eslint prettier
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // yarn add eslint-plugin-react => exclude writing anti-patterns
  // yarn add eslint-plugin-react-hooks => check hooks in react code
  // yarn add eslint-plugin-import => check all imports for correct work
  // yarn add eslint-plugin-prettier => ...
  // yarn add eslint-plugin-jsx-a11y => check code, for people with disabilities
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // yarn add eslint-config-airbnb => code style from airbnb
  // yarn add eslint-config-prettier => code style from prettier, no conflict with airbnb
  // yarn add eslint-import-resolver-typescript => for correct work package eslint-plugin-import on typescript
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // yarn add @typescript-eslint/parser // =>
  // yarn add @typescript-eslint/eslint-plugin // =>
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // create .pretierrc in project folder => add code from file
  // create .eslintrc.json in project folder => add code from file
  // create .eslintrcignore in project folder => add code from file
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Base url => tsconfig.json ('.' or 'src') => absolute paths for app
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // ~~~ POSSIBLE ERROR ~~~
  // ~~~ POSSIBLE ERROR ~~~
  // ~~~ POSSIBLE ERROR ~~~

  // If you get error "context.getPhysicalFilename is not a function",
  // use this link https://issueexplorer.com/issue/prettier/eslint-plugin-prettier/434

  // ~~~ POSSIBLE ERROR ~~~
  // ~~~ POSSIBLE ERROR ~~~
  // ~~~ POSSIBLE ERROR ~~~
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  /*
    IF YOU FOUND AN INTERESTING BUG OR HAVE PROBLEM WITH START APP,
    WRITE ME IN TELEGRAM @gleb_pilipenka
  */

  const { inputValue, handleInputValueChange } = useHook();

  console.log({ inputValue });
  console.log({ handleInputValueChange });

  const handleButtonCloseClick = useCallback((): void => console.log('click'), []);

  return <List addCoupon={ADD_COUPON} onButtonCloseClick={handleButtonCloseClick} />;
};
