type ValuesMapperType = {
  [key: string]: string;
};

const VALUES_MAPPER: ValuesMapperType = {
  firstKey: 'firstValue',
  secondKey: 'secondValue',
  thirdKey: 'thirdValue',
  fourthKey: 'fourthValue',
};

// Good practice
const getCorrectValueGood = (key: string): string => VALUES_MAPPER[key];

getCorrectValueGood('thirdKey');

// Bad practice
const getCorrectValueBad = (key: string): string => {
  if (key === 'firstKey') {
    return 'firstValue';
  }

  if (key === 'secondKey') {
    return 'secondValue';
  }

  if (key === 'thirdKey') {
    return 'thirdValue';
  }

  return 'fourthValue';
};

getCorrectValueBad('thirdKey');
