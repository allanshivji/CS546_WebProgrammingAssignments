const geo = require("./geometry.js")
const uti = require("./utilities.js")

let vrp = null;
let srp = null;
let vs = null;
let ss = null;

// This is for geometry.js file
try {
    vrp = geo.volumeOfRectangularPrism(2, 2, 2);
    console.log("Volume of Rectangular Prism is " + vrp);
} catch (error) {
    console.log(error);
}

try {
    srp = geo.surfaceAreaOfRectangularPrism(2, 2, 2);
    console.log("Surface area od Rectangular Prism is " + srp);
} catch (error) {
    console.log(error);
}

try {
    vs = geo.volumeOfSphere(2);
    console.log("Volume of sphere is " + vs);
} catch (error) {
    console.log(error);
}

try {
    ss = geo.surfaceAreaOfSphere(2);
    console.log("Surface area of sphere is " + ss);
} catch (error) {
    console.log(error);
}

// This is for utilities.js file
const first = {a: 2, b: 3};
const second = { a: 2, b: 4 };
const third = {a: 2, b: 3};
const fourth = { a: 2, b: { c: 44, d: 55 } };
const fifth = { a: 2, b: { c: 44, d: 56 } };
try {

    console.log(uti.deepEquality(first, second));
}
catch (err) {
console.log(err);
}
try {
    console.log(uti.deepEquality(first, third));
}
catch (err) {
console.log(err);
}

try {
    const testArr = ["a", "a", "b", "a", "b", "c"];
    console.log(uti.uniqueElements(testArr));
} catch (error) {
    console.log(error);
}

try {
    const test = "Hello, the pie is in the oven";
    //const test = 26;
    console.log(uti.countOfEachCharacterInString(test));
} catch (error) {
    console.log(error);
}