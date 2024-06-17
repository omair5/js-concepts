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






// --------------PROMISES


// promises are used to handle async operations in javascript

// for example
// i have a cart

// const cart=['shirt','pant','kurta']

// createOrder(cart) it will return an orderID
// then we will call

// proceedToPay(orderID)

// in early days we used to handle this async task with callbacks

// createOrder(cart,callbackFunction)

// here we can not blindly trust createOrder api or function
// becasue may be this api is written by someone else
// and it may call our callback twice






// -----------ASYNC AWAIT


// how is async function different from normal function?
// async function will always returns a promise

// async await combo is used to handle promises

// before async await we use to handle promise with .then and .catch

// await keyword can only be use inside of a async function

// MAIN DIFFERENCE IN HANDLING PROMISE BY .then and async await is listed below

// const myPromise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('THE PROMISE 1 IS RESOLVED')
//     }, 10000)
// })

// const myPromise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('THE PROMISE 2 IS RESOLVED')
//     }, 5000)
// })

// PROMISE HANDLING USING THEN
// myPromise.then((res) => {
//     console.log(res)
// }).catch()
// console.log('i am a log')


// PROMISE HANDLING USING ASYNC AWAIT
// it will work synchronously (not actually) it is basically not in the call stack
// if it was the case then our program will freeze

// basically it looks like that it is working synchrounously but it is not

// the function handling the promise to be resolved will get suspended once
// it encounter await keyword and once the promise is resolved it will resume execution
// from where it has left

// const getData = async () => {
//     const data = await myPromise
//     console.log(data)
//     console.log('i am a log')
// }
// getData()


// const getData = async () => {
//     console.log('HELLO OMAIR HERE')
//     const p1 = await myPromise1
//     console.log('JUST LIKE THAT')
//     console.log(p1)


//     const p2 = await myPromise2
//     console.log('JUST LIKE THAT')
//     console.log(p2)
// }

// getData()


// Error handling is done using try/catch in async await

// behind the scene async await is also using .then and .catch
// so basically it is just an synthethical sugar for handling promises




// ------------THIS KEYWORD


// The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run.

// console.log(this)

// "use strict";

// function test() {
//     console.log(this)
// }

// test()

// const myObj = {
//     name: 'omair',
//     printName: () => {
//         console.log(this)
//     }
// }

// myObj.printName()

// POINT 1
// THIS keyword in global space will always points to global object
// (that can be different wrt to environmnet u r using)
// in web it is window in node it is global

// POINT 2
// THIS value behaves differently in strict and non strict mode

// POINT 3
// in strict mode the value of THIS keyword is undefined
// but due to (THIS SUBSTITUTION) this keyword will be replaced with globalObject
// only in non strict mode

// POINT 4
// THIS keyword value depends on how the function is called
// if the function is called without any reference its value will be undefined
// if a reference is provided e.g: window.x() then it will point to that reference

// POINT 5
// THIS keyword inside a object's method

// const obj = {
//     a: 10,
//     x: function () {
//         console.log(this.a)
//     }
// }

// obj.x()

// POINT 6
// arrow function dont provide their own THIS Binding
// it retians the THIS value of the enclosing lexical context

// const info = {
//     name: 'omair',
//     printName: () => {
//         console.log(this)
//     }
// }

// info.printName()

// const info = {
//     name: 'omair',
//     printName: () => {
//         const inner = () => {
//             console.log(this)
//         }
//         inner()
//     }
// }

// info.printName()


// const info = {
//     name: 'omair',
//     printName: () => {
//         const inner = function () {
//             console.log(this)
//         }
//         inner()
//     }
// }

// info.printName()

// const info = {
//     name: 'omair',
//     printName: function () {
//         const inner = () => {
//             console.log(this)
//         }
//         inner()
//     }
// }

// info.printName()

// 1-Arrow functions do not have their own this context; they inherit it from their defining scope.
// 2-Regular functions have their own this context, which is determined by the call site.
// 3-Calling a regular function without an explicit context(e.g., as an object method) will default this to the global object in non - strict mode or undefined in strict mode.


// POINT 7
// THIS INSIDE DOM ELEMENTS refer to HTML element

// POINT 8
// call , apply , bind methods are used for SHARING METHODS
// methodOrFunctionName.call(objectYouWantTHISKeywordToPoint)


// function printFullName(city, country) {
//     console.log(`${city} ${country}`)
// }

// let info = {
//     firstName: 'muhammad',
//     lastName: 'omair',

// }

// let teacherInfo = {
//     firstName: 'saeed',
//     lastName: 'ajmal',
// }
// CALL
// printFullName.call(teacherInfo, 'karachi', 'pechs')


// printFullName.apply(teacherInfo, ['karachi', 'pechs'])

// const testingBind = printFullName.apply(teacherInfo, ['karachi', 'pechs'])


// console.log(testingBind)


// Implicit Binding:

// const person = {
//     name: 'John',
//     greet: function () {
//         console.log(`Hello, ${this.name}!`);
//     },
// };

// person.greet(); // Output: Hello, John!


// Explicit Binding:

