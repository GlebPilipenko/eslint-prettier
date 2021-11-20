# Study your code carefully, if you see duplicate code, make a wrapper function, 
# or look for solutions on how to get rid of code duplication.

# 1) Clean code => remove all unused line and file

# 2) Eslint & prettier

# 3) Add file to .gitignore

# 4) tsConfig.ts => baseUrl 'src' or '.'

# 5) Component
    * if component get props, use memo
    * use decomposition, (folder, file...)
    * types => not Array<>, please use => []
    * imports => absolute paths and index.ts
    * not use magic number | string => BAD PRACTICE <==
    * not props.users => ({ users }) => and use in JSX users without props.
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~    
    * use destructuring in props and .map() => example => const students = [{ id: 1, name: 'Gleb' }];
    students.map(({ id, name }) => ...), please not use students.map(student or el => student.id or el.name)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    * use useMemo, useCallback
    * take out logic to utils function
    * use early return for JSX & function
    * useSelector => take out selector outside
    * use customHooks, take out logic in custom hooks
    * Don't use nested ternary expressions => BAD PRACTIES <== ( a ? b ? c : d )
