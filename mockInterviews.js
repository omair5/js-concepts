// ------------------- 4.5 YEARS EXPERIENCE MOCK INTERVIEW OF JAVASCRIPT

// https://www.youtube.com/watch?v=uhtmTe26rqo

// const input = [
//     {
//         key: "sample 1",
//         data: "data 1",
//     },
//     {
//         key: "sample 1",
//         data: "data 1",
//     },
//     {
//         key: "sample 2",
//         data: "data 2",
//     },
//     {
//         key: "sample 1",
//         data: "data 1",
//     },
//     {
//         key: "sample 3",
//         data: "data 3",
//     },
//     {
//         key: "sample 4",
//         data: "data 4",
//     },
// ];

// expected output

// let output = {
//     "sample 1": [
//         {
//             key: "sample 1",
//             data: "data 1",
//         },
//         {
//             key: "sample 1",
//             data: "data 1",
//         },
//         {
//             key: "sample 1",
//             data: "data 1",
//         },
//     ],
//     "sample 2": [
//         {
//             key: "sample 2",
//             data: "data 2",
//         },
//     ],
//     "sample 3": [
//         {
//             key: "sample 3",
//             data: "data 3",
//         },
//     ],
//     "sample 4": [
//         {
//             key: "sample 4",
//             data: "data 4",
//         },
//     ],
// };

// SOLUTION

// let myOutput = {};

// input.forEach((obj) => {
//     console.log(obj.key);
//     if (myOutput[obj.key]) {
//         myOutput[obj.key].push(obj);
//     } else {
//         myOutput[obj.key] = [obj];
//     }
// });

// console.log('myOutput', myOutput)












// const mapper = new Map();

// const add = (a, b) => a + b;

// const memoizeOne = (fn) => {
//     return (...args) => {
//         const key = JSON.stringify(args);
//         if (mapper.has(key)) {
//             console.log("returning from cache");
//             return mapper[key];
//         } else {
//             mapper.set(key, fn(...args));
//             console.log("add function is executed");
//             return fn(...args);
//         }
//     };
// };

// console.log(mapper);

// const memoizedAdd = memoizeOne(add);

// memoizedAdd(1, 2); //add function is called to get new value
// memoizedAdd(1, 2); //add function is not executed:previous result is returned
