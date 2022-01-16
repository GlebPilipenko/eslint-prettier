import { FC, MouseEventHandler } from 'react';

import { ExampleType } from './types';

import { ReturnComponentType } from 'types';

// Constants
// const MIN_ARRAY_LENGTH = 0;
// const CLEAR_BUTTON_CLASS_NAME = 'clear-btn';
// const SUCCESSES_BUTTON_CLASS_NAME = 'successes-btn';

export const Example: FC<ExampleType> = (): ReturnComponentType => {
  // useDispatch
  // const dispatch = useDispatch();

  // useHistory / useParams => block
  // const params = useParams();
  // const history = useHistory();

  // useSelector => block
  // const cats = useSelector(getCats);
  // const users = useSelector(getUsers);
  // const friends = useSelector(getFriends);

  // useState or custom hooks => block
  // const [state1, setState1] = useState<boolean>(false);
  // const [state2, setState2] = useState<boolean>(false);
  // const [state3, setState3] = useState<string>(EMPTY_STRING);

  // or

  // const { state1, state2, ... } = useGetHelperStates();
  // const { state2, state3, ... } = useGetHelperStates();

  // Constants => block
  // const correctClassName1 = users.length > MIN_ARRAY_LENGTH
  // ? CLEAR_BUTTON_CLASS_NAME
  // : SUCCESSES_BUTTON_CLASS_NAME;
  // const correctClassName2 = !users.length > MIN_ARRAY_LENGTH
  // ? CLEAR_BUTTON_CLASS_NAME
  // : SUCCESSES_BUTTON_CLASS_NAME;

  // useEffect => not block, empty line
  // useEffect(() => {
  // ...
  // }, [ ... ])

  // useEffect(() => {
  // ...
  // }, [ ... ])

  // Handlers => not block, empty line
  // const onClick = (): void => setState1(true);

  // const onChange = (event: ChangeEvent<HTMLInputElement>): void => setState3(event.currentTarget.value);

  const onClick =
    (
      firstParameter: string,
      secondParameter: string,
    ): MouseEventHandler<HTMLHeadingElement> =>
    (): void => {
      console.log(`${firstParameter}+_+${secondParameter}`);
    };

  // Early return => not block, empty line
  // if (!cats.length) {
  //   return null;
  // }

  // if (!users.length) {
  //   return null;
  // }

  // Line for correct eslint work...
  console.log('Example');

  // JSX
  return (
    <>
      <h1>EXAMPLE</h1>
      <div role="presentation" onClick={onClick('firstParameter', 'secondParameter')}>
        Click Me!
      </div>
    </>
  );
};
