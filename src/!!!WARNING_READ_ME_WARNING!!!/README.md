# Study your code carefully, if you see duplicate code, make a wrapper function, 
# or look for solutions on how to get rid of code duplication.

# 1) Clean code => remove all unused line and file

# 2) Eslint & prettier

# 3) Add file to .gitignore

# 4) tsConfig.ts => baseUrl 'src' or '.'

# 5) English language it's SVO language, Subject, Verb, Object
    * Subject - Субъект, - кто делает? Обычно опускается... 
    * Verb - Глагол, - что делаем? (
        - get,
        - set,
        - reset,
        - create,
        - read,
        - update,
        - delete,
        - fetch,
        - load,
        - remove,
        - compose,
        - handle,  => WARNING !!! => *** NOT HANDLER *** <= !!! WARNING <=
        - build,
        - render,
        - generate,
        - show,
        - enable,
        - edit,
        - other...
    ),
    * Subject - Объект - предмет на который направлено действие.
    * Naming for predicat function: is..., are... has..., can..., should...

    ~~~ MUST READ ~~~
    - event handler naming React
    https://jaketrent.com/post/naming-event-handlers-react
    https://javascript.plainenglish.io/handy-naming-conventions-for-event-handler-functions-props-in-react-fc1cbb791364

    - classes, variables, methods naming
    https://betterprogramming.pub/a-useful-framework-for-naming-your-classes-functions-and-variables-e7d186e3189f
    ~~~ MUST READ ~~~

# 6) Component
    * if component get props, use memo wrapper
    * use decomposition, (folder, file...)
    * types => not Array<string>, please use => string[]
    * imports => absolute paths and index.ts
    * not use magic number | value => BAD PRACTICE <= 
    * not props.users => ({ users }) => and use in component users without props.
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~    
    * use destructuring in props, .map() (all array methods) and in incoming parameters of functions
    
    const students = [{ id: 1, name: 'Gleb' }];
    students.map(({ id, name }) => ...), please not use students.map((student or el) => student.id or el.name)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    * use useMemo, useCallback not anywhere
    * take out logic to utils function
    * use early return for JSX & function
    * useSelector => take out selector outside
    * use customHooks, take out logic in custom hooks
    * don't use nested ternary expressions => BAD PRACTIES <== ( a ? b ? c : d )
    * more line code, less nested code

    ~~~ MUST READ ~~~
    - magic number pattern | value
    https://flaviocopes.com/magic-numbers/
    https://stackoverflow.com/questions/47882/what-is-a-magic-number-and-why-is-it-bad

    - reducers
    https://habr.com/ru/post/564004/ - сложная, не с первого раза зайдёт, повторяйте, вникайте.

    - early return pattern
    https://szymonkrajewski.pl/why-should-you-return-early/
    https://betterprogramming.pub/are-early-returns-any-good-eed4b4d03866
    https://forum.freecodecamp.org/t/the-return-early-pattern-explained-with-javascript-examples/19364

    - airbnb code style
    https://github.com/airbnb/javascript#blocks => en
    https://leonidlebedev.github.io/javascript-airbnb => ru
    ~~~ MUST READ ~~~
