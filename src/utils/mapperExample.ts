type ValuesMapperType = {
  [key: string]: string;
};

const VALUES_MAPPER: ValuesMapperType = {
  firstKey: 'firstValue',
  secondKey: 'secondValue',
  thirdKey: 'thirdValue',
  fourthKey: 'fourthValue',
};

// Good
const getCorrectValueGood = (key: string): string => VALUES_MAPPER[key];

getCorrectValueGood('thirdKey');

// Bad
const getCorrectValueBad = (key: string): string => {
  if (key === 'firstKey') {
    return 'firstValue';
  }

  if (key === 'firstKey') {
    return 'secondValue';
  }

  if (key === 'firstKey') {
    return 'thirdValue';
  }

  return 'fourthValue';
};

getCorrectValueBad('thirdKey');
