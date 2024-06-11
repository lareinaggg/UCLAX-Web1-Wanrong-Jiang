/*===================================
||
|| Functions: Tagged Template String Functions
||
===================================*/
console.group("Functions: Tagged Template String Functions");

const myTaggedTmpStrFn = (strings, ...values) => {
    return `${strings[0]} ${values[0]} ${strings[0]}`;
};

const location = "pool";

const result = myTaggedTmpStrFn`I wwnt to the ${location} yesterday.`;

console.log(result);
console.groupEnd();
