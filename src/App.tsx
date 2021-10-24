import { FC, useCallback } from 'react';

import { List } from './components';
import { ADD_COUPON } from './components/list/constants';
import { useHook } from './components/list/hooks';
import { ReturnComponentType } from './types';

export const App: FC = (): ReturnComponentType => {
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Remove all unused code, files, comments, folders, please get clean app
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // If you use Webstorm or PhpStorm => ctrl + alt + s, => Editor => Code style =>
  // and search field "Hard wrap at" => change value on 90
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Install all packages... (yarn add ~ or ~ npm install) => i did with YARN
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // yarn add eslint prettier
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // yarn add eslint-plugin-react => exclude writing anti-patterns
  // yarn add eslint-plugin-react-hooks => check valid hooks in react code
  // yarn add eslint-plugin-import => check all imports for correct work
  // yarn add eslint-plugin-prettier => .................................
  // yarn add eslint-plugin-jsx-a11y => check code, for people with disabilities
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // yarn add eslint-config-airbnb => airbnb config
  // yarn add eslint-config-prettier => prettier config, no conflict with airbnb
  // yarn add eslint-import-resolver-typescript => for correct work eslint-plugin-import package with typescript
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // yarn add @typescript-eslint/parser => eslint parser code for typescript
  // yarn add @typescript-eslint/eslint-plugin => .................................
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Create .env in your project folder => add code from .env into your .env file
  // Create .pretierrc file in your project folder => add code from .pretierrc into your .pretierrc file
  // Create .eslintrc.json in your project folder => add code from .eslintrc.json into your .eslintrc.json file
  // Create .eslintrcignore in your project folder => add code from .eslintrcignore into your .eslintrcignore file
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // into .gitignore file copy lines 25-29 and add code into your .gitignore file
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Base url => tsconfig.json ('.' or 'src') => absolute paths for app,
  // If '.' => path in import 'src/components/...'
  // If 'src' => path in import 'components/...' or './components/...'
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // ~~~ POSSIBLE ERROR ~~~
  // ~~~ POSSIBLE ERROR ~~~
  // ~~~ POSSIBLE ERROR ~~~

  // If you get error >>>>> "context.getPhysicalFilename is not a function" <<<<<,
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

  const handleCloseClick = useCallback((): void => console.log('click'), []);

  return <List addCoupon={ADD_COUPON} onCloseClick={handleCloseClick} />;
};
