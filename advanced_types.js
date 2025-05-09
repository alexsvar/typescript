"use strict";
// ADVANCED TYPES
// UNION
// Union используется для возможности обозначить, что в той или иной переменной у нас
// могут находиться различные типы при различных обстоятельствах.
// const arr2: (string | number)[] = ['str', 1];
function logId2(id2) {
    if (typeof id2 === 'string') {
        console.log(id2);
    }
    else if (typeof id2 === 'number') {
        console.log(id2);
    }
    else {
        console.log(id2);
    }
}
logId2(1);
logId2('str');
logId2(true);
