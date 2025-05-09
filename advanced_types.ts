// ADVANCED TYPES
// UNION
// Union используется для возможности обозначить, что в той или иной переменной у нас
// могут находиться различные типы при различных обстоятельствах.
// const arr2: (string | number)[] = ['str', 1];

// string, number, boolean:
function logId2(id: string | number | boolean) {
  // Cужение типов для union types:
  if (typeof id === 'string') {
    console.log(id);
  } else if (typeof id === 'number') {
    console.log(id);
  } else {
    console.log(id);
  }
}
logId2(1);
logId2('str');
logId2(true);

// arrays:
function logError2(err: string | string[]) {
  if (Array.isArray(err)) {
    console.log(err);
  } else {
    console.log(err);
  }
}

// objects:
function logObject2(obj: { a: number } | { b: number }) {
  if ('a' in obj) {
    console.log(obj.a);
  } else {
    console.log(obj.b);
  }
}

// parameters with similar types:
function logMultipleIds2(a: string | number, b: string | boolean) {
  if (a === b) {
  } else {
    console.log(a);
  }
}