// JavaScript provides methods to explicitly bind the ‘this’ keyword to a specific object using functions such as call(), apply(), and bind().



//1. The call() method:

// The call() method allows you to invoke a function and explicitly set the ‘this’ keyword to a specified object. Consider the following example:
// function greet() {
//     console.log(`Hello, ${this.name}!`);
// }

// const person = {
//     name: 'John',
// };

// greet.call(person); // Output: Hello, John!
// In this example, the greet() function is invoked using the call() method, with the person object passed as the argument.As a result, ‘this’ inside the function refers to the person object.

// 2. The apply() method:

// The apply() method works similarly to the call() method, but it accepts an array of arguments instead.

// function greet() {
//     console.log(`Hello, ${this.name}!`);
// }

// const person = {
//     name: ['John'],
// };

// greet.call(person); // Output: Hello, John!


// 3. The bind() method:
// The bind() method returns a new function with the ‘this’ keyword permanently bound to a specified object.The original function remains unchanged.

// function greet() {
//     console.log(`Hello, ${this.name}!`);
// }

// const person = {
//     name: 'John',
// };

// const greetPerson = greet.bind(person);
// greetPerson(); // Output: Hello, John!




//---------------------- CONSTRUCTOR FUNCTION


// The regular {... } syntax allows us to create one object.But often we need to create many similar objects, like multiple users or menu items and so on.

// That can be done using constructor functions.

// Constructor functions technically are regular functions.There are two conventions though:

// They are named with capital letter first.
// They should be executed only with "new" operator.


// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }

// let user = new User("Jack");

// alert(user.name); // Jack
// alert(user.isAdmin); // false


// When a function is executed with new, it does the following steps:

// A new empty object is created and assigned to this.
// The function body executes.Usually it modifies this, adds new properties to it.
// The value of this is returned.
// In other words, new User(...) does something like:

// function User(name) {
// this = {};  (implicitly)

// add properties to this
//     this.name = name;
//     this.isAdmin = false;

// return this;  (implicitly)
// }




// ---------------------- CLASS IN JAVASCRIPT

// class = (ES6 feature) provides a more structured and cleaner way to
// work with objects compared to traditional constructor functions

// In JavaScript, the constructor inside a class and a constructor function serve similar purposes but have different syntaxes and are used in different contexts

// class product {
//     constructor(name, price) {
//         this.name = name
//         this.price = price
//     }

//     displayProducts() {
//         console.log(`product : ${this.name}`)
//         console.log(`price : ${this.price}`)
//     }
//     calculateTotal(salesTax) {
//         return this.price + (this.price * salesTax);
//     }
// }

// we just need to call the class, the constructor function will be called automatically

// const product1 = new product()
// console.log('product1', product1)

// in above console we are only getting
// { name: undefined, price: undefined }
// there is no method available in the object

// In JavaScript, when you define a class method, it is actually stored on the prototype
// of the class rather than directly on each instance of the class.
// This approach helps save memory because all instances of the class share the same method
// definition, rather than each instance having its own copy of the method.

// Why Methods Aren't Directly on the Object
// When you log product1, you see only the properties(name and price).
// The displayProducts method isn't shown directly on product1 because it's on Product.prototype.However,
// you can still call product1.displayProducts() because JavaScript will look up the prototype chain and find the method there.

// Visualizing the Prototype Chain

// product1(instance)
//     | __ name: "Sample Product"
//         | __ price: 100
//             | __ __proto__ -> Product.prototype
//                 | __ displayProducts
//                     | __ constructor

// When you access product1.displayProducts,
// JavaScript finds displayProducts on Product.prototype through the prototype chain.


// product1.displayProducts()


// Why Are Methods Defined Outside the Constructor Function ?

// Memory Efficiency:
// If methods were defined inside the constructor, every instance of the class would
// get its own copy of each method.By defining methods on
// the prototype(which happens when you define methods outside the constructor),
// all instances share the same method definitions, saving memory.

// Prototype Chain:
// Defining methods outside the constructor puts them on the class's prototype.
// This is a key aspect of how inheritance works in JavaScript.
// When a method is called on an instance,
// JavaScript looks up the prototype chain to find the method,
// promoting reuse and reducing redundancy.


// STATIC KEYWORD
// ---------------

// static = keyword that defines properties or methods that belong
// to a class itself rather than the objects created
// from that class (class owns anything static, not the objects)


// ----------- EXAMPLE 1 -----------
// class MathUtil {
//     static PI = 3.14159;

//     static getDiameter(radius) {
//         return radius * 2;
//     }
//     static getCircumference(radius) {
//         return 2 * this.PI * radius;
//     }
//     static getArea(radius) {
//         return this.PI * radius * radius;
//     }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10));




// ----------- EXAMPLE 2 -----------

// class User {

//     static userCount = 0;

//     constructor(username) {
//         this.username = username;
//         User.userCount++;
//     }

//     static getUserCount() {
//         console.log(`There are ${User.userCount} users online`);
//     }
//     sayHello() {
//         console.log(`Hello, my username is ${this.username}`);
//     }
// }

