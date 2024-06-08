/*===================================
||
|| Data Types: Objects
||
===================================*/

/*----------------------------------
| Data Types: Objects
----------------------------------*/
console.group("DataTypes: Objects");

let myObj = {
    str: "Red",
    num: 897,
    arr: [10, 20, 30],
    fn: () => {
        console.log("This is a function assigned to an object.");
    },
};

myObj.fn();

//Everything is an obkect
let myArr = ["up", "down", 12];

if (myArr.length > 2) {
    console.log("Array has more than 2 elememts");
}

myArr.saywhat = "Say Who?";
console.log(myArr);

console.groupEnd();
