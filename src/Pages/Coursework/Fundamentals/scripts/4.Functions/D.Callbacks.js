/*===================================
||
|| Functions: Call Backs (First Class Functions)
||
===================================*/
console.group("Functions: CallBacks");

const myConsumerFn = (fn) => {
    console.log("My Consumer Function");
    fn();
};

const myFnToPas = () => {
    console.log("Passing this function in");
};

myConsumerFn(myFnToPas);

// pass anonymous functions
myConsumerFn(() => {
    console.log("My callback anonymous");
});

console.groupEnd();