// const user1 = new User("Spongebob");
// const user2 = new User("Patrick");
// const user3 = new User("Sandy");

// user1.sayHello();
// user2.sayHello();
// user3.sayHello();
// User.getUserCount();

// type of class is a function and type of function is object so basically it is also object
// which gets stored in heap memory



// Why Use a Constructor ?
// The constructor allows you to initialize an object with specific values passed as arguments.
// This is useful for setting up the initial state of an object when it's created.

// you might skip the constructor.This is usually the case for very simple classes or when all properties have default values that don't need customization.


// class Animal {
//     alive = true;

//     eat() {
//         console.log(`This ${this.name} is eating`);
//     }

//     sleep() {
//         console.log(`This ${this.name} is sleeping`);
//     }
// }

// const dog = new Animal();
// dog.name = "Dog";
// const cat = new Animal();
// cat.name = "Cat";

// dog.eat(); // This Dog is eating
// cat.sleep(); // This Cat is sleeping



// INHERITANCE

// class Animal {

//     alive = true;

//     eat() {
//         console.log(`This ${this.name} is eating`);
//     }
//     sleep() {
//         console.log(`This ${this.name} is sleeping`);
//     }
// }

// class Rabbit extends Animal {

//     name = "rabbit";

//     run() {
//         console.log(`This ${this.name} is running`);
//     }
// }

// class Fish extends Animal {

//     name = "fish";

//     swim() {
//         console.log(`This ${this.name} is swimming`);
//     }
// }

// class Hawk extends Animal {

//     name = "hawk";

//     fly() {
//         console.log(`This ${this.name} is flying`);
//     }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(rabbit);
// rabbit.eat();
// rabbit.sleep();
// rabbit.run();



// Encapsulation: Focuses on restricting access to an object's internal state and
// providing a controlled way to access and modify it. (like getter and setters)

// Abstraction: Focuses on hiding the complexity of an implementation and exposing
// only the essential features.



// SUPER

// super = keyword is used in classes to call the constructor or
// access the properties and methods of a parent (superclass)
// this = this object
// super = the parent

// class Animal {

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     move(speed) {
//         console.log(`The ${this.name} moves at a speed of ${speed}mph`);
//     }
// }

// class Rabbit extends Animal {

//     constructor(name, age, runSpeed) {
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }

//     run() {
//         console.log(`This ${this.name} can run`);
//         super.move(this.runSpeed);
//     }
// }

// class Fish extends Animal {

//     constructor(name, age, swimSpeed) {
//         super(name, age);
//         this.swimSpeed = swimSpeed;
//     }

//     swim() {
//         console.log(`This ${this.name} can swim`);
//         super.move(this.swimSpeed);
//     }
// }

// class Hawk extends Animal {

//     constructor(name, age, flySpeed) {
//         super(name, age);
//         this.flySpeed = flySpeed;
//     }

//     fly() {
//         console.log(`This ${this.name} can fly`);
//         super.move(this.flySpeed);
//     }
// }

// const rabbit = new Rabbit("rabbit", 1, 25);
// const fish = new Fish("fish", 2, 12);
// const hawk = new Hawk("hawk", 3, 50);

// rabbit.run();
// fish.swim();
// hawk.fly();



// GETTER SETTERS

// ---------- EXAMPLE 1 ----------
// class Rectangle {

//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     set width(newWidth) {
//         if (newWidth > 0) {
//             this._width = newWidth;
//         }
//         else {
//             console.error("Width must be a positive number");
//         }
//     }

//     set height(newHeight) {
//         if (newHeight > 0) {
//             this._height = newHeight;
//         }
//         else {
//             console.error("Height must be a positive number");
//         }
//     }


//     get width() {
//         return `${this._width.toFixed(1)}cm`;
//     }

//     get height() {
//         return `${this._height.toFixed(1)}cm`;
//     }


//     get area() {
//         return `${(this._width * this._height).toFixed(1)}cm`;
//     }
// }

// const rectangle = new Rectangle(2, 3);

// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);

// // ---------- EXAMPLE 2 ----------
// class Person {

//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     set firstName(newFirstName) {
//         if (typeof newFirstName === "string" && newFirstName.length > 0) {
//             this._firstName = newFirstName;
//         }
//         else {
//             console.error("First name must be a non-empty string");
//         }
//     }

//     set lastName(newLastName) {
//         if (typeof newLastName === "string" && newLastName.length > 0) {
//             this._lastName = newLastName;
//         }
//         else {
//             console.error("Last name must be a non-empty string");
//         }
//     }

//     set age(newAge) {
//         if (typeof newAge === "number" && newAge >= 0) {
//             this._age = newAge;
//         }
//         else {
//             console.error("Age must be a non-negative number");
//         }
//     }

//     get firstName() {
//         return this._firstName;
//     }

//     get lastName() {
//         return this._lastName;
//     }

//     get fullName() {
//         return this._firstName + " " + this._lastName;
//     }

//     get age() {
//         return this._age;
//     }
// }

// const person = new Person("Spongebob", "Squarepants", 30);

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.fullName);
// console.log(person.age);