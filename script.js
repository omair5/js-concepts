//-------------------- MEMORY MANAGEMENT


// https://felixgerschau.com/javascript-memory-management/

// you can probably get by fine not knowing anything about memory management as a JavaScript developer.Afterall, the JavaScript engine handles this for you.

// everything in js happens inside execution context

// execution context have 2 main parts (memory allocation phase & code execution phase)

// initially when code is executed a global execution context is created

// when u invoke a function a brand new execution context is created inside global execution context
// when we encounter return keyword in the above function it basically telling code
// then hey i have finished execution now return control back to execution context
// where this function was invoked
// now the whole execution context of the invoked function is deleted
// when whole code is executed then global context is also deleted

// CALL STACK
// execution contexts are stored in CALL STACK
// call stack basically maintains the order of execution contexts


// primitive data type ===> stack memory
// non primitive data type ===> heap memory

// JavaScript engines have two places where they can store data: The memory heap and stack.

// Stack: Static memory allocation
// A stack is a data structure that JavaScript uses to store static data.Static data is data where the engine knows the size at compile time.In JavaScript, this includes primitive values(strings, numbers, booleans, undefined, and null) and references, which point to objects and functions.

// Since the engine knows that the size won't change, it will allocate a fixed amount of memory for each value.


// Heap: Dynamic memory allocation

// The heap is a different space for storing data where JavaScript stores objects and functions.

// Unlike the stack, the engine doesn't allocate a fixed amount of memory for these objects. Instead, more space will be allocated as needed.


// All variables first point to the stack.In case it's a non-primitive value, the stack contains a reference to the object in the heap.

// The memory of the heap is not ordered in any particular way, which is why we need to keep a reference to it in the stack.You can think of references as addresses and the objects in the heap as houses that these addresses belong to.


// The heap memory is separate from the call stack

// Stack: Part of the call stack.It holds the execution contexts, which include references to primitive values and references to objects in the heap.
// Heap: Separate from the stack.It holds objects and functions referenced by the variables stored in the stack.

//---------------- GARBAGE COLLECTION

// We now know how JavaScript allocates memory for all kinds of objects, but if we remember the memory lifecycle, there's one last step missing: releasing memory.
// they release memory using Mark-and - sweep algorithm

// memory leak happens due to:
// Global variables

// function createGlobalLeak() {
//     leakedVar = "This is a global variable";
// }

// createGlobalLeak();
// `leakedVar` remains in memory for the lifetime of the application.


// Forgotten timers and callbacks

// function createTimerLeak() {
//     setInterval(function () {
// Do something
//     }, 1000);
// }

// The interval will keep running and its memory will not be released.
// createTimerLeak();


// CLOSURES
// function outerFunction() {
//     let largeArray = new Array(1000000).fill("large");

//     return function innerFunction() {
//         console.log(largeArray[0]);
//     }
// }

// let closureLeak = outerFunction();
// `largeArray` is still referenced by `innerFunction` and cannot be garbage collected.


// ----------PASSS BY REFEENCE

// let c=[1,2]
// let d=c   here d is pointing to the memory of c so any change in c would effect d as well and vice versa

// d=[3,4,5]
// now d is assigned with a new memory address
// 3x031 =[3,4,5]



// let c = [1, 2]

// function add(list) {
//     list.push('3')
// }

// add(c)

// console.log(c)



// Closures are a powerful feature in JavaScript that allows a function to retain access
// to its lexical scope even after the function has
// finished executing and has been removed from the call stack.

// Lexical Scoping:

// JavaScript uses lexical scoping, meaning that the scope of variables is determined by their location within the source code.When a function is defined, it captures its lexical environment, which includes any variables in scope at the time of its definition.
// Persistent Lexical Environment:

// When a function with a closure is returned or passed as a callback, it carries its lexical environment with it.This environment is stored in the heap memory, not on the call stack.The closure maintains references to the variables from its lexical environment, ensuring they persist as long as the closure exists.
// Garbage Collection:

// JavaScript's garbage collector does not remove the lexical environment of a closure as long as there are references to the closure. This means that even after the outer function has executed and returned, the lexical environment remains in memory, allowing the closure to access its variables.


// To ensure closures do not negatively impact performance, follow these best practices:

// Avoid Unnecessary Closures:

// Only use closures when necessary.Avoid creating closures inside loops if not needed.


// Release References:

// Manually release references to closures or objects captured by closures if they are no longer needed.

// let closureFunction = outerFunction();
// When no longer needed
// closureFunction = null; // Helps garbage collector to reclaim memory



