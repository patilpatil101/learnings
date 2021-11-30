/***********************************************************************************************************/
/************** This documentation is written by Rohit Patil (7888226600) *********************************/
/***********************************************************************************************************/

/**
 * Javascript
 */

// closure vs callback
// Object.create() vs setPrototypeOf


/******** JavaScript ****** JavaScript ***** JavaScript ****** JavaScript **** JavaScript ****** JavaScript ****** JavaScrip t*****/
/******** JavaScript ****** JavaScript ***** JavaScript ****** JavaScript **** JavaScript ****** JavaScript ****** JavaScrip t*****/
/******** JavaScript ****** JavaScript ***** JavaScript ****** JavaScript **** JavaScript ****** JavaScript ****** JavaScrip t*****/

/**
 * Execution Context
 *
 * Defination:
 *        It's an environment where the Javascript code is evaluated and executed.
 *        Whenever any code is run in JavaScript, it’s run inside an execution context
 *
 *  3 Types of Execution Context:  * 3 Types of Execution Context: * 3 Types of Execution Context: * 3 Types of Execution Context:
 *
 *     1. Global Execution Context
 *     2. Functional Execution Context
 *     3. Eval Function Execution Context -> Code executed inside an eval function also gets its own execution context
 *
 *  1. What is Global Execution Context?
 *  Defination:
 *         This is the {default} or base execution context
 *         The code that is not inside any function is in the global execution context
 *  Note:  There can only be {one} global execution context in a program
 *
 *
 *  2. What is Functional Execution Context?
 *  Defination:
 *         Every time a function is invoked, a brand new execution context is created for that function
 *         Each function has its own execution context,
 *         but it’s created when the function is invoked or called
 *  Note:  There can be {multiple} function execution contexts
 *
 **********************************************************************************************************************************************
 *
 *  * VVIMP: How Execution Context Created?
 *    Answer: The execution context is created in two phases:
 *            1) Creation Phase and
 *            2) Execution Phase.
 *
 *    1) Creation Phase:
 *          * LexicalEnvironment component is created.
 *               Defination:
 *                      A lexical environment is a structure that holds variables/functions & reference to actual object mapping.
 *                      And is used to store function declaration and variable (let and const) bindings
 *
 *                         var a = 20;                 To Lexical code      lexicalEnvironment = {
 *                         var b = 40;                   ==========>            a: 20,
 *                         function foo(){                                      b: 40,
 *                           console.log('bar)                                  foo: <ref. to foo function>
 *                         }                                                 }
 *
 *          * VariableEnvironment component is created.
 *                    Is used to store the variable (var) bindings only.
 *
 *    2) Execution Phase
 *             Defination:
 *                    In this phase assignments to all those variables are done and the code is finally executed
 */


/*********************************************************************************************************************************************/
/**
 * Execution Stack
 *
 * Defination:
 *        It stores all the {Execution Context} created during the code execution (LIFO pattern)
 *        The engine executes the function whose execution context is at the top of the stack.
 *
 *   When the JavaScript engine first encounters your script,
 *   it creates a global execution context and pushes it to the current execution stack.
 *   Whenever the engine finds a function invocation, it creates a new execution context for that function
 *   and pushes it to the top of the stack.
 *
 *
 */
/*********************************************************************************************************************************************/
/**
 * Call Stack (aka Execution Stack)
 *
 * JavaScript engine uses a call stack to manage execution contexts: the Global Execution Context and Function Execution Contexts.
 * The call stack works based on the {LIFO} principle i.e., last-in-first-out
 * When you execute a script, the JavaScript engine creates a Global Execution Context and pushes it on top of the call stack.
 * Whenever a function is called, the JavaScript engine creates a Function Execution Context for the function,
 * & pushes it on top of the Call Stack, and starts executing the function.
 */

/*********************************************************************************************************************************************/
/**
 * Execution Stack vs Call Stack
 * Сall Stack and Execution Stack are different names for the same thing
 * Both are same Execution Stack (also known as the "Call Stack")
 */

/**
 * typeof in javascript
 * 
 * undefined            => undefined
 * null                => object
 * NaN                 => number
 * Array               => function
 * Object              => function
 * []                  => object
 * {}                  => object
 * 'rohit'             => string
 * new String('rohit') => object
 * BigInt              => function
 * Symbol()            => symbol
 * Infinity             => number
 */



/*********************************************************************************************************************************************/
/**
 * Event Loop
 *
 * Event Loop help for non-blocking I/O operations.
 * It watch the browser call stack & event queue.
 * It takes the requests & checks if the call stack is empty or not.
 * Once the stack is empty it takes the first event from queue & pushes into the call stack.
 * & trigger a callback
 */


/******** Design Patterns in JS ****** Design Patterns in JS ************* Design Patterns in JS ************* Design Patterns in JS *********/
/******** Design Patterns in JS ****** Design Patterns in JS ************* Design Patterns in JS ************* Design Patterns in JS *********/
/******** Design Patterns in JS ****** Design Patterns in JS ************* Design Patterns in JS ************* Design Patterns in JS *********/

/**
 *  1. Observer Pattern => Observable With Subscribe
 *  2. Factory Pattern => When a function returns an object we call it as Factory Function.
 *  3. Singleton Pattern
 */

/*********************************************************************************************************************************************/
/****** Singleton Pattern ****** Singleton Pattern ****** Singleton Pattern ********* Singleton Pattern ************ Singleton Pattern ********************/
/****** Singleton Pattern ****** Singleton Pattern ****** Singleton Pattern ********* Singleton Pattern ************ Singleton Pattern ********************/
/****** Singleton Pattern ****** Singleton Pattern ****** Singleton Pattern ********* Singleton Pattern ************ Singleton Pattern ********************/

/**
 * Answer:
 *
 * const singletonInstance = new Singleton();
 * Object.freeze(singletonInstance);
 */

/**
 * ES6 Style Better Approach
 */

// class RobotCreatedByRohit {
//   constructor() {
//     if (RobotCreatedByRohit.rohitInstance) {
//       throw new Error("Singleton classes can't be instantiated more than once.")
//     } else {
//       RobotCreatedByRohit.rohitInstance = this;
//     }
//   }
// }

// var robot = new RobotCreatedByRohit() // Executes succesfully 
// var robot = new RobotCreatedByRohit() // Throws error
/************************************************/

/**
 * 2nd Way
 */

// class Singleton {
//   constructor() {
//     console.log("Inside Constructor");
//   }

//   method1() {
//     console.log("Inside Method 1");
//   }

//   method2() {
//     console.log("Inside Method 2");
//   }
// }

// const singletonInstance = new Singleton();
// Object.freeze(singletonInstance);

/************************************************/
/**
 * 3rd Way
 */

// // Declare them like this
// var SingletonInstance = {
//   method1: function () { console.log("Method 1") },
//   method2: function () { console.log("Method 2") }
// };

// // and use them as such
// console.log(SingletonInstance.method1());
// console.log(SingletonInstance.method2());

/*********************************************************************************************************************************************/
/*********************************************************************************************************************************************/
/*********************************************************************************************************************************************/

// ** Very Important ** //
// .call .bind .apply Methods

/*********************************************************************************************************************************************/
//.call .call .call .call .call .call .call .call .call .call .call .call .call .call .call .call .call .call Method
//=> function borrowing 
/*********************************************************************************************************************************************/

// let name = {
//     firstname: 'Rohit',
//     lastname: 'Patil',
//     printFullName: function () {
//         console.log(this.firstname + " " + this.lastname);
//     }
// }
// name.printFullName();      // Rohit Patil

/****************************************************************/
// Now will create one more object called name2 and need to console log printFullName but it's not good practice to write printFullName same method multiple time
/****************************************************************/

// let name2 = {
//     firstname: 'Harshal',
//     lastname: 'Patil',
//     printFullName: function () {
//         console.log(this.firstname + " " + this.lastname);
//     }
// }
// name2.printFullName();      // Harshal Patil

/****************************************************************/
// What we do generally will write common function only once and that will use everywhere
/****************************************************************/

// function printFullName() {
//     console.log(this.firstname + " " + this.lastname);
// }
// let name = {
//     firstname: 'Rohit',
//     lastname: 'Patil'
// }
// let name2 = {
//     firstname: 'Harshal',
//     lastname: 'Patil'
// }
// printFullName.call(name);    // Rohit Patil
// printFullName.call(name2);   // Harshal Patil

/****************************************************************/
// Passing arguments to common function using call method
/****************************************************************/

// function printFullName(hometown, district) {
//     console.log(this.firstname + " " + this.lastname + " from " + hometown + " district " + district);
// }
// let name = {
//     firstname: 'Rohit',
//     lastname: 'Patil'
// }
// let name2 = {
//     firstname: 'Harshal',
//     lastname: 'Patil'
// }
// printFullName.call(name, 'Malkapur', 'Buldhana');     // Rohit Patil from Malkapur district Buldhana
// printFullName.call(name2, 'Malkapur', 'Buldhana');    // Harshal Patil from Malkapur district Buldhana


/****************************************************************************************************************************************/
//.apply .apply .apply .apply .apply .apply .apply .apply .apply .apply .apply .apply .apply .apply .apply .apply .apply .apply Method  
/****************************************************************************************************************************************/

// function printFullName(hometown, state) {
//     console.log(this.firstname + " " + this.lastname + " from " + hometown + ", " + state);
// }
// let name = {
//     firstname: 'Rohit',
//     lastname: 'Patil'
// }
// let name2 = {
//     firstname: 'Harshal',
//     lastname: 'Patil'
// }
// printFullName.call(name, 'Malkapur', 'Maharashtra');     // Rohit Patil from Malkapur, Maharashtra ==> passing second argument as string
// printFullName.apply(name2, ['Malkapur', 'UP']);    // Harshal Patil from Malkapur, UP              ==> passing second argument as array of string

/****************************************************************************************************************************************/
//.bind .bind .bind .bind .bind .bind .bind .bind .bind .bind .bind .bind .bind .bind .bind .bind .bind .bind Method 
//=> keep a copy of method and use it later. Need to call function for .bind()
/****************************************************************************************************************************************/
// var add = function (x, y) {
//   return x + y;
// }
// var add2 = add.bind(null, 2);         // 2 is stored 
// console.log(add2(2));         //4

/******************** OR *********** OR ************ OR ************************/

// function printFullName(hometown, state) {
//     console.log(this.firstname + " " + this.lastname + " from " + hometown + ", " + state);
// }
// let name = {
//     firstname: 'Rohit',
//     lastname: 'Patil'
// }

// let printMyName = printFullName.bind(name, 'Malkapur', 'Maharashtra');
// console.log(printMyName);   // returns a printFullName full function
// printMyName();              // Rohit Patil from Malkapur, Maharashtra

/****************************************************************************************************************************************/
// Polyfill for .bind() ==> what will happen if .bind() method not worked for different browser Answer: We need to create our own binding method like .bind() 
/****************************************************************************************************************************************/

// TODO

/****************************************************************/
// Hoisting:
/****************************************************************/
// functions declaration and variable declaration will go on top of the code
// function expression will not hoisted.
/****************************************************************/

// var a = hello();
// console.log(a);
// function hello() {   //function declaration
//     return "hello";         // "hello"                             NOTE: functions are hoisted
// }
/****************************************************************/

// var b = world();
// console.log(b);
// var world = function () {  //function expression // world is not a function
//   return "world";               
// }
/****************************************************************/

// const x;
// x = 5;
// console.log(x);             // error to variable x Missing initializer in const declaration
/****************************************************************/

// console.log(x);
// var x = 5;                    // undefined
/****************************************************************/

// console.log(x);
// let x = 5;                  // x is not defined                    NOTE: let and const can be hoisted
/****************************************************************/

// console.log(x);
// const x = 5;                  // x is not defined
/****************************************************************/

// Difference between normal function and arrow function (same as function expression)

// 1. Regular function name may be hoisted but Arrow functions are NOT hoisted(why? because arrow functions doesn't have any name)
// 2. `this` in arrow function is binded to previous value of this (refers parent this value) Arrow function don't have his own this.
// 3. We can not use `new` keyword in arrow function because of point 2 & they don't have a constructor.
// 4. Normal function have names and it may be anonymous where Arrow functions always anonymous.
// 5. Arrow function mostly used in callback because callback don't required to be named.

/****************************************************************/

// const obj = {
//   name: 'Rohit',
//   arrowFunction: () => {
//     console.log("this:", this);           // {}
//     return this.name;                     // arrow function
//   },
//   normalFunction: function () {
//     return this.name                     // normal function
//   }
// }
// obj.middle = 'new';
// console.log(obj.arrowFunction());         // {} undefined
// console.log(obj);   // { name: 'Rohit', arrowFunction: [Function: arrowFunction], normalFunction: [Function: normalFunction], middle: 'new' }

// AND

// var obj = {
//   age: 50,
//   arrowFunction: () => console.log("Age:", this.age, this),   // Age: undefined {}
//   normalFunction: function () {
//     console.log(this.age, this);    //50 and current obj
//   }
// }
// obj.arrowFunction();
// obj.normalFunction();
/****************************************************************/

// console.log(this);       --> {}
/****************************************************************/

// Difference between new Object and createObject
/****************************************************************/

// const multiply = x => x * x;    // single arguments
// const multiply = (x, y) => x * y; // multiple arguments
// console.log(multiply(5, 10)); // --> 25
/**********************************************************************************************************************************************/
// Parameter passing  Parameter passing Parameter passing Parameter passing Parameter passing Parameter passing 
// Overloading Overloading
/**********************************************************************************************************************************************/
/**
 * IMPORTANT:  We can pass more arguments but we can't pass less argument
 * */

// var add = function (a, b) {
//     return a + b;
// }
// var add = function (a, b, c) {
//     return a + b + c;
// }

// function add(a, b, c) {
//     return a + b + c; // NaN We can pass more arguments but we can't pass less argument
// }

// console.log(add(5, 10)); //NaN
// console.log(add(5, 10, 10, 29)); //25

// var add = function (a, b) {
//   return a + b;
// }
// var add = function (a, b, c) {
//   return a + b + c;
// }

// console.log(add(5, 10));  // NaN  NOTE: Less parameter will not work. We have to pass 3 or more than 3 paramter
/****************************************************************/

// const video = {
//   title: 'a',
//   play() {
//     console.log("Current Object:", this);   // this keyword will refer current object
//   },
//   // play: function () {
//   //   console.log(this.title);             // Multiple way to write function
//   // },
//   // play: () => {
//   //   console.log(this.title);
//   // }
// }

// video.play(); // Current Object: { title: 'a', play: [Function: play] }

/****************************************************************/


// function playVideo() {
//   console.log(this);
// }

// playVideo();        //   Window Object
// Object [global] {
//     global: [Circular],
//     clearInterval: [Function: clearInterval],
//     clearTimeout: [Function: clearTimeout],
//     setInterval: [Function: setInterval],
//     setTimeout: [Function: setTimeout] { [Symbol(util.promisify.custom)]: [Function] },
//     queueMicrotask: [Function: queueMicrotask],
//     clearImmediate: [Function: clearImmediate],
//     setImmediate: [Function: setImmediate] {
//       [Symbol(util.promisify.custom)]: [Function]
//     }
//   }
/****************************************************************/

// Constructor function

// var video = function (title, year) {
//   this.title = title;
//   this.year = year;                                   //both function will work
// }

// function video(title, year) {
//   this.title = title;
//   this.year = year;                                   //both function will work
// }

// const v = new video('DDLJ', '1994');
// console.log(v);  //  video { title: 'DDLJ', year: '1994' }
/****************************************************************/

// const video = {
//   title: 'ddlj',
//   tags: ['a', 'b', 'c'],
//   showTags() {
//     // console.log(tags); // tags is not defined
//     // console.log(this.tags); // ['a', 'b', 'c']
//     this.tags.forEach(function (tag) {
//       console.log(this.title, tag);  // this.title will return undefined /* undefined a */ because this keyword refers Window object here. this keyword is now under normal function not in showTags
//       // undefined a
//       // undefined b
//       // undefined c
//     }, this) // once you bind this keyword here then only you can use this keyword in function.
//   }
// }

// video.showTags();
/****************************************************************/

// Function Declaration vs Function Expression

// var a = hello();
// console.log(a);
// function hello() {  //function declaration
//     return "hello";
// }


// var b = world();
// console.log(b);
// var world = function() { //function expression  world is not a function    Because this function will not hoisted
//     return "world";
// }
/****************************************************************/

// var a = 2 - 5 / 3 * 1 + 2;
// console.log(a); // 2.3333333333333

// console.log(4 ** 3 ** 2); //262144

// console.log(4 ** 3); //4 * 4 * 4  = 64

/****************************************************************/

// var vikas = {
//     age: 26,
//     arrowFunction: () => {
//         console.log(this);
//     },
//     normalFunction() {
//         console.log(this);
//     }
// }

// vikas.arrowFunction(); // {}
// vikas.normalFunction(); // current object
// // {
// //     age: 26,
// //     arrowFunction: [Function: arrowFunction],
// //     normalFunction: [Function: normalFunction]
// //   }

/* ******************* VVIMP VVIMP VVIMP (PROTOTYPE in javascript) VVIMP VVIMP *********************/
/**
 *  The JavaScript prototype property allows you to add new properties to object constructors:
 */
// var car = function (name, power) {
//     this.name = name;
//     this.power = power;
// }

// car.prototype.seatsCapacity = "4";     /** Adding seatsCapacity into car and we can access this like car instance.seatsCapacity (c.seatsCapacity) */

// car.prototype.engine = function () {
//     console.log(this.name + " " + this.power);  /** Adding new engine function into car (c.engine()) */
// }

// const c = new car('Honda', 350);
// console.log(c.engine());
// console.log(c.seatsCapacity);

/********************************************************************************************************************************************/
/* __proto__ __proto__ __proto__ __proto__ __proto__ __proto__ __proto__ __proto__ __proto__ __proto__ __proto__ __proto__ __proto__
/********************************************************************************************************************************************/
//  What is __proto__?   //  It is a reference. But how? Objects are delegating to other objects

/**
 * E.g If you forgot ur pen and you went for exam, what you will do, you will ask Pen to your friend but he doesn't have extra pen but
 * he is your good friend, he can't say no to u then what he will do, he will ask pen to his friend and then that pen will come to u. That means {{ Delegation }}
 */

// let mobile = { company: 'OnePlus' };
// let myMobile = { name: 'OnePlus 7' }
// Object.setPrototypeOf(myMobile, mobile);    // Using this line of code we can use {{ myMobile.company }}
// console.log(myMobile.company);    // OnePlus 7  // but how to print {{ myMobile.company }} check above line Object.setPrototypeOf(myMobile, mobile)

// /**
//  * Till now it's perfectly fine but where is __proto__ ????????????
//  * As first line tells __proto__ is a refrence.
//  * So here myMobile is referencing to mobile.
//  */

// console.log(myMobile.__proto__); // { company: 'OnePlus' }

/***********************************************************************************************************/
/* Inheritance Inheritance Inheritance Inheritance Inheritance Inheritance Inheritance Inheritance Inheritance
/* prototype prototype prototype prototype prototype prototype prototype prototype prototype prototype prototype
/***********************************************************************************************************/

/** Inheritance in Javascript **/

/**
 * What is prototype? We can add new propertities to a function using prototype.
 * We only use prototype on functions.
 * We can access propertities of base class into sub class but, we can not access sub class propertites in base class;
 * Prototyping top to bottom not allowed
 * Prototyping bottom to top allowed.
 */

/** Class can not be inherit
  * Class prototype can inherit
  */

/******************* Best Inheritance Example ******************************/
/***************************************************************************/


function Employee(name, salary, exp) {
  this.name = name;
  this.salary = salary;
  this.exp = exp;
}
Employee.prototype.slogan = function () {
  return `My conpany is best. Regards ${this.name}`
}

// // var harry = new Employee('Harry',1000,4);
// // console.log(harry.slogan())                             // My conpany is best. Regards Harry

// function Programmer(name, salary, exp, language) {
//   Employee.call(this, name, salary, exp);                  // VIMP Line
//   this.language = language;
// }

// Programmer.prototype = Employee.prototype                

// let programmerInfo = new Programmer('Rohit', 80, 8, 'JavaScript');
// console.log(programmerInfo.slogan())                                // TypeError: p.slogan is not a function 

// How to access slogan method? 
// add one line before object creation {Programmer.prototype = Employee.prototype}

/***********************************************************************************************************/
/***********************************************************************************************************/

/**
 * Need to access all basic propertities of Mobile into Oneplus and Vivo.
 */

/**
 * This lines are more important
 * Mobile.call(this); Calling to his parent constructor and initialize the propertities.
 * Mobile.call(this); We can access all propertities of Mobile except protyping propertities.
 * Oneplus.prototype = Object.create(Mobile.prototype); // We can access all protyping propertities propertities of Mobile except inside propertites.
 * When you want to use both propertites then we need to add both lines.
 */

// function Mobile() {
//   this.os = 'Android';
// }
// Mobile.prototype.processor = 'Snapdragon'; // adding processor property into Mobile and accessing like (m.processor)
// /**
//  * Mobile have OS and Processor
//  * Need to access OS and Processor into Oneplus, Vivo.
//  */

// function Oneplus() {
//   Mobile.call(this);
//   /**
//    *  Mobile.call(this);  We can access Mobile Propertities using this line but which ever
//    *  propertites are present only those we can access
//    *  We can not access processor property because we added this property using (Mobile.prototype.processor) externally. (Mobile.prototype.processor = 'snapdragon').
//    */
//   this.camera = 60 + ' MP';
//   Oneplus.prototype.title = 'Never Settle';
//   Oneplus.prototype.modal = 'Never Settle 7';
// }

/** Question:- How to access all Mobile propertities in OnePlus ? **/
// To access Mobile propertities in Oneplus we need to inherit Mobile

// Using below line of code we can achieve inheritance.
// Oneplus.prototype = Object.create(Mobile.prototype);


// var op = new Oneplus();
// console.log("Oneplus __proto__: " + JSON.stringify(op.__proto__));  //Oneplus __proto__: {"title":"Never Settle","modal":"Never Settle 7"}
// console.log("============================");
// console.log("Oneplus Camera: " + op.camera);
// console.log("Oneplus Title: " + op.title);
// console.log("Oneplus OS: " + op.os);
// console.log("Oneplus Processor: " + op.processor);

// function Vivo() {
//     this.camera = 20 + ' MP';
//     Mobile.call(this);
// }

// Vivo.prototype = Object.create(Mobile.prototype);
// var v = new Vivo();
// console.log("============================");
// console.log("Vivo Camera: " + v.camera);
// console.log("Vivo OS: " + v.os);
// console.log("Vivo Processor: " + v.processor);
// console.log("============================");


/**
 * Consider Oneplus7 is child of Oneplus
 */
// function Oneplus7() {
//     this.camera = 40 + ' MP';
//     this.oneplus7Camera = 40 + ' MP';
//     Oneplus.call(this);
// }
// Oneplus7.prototype = Object.create(Oneplus.prototype);
// var oneplus7 = new Oneplus7();
// console.log("Oneplus 7 Camera : " + oneplus7.camera); // Oneplus 7 Camera: 60 MP because parent class have same property.
// console.log("Oneplus 7 Camera: " + oneplus7.oneplus7Camera); // Oneplus 7 Camera: 40 MP
// console.log("Oneplus 7 Title: " + oneplus7.title);
// console.log("Oneplus 7 OS: " + oneplus7.os);
// console.log("Oneplus 7 Processor: " + oneplus7.processor);
// console.log("============================");
/**************************************************************************************************************************/
/**************************************************************************************************************************/

/** Inheritance Problem */
/**
 * Sub class needs just 5 propertites.
 * Consider the base class have 1000 of propertites and functions and we acquired all of them in sub class
 * But sub class needs just 5 propertites then it's a waste of memory right?
 */

/**
 * Answer: To avoid this we use javascript composition using Object.assign({}, eating, walking, talking);
 * What ever functionality need that only will provide.
 */

// var eating = {
//     eat: function () {
//         console.log("I can eat");
//     }
// }
// var walking = {
//     walk: function () {
//         console.log("I can walk");
//     }
// }
// var talking = {
//     talk: function () {
//         console.log("I can talk");
//     }
// }

// var rohit = Object.assign({}, eating, walking, talking);
// rohit.eat();
// rohit.walk();
// rohit.talk();

// var robot = Object.assign({}, walking, talking);
// robot.eat(); // error robot.eat is not a function
// robot.walk();
// robot.talk();


/***********************************************************************************************************/
/* Prototype Chaining Prototype Chaining Prototype Chaining Prototype Chaining Prototype Chaining Prototype Chaining Prototype Chaining
/* Prototype Chaining Prototype Chaining Prototype Chaining Prototype Chaining Prototype Chaining Prototype Chaining Prototype Chaining
/* Prototype Chaining Prototype Chaining Prototype Chaining Prototype Chaining Prototype Chaining Prototype Chaining Prototype Chaining
/***********************************************************************************************************/

/**
 * Each object has a private property which holds a link to another object called its prototype.
 * That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.
 * By definition, null has no prototype, and acts as the final link in this prototype chain.
 * All javascript objects are instance of Object which sits on the top of a prototype chain.
 */


/***********************************************************************************************************/
/* Prototype Chaining Prototype Chaining Prototype Chaining Prototype Chaining Prototype Chaining Prototype Chaining Prototype Chaining
/* Prototype Chaining Prototype Chaining Prototype Chaining Prototype Chaining Prototype Chaining Prototype Chaining Prototype Chaining
/* Prototype Chaining Prototype Chaining Prototype Chaining Prototype Chaining Prototype Chaining Prototype Chaining Prototype Chaining
/***********************************************************************************************************/



/**************************************************************************************************************************/
/* FactoryFunction FactoryFunction FactoryFunction FactoryFunction FactoryFunction FactoryFunction FactoryFunction
/**************************************************************************************************************************/
/**
 * Factory Function: When a function returns an object, we call it a factory function.
 * It can produce object instance without new keyword or classes.
 */
// function Mobile() {
//     return {
//         model: 'OnePlus',
//         price: function () {
//             return ('Price: Rs. 35,000');
//         }
//     }
// }
// var onePlus = Mobile();
// console.log(onePlus.model); // OnePlus
// console.log(onePlus.price()); // Price: Rs. 35,000


/***********************************************************************************************************/
/* IIFE IIFE IIFE IIFE IIFE IIFE IIFE IIFE IIFE IIFE IIFE IIFE IIFE IIFE IIFE IIFE IIFE  IIFE IIFE IIFE  IIFE
/***********************************************************************************************************/

/**
 * IIFE: - Immediately Invoked Function Expression
 * Immediately Invoked Function Expression (IIFE) is a javascript function that runs as soon as it is declared.
 */
/**
 * Its devide into two major parts
 * 1. anonymous function with the Grouping Opeator ();
 * 2. immediately executing function expression(), through which javascript engine will directly interpret the function.
 */

/**
 * Step 1: ()();
 * Step 2: (function(){console.log("ROHIT");})();
 */
// (function () { console.log("ROHIT"); })();  // without arrow operator.
// (() => { console.log("ROHIT"); })();    // with arrow operator also we can write.

/**
 * Parameterized IIFE
 */

// (function (a, b) {
//     console.log(a + b);
// })(10, 20);  // 30

// (function (a, b) { console.log(a + b); })(10, 20); // 30

/***********************************************************************************************************/
/***********************************************************************************************************/
// function a() {
//   var arr = [1, 2, 3];
//   for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
//   console.log("Hello", i);    // Hello 3

//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
//   console.log("Hello", i);    // i is not defined 
// }
// a();
/***********************************************************************************************************/
/***********************************************************************************************************/
// function a() {
//   var a = 10;
//   function b() {
//     console.log(this.a);    // undefined
//   }
//   b();
// }
// a();
/***********************************************************************************************************/
/* Closure multiplication of two number  Closure multiplication of two number   Closure multiplication of two number   Closure multiplication of two number
/* What is Closure?
/* Ans:-  Any function where you using variable from outside the scope are actually closures.
          Closures means function with preserve data.

          REAL Example:

          Hiding variables is a valuable usage of closure.
          Compared to some other languages variables can't be declared as private, public, etc. in JavaScript,
          but using closure you can hide variables that can only be used internally

/*************************
  function Car() {
  var speed = 0;

  return {
      accelerate: function() {
        speed++;
      }
  }
  }

  var car = new Car();
  car.accelerate();
/*************************
 *
/***********************************************************************************************************/

// var outerVariable = 5;

// var addTo = function () {
//   var innerVariable = 5;
//   return outerVariable + innerVariable;            //Any function where you using variable from outside the scope are actually closures.
// }

// console.log(addTo()); //10
// console.dir(addTo);
/**
 * console.dir(addTo);  check the output on Chrome
 * <function scope>
 * Closure                          // this means outerVariable came into addTo function using closure because of laxical scope.
 *    outerVariable: 5;
 * Global: Window
 */


// var addTo = function (passed) {
//   var add = function (inner) {
//     return passed + inner;
//   }
//   return add;
// }
// var addThree = addTo(3);
// var addFour = addTo(4);

// console.log(addThree(1));  // 4
// console.log(addFour(1));   // 5    /* This means you can create n no. of functions you can create addTen(1) addHundred(1) etc. */     

/**
 * It's preserve the variable inside the function as property closure.
 * And when we execute addThree(1) it uses that closure to do the calculations.
 * Closures means function with preserve data.
/*



///////////////////////////////////////
var obj = function(){
  let i = 0;
return {
    setI: function(k){
        return i = k;
    },
    getI: function(){
        return i;
    }
}
};
let y = obj();
y.setI(5);
console.log(y.getI()); // 5
console.log(y);         // below output where you can find closure.

///////////////////////////////////////


OUTPUT
/*
{setI: ƒ, getI: ƒ}

getI: ƒ ()
arguments: null
caller: null
length: 0
name: "getI"
prototype: {constructor: ƒ}
__proto__: ƒ ()
[[FunctionLocation]]: VM1145:7
[[Scopes]]: Scopes[3]
0: Closure (obj)
i: 5
1: Script {animations: {…}, customize: {…}, ntpApiHandle: {…}, doodles: {…}, iframesAndVoiceSearchDisabledForTesting: false, …}
2: Global {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}


setI: ƒ (k)
arguments: null
caller: null
length: 1
name: "setI"
prototype: {constructor: ƒ}
__proto__: ƒ ()
[[FunctionLocation]]: VM1145:4
[[Scopes]]: Scopes[3]
0: Closure (obj)
i: 5
1: Script {animations: {…}, customize: {…}, ntpApiHandle: {…}, doodles: {…}, iframesAndVoiceSearchDisabledForTesting: false, …}
2: Global {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
__proto__: Object

*/




/***********************************************************************************************************/
/* Nested Function
/***********************************************************************************************************/


// function getMultiplier(multiplyBy) {
//   function multiply(num) {
//     return multiplyBy * num;
//   }

//   return multiply;
// }

// var multiplyByTwo = getMultiplier(2);
// var twoIntoFive = multiplyByTwo(5);

// console.log(twoIntoFive); // 10

/***********************************************************************************************************/
/***********************************************************************************************************/
// let count = 0;
// for (let i = 0; i < 3; i++) {
//   count++
//   console.log("Outside", i, count);
//   setTimeout(function () {
//     console.log("Inside", i, count);
//   }, 1000)
// }


/***********************************************************************************************************/
/***********************************************************************************************************/
// var x = false;
// console.log(x - 1);

// var x = true;
// console.log(x + 1);

/***********************************************************************************************************/
/* SUM of digits SUM of digits SUM of digits SUM of digits SUM of digits
/***********************************************************************************************************/

// var value = 123, sum = 0;
// while (value) {
//   a = value % 10;
//   temp = value / 10;
//   console.log("Reverse Value:", a);

//   sum += value % 10;
//   value = parseInt(value / 10);
// }

// console.log("Sum is:", sum);


/***********************************************************************************************************/
/* String Reverse without reverse() in one line
/***********************************************************************************************************/

// console.log('Rohit'.split('').reduce((state, value) => { return value + state; }))

// var reverse = 'Rohit'.split('').reduce((previousValue, currentValue, currentIndex, array) => {
//   console.log("previousValue:", previousValue);
//   console.log("currentValue:", currentValue);
//   console.log("currentIndex:", currentIndex);
//   console.log("array:", array);
//   return previousValue + currentValue;
// })

// console.log(reverse);
// 

// let strRev = 'Rohit'.split('').reduce((a, b, c, d) => { return c });
// console.log(strRev);


// const str = "javaScript love i";
// const reverse = str.split(' ').reverse().join(' ')
// console.log(reverse);                                    // i love javaScript

/***********************************************************************************************************/
/* Turnary Twisters Turnary Twisters Turnary Twisters Turnary Twisters Turnary Twisters
/***********************************************************************************************************/

// console.log(3 != 3 ? 0 ? 3 : 6 : 3); // 3
// console.log(3 != 3 ? 0 ? 6 : 3 : 6); // 6
// console.log(3 != 6 ? 0 ? 6 : 3 : 6); // 3

// console.log(2 - "rohit");    // NaN
// console.log(2 - "12");    // -10

// let num = [1, 2, 2, 3];         //[1,2,3]
// console.log([...new Set(num)]);

// console.log(5 < 6 < 7); // => (true < 7) => (1 < 7) // true
// console.log(7 > 6 > 5); // => (true > 5) => (1 > 7) // false

// console.log(Math.max());    // -Infinity
// console.log(Math.min());    // Infinity



/***********************************************************************************************************/
/***********************************************************************************************************/
/************** Object.create ** Object.create ** Object.create ** Object.create ** Object.create ** Object.create ********************************
/***********************************************************************************************************/

// const person = {
//   isHuman: false,
//   printIntroduction: function () {
//     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//   }
// };

// const me = Object.create(person);

// me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
// me.isHuman = true; // inherited properties can be overwritten

// me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"


/***********************************************************************************************************/
/************** Object.seal ** Object.freeze ** Object.seal ** Object.freeze ** Object.seal ** Object.freeze ********************************
/***********************************************************************************************************/

// let person = {
//   name: 'Rohit'
// }
// Object.seal(person);          // { name: 'Harshal' }
// person['name'] = "Harshal";
// person['age'] = 22;


// Object.freeze(person);           // { name: 'Rohit' }
// person['name'] = "Neha";
// person['age'] = 26;

// console.log(person);


/***********************************************************************************************************/
/* *VVVIMP* *VVVIMP* *VVVIMP* How to modify few propertities from Object & restrict to modify few propertities *VVVIMP* *VVVIMP* *VVVIMP* *VVVIMP*
/***********************************************************************************************************/
/**
 * I Want to modify {name} property but I don't want to modify {age} property. How to do this?
 */

//Initial Object
// let person = {
//   name: 'Rohit',
//   age: 26
// }

//Ans: 
// let person = {
//   name: 'Rohit'
// }
// Object.defineProperty(person, 'age', {
//   value: 26,
//   writable: false
// })

// person.name = "Harshal";
// person.age = 10;

// console.log(person) // { name: 'Harshal', age: 26 }   if writable true { name: 'Harshal', age: 10 }

/***********************************************************************************************************/
/*IMPORTANT*/
/***********************************************************************************************************/
/** ** Conversion of Object values into Array ** ** Conversion of Object values into Array ** ** Conversion of Object values into Array ** */
/***********************************************************************************************************/

// let x = {
//   a: 1,
//   b: 2
// }
// console.log(Object.values(x));    // [1, 2]


/***********************************************************************************************************/
/*IMPORTANT*/  /*IMPORTANT*/  /*IMPORTANT*/  /*IMPORTANT*/  /*IMPORTANT*/ /*IMPORTANT*/ /*IMPORTANT*/ /*IMPORTANT*/ /*IMPORTANT*/
/***********************************************************************************************************/
/** Calling Methods of Objects ** Calling Methods of Objects  ** Calling Methods of Objects  ** Calling Methods of Objects
/***********************************************************************************************************/

// const obj = {
//   a: 1,
//   b: 2,
//   getA() {
//     console.log(this.a);
//     return this;                 // to call method().method() we need to {return entire object}.
//   },
//   getB() {
//     console.log(this.b);
//   }
// }
// obj.getA().getB();             // This type of calling we can achieve using {return this}.



/*********************************************** Level 7 Tough Questions ************************************************************/
/*********************************************** Level 7 Tough Questions ************************************************************/
/**
 * Que.1
 */
/***********************************************************************************************************/
/* Print function should print 1, 2   ** Print function should print 1, 2 ** Print function should print 1, 2 **
/***********************************************************************************************************/
// Question: 
// [1, 2].print();   // 1,2

// Ans:

/**
 * Que.2
 */
/***********************************************************************************************************/
/* Inheritance Interview Question ** Inheritance Interview Question ** Inheritance Interview Question ** Inheritance Interview Question
/***********************************************************************************************************/
// const a = function (x) {
//   this.x = x;
// }
// const b = function (x, y) {
//   this.y = y;
// }

// const newB = new b('x', 'y');
// newB.getX();   // x
// newB.getY();   // y

// Ans:
/***********************************************************************************************************/
/***********************************************************************************************************/

/**
 * Clonning Clonning Clonning Clonning Clonning Clonning Clonning Clonning Clonning Clonning Clonning Clonning
 * Clonning Clonning Clonning Clonning Clonning Clonning Clonning Clonning Clonning Clonning Clonning Clonning
 * Clonning Clonning Clonning Clonning Clonning Clonning Clonning Clonning Clonning Clonning Clonning Clonning
 *
 * Easiest way to deep clone Array or Object:             var dupArray = [...arr] & {...obj} using sprade operator
 *
 *
 * //IMPORTANT
 *
 ****  Shallow Copy will share same memory address ( Same Changes happens in both objects )
 *
 ****  Deep Copy will share different memory address ( Same Changes will not happens in both objects )
 *
 *
 *
 * Deep Copy / Clone:
 *  * Deep Copy     best way is:-  [...arr] or {...obj} using sprade operator
 *
 *    Deep Copy will share different memory address
 *    A deep copy will duplicate every object it encounters.
 *    The copy and the original object {will not share {memory address}}, so it will be a copy of the original
 *
 * NOTE: Using {JSON.parse(JSON.stringify(obj)} also we can achieve Deep Clonning
 *       But the disadvantage is it will not work when object have {functions} inside, It will give an error
 *
 *
 * Shallow Copy / Clone:   best way is:-   Object.assign({}, obj);
 *
 *    Shallow Copy will share same memory address
 *    The copy and the original object will share same memory address.
 *    If the source value is a reference to an object, it only copies that reference value to the target object
 *    The copy and the original object will share anything.
 *
/

/*** BEST Example */
/*** BEST Example */

// var obj1= {
//   name: 'rohit',
//   lastname: 'patil',
//   age: 22
// }

// // var obj2 = obj1; // Shallow copy {roy roy} will come into both obj
// var obj2 = {...obj1}; // Deep copy {rohit roy} will come in obj
// obj2.name = 'roy'
// console.log(obj1)
// console.log(obj2)

/*** BEST Example */
/*** BEST Example */


/***********************************************************************************************************/

/**
 * Shallow Copy Example
 */
// let obj = {
//   a: 1,
//   b: 2,
// };
// let objCopy = Object.assign({}, obj);
// console.log(objCopy);
/***********************************************************************************************************/

/**
 * Deep Copy Example
 */

// let obj = {
//   a: 1,
//   b: 2,
// };
// let objCopy = JSON.parse(JSON.stringify(obj));       //{WORK}
// console.log(objCopy);

/***********************************************************************************************************/

// const obj = {
//   x: 1,
//   getX: function () {
//     return this.x;
//   }
// }
// const objCopy = JSON.parse(JSON.stringify(obj));                       
// objCopy.x = 2;
// console.log(objCopy.getX());                         //{ERROR}   because object have function inside.

/***********************************************************************************************************/
/***********************************************************************************************************/

/**
 *  Copy of Array
 */
// const arr = [1, 3, 5];

// var newArray = [...arr];               // Deep copy {High Performance}           

// No of ways. available
// Deep copy {Low Performance}
// var newArray = arr.slice();             
// var newArray = arr.concat();
// var newArray = arr.splice(0);
// var newArray = JSON.parse(JSON.stringify(arr));   

// console.log(newArray);
/***********************************************************************************************************/

/**
 *  Copy of Object
 */

// let obj = {
//   a: 1,
//   b: 2,
// };
// let objCopy = { ...obj };
// console.log(objCopy);

//OR

// const obj = {
//   a: {
//     b: {
//       c: 1
//     }
//   }
// }
// const clone = obj;     // this would have reference so it will change the value of both object.
// const clone = JSON.parse(JSON.stringify(obj));   //deep cloning // it will change the value // this would not have reference. Converting object into normal string  using JSON.stringify()
// clone.a.b.c = 2;
// console.log(clone.a.b.c);    // 2
// console.log(obj.a.b.c);      // 1


/***********************************************************************************************************/
/***********************************************************************************************************/
/** Merge two array with sorted order  *Merge two array with sorted order *Merge two array with sorted order *Merge two array with sorted order */
/***********************************************************************************************************/
// const a = [1, 2, 5, 7, 9];
// const b = [2, 5, 7, 12, 100];
// /**
// * Merge this two array & output should be
// * [1, 2, 2, 5, 5, 7, 7, 9, 12, 100]
// */
// const c = [...a, ...b]; or a.concat(b)  // Arrays are merged but not in sorted format [ 1, 2, 5, 7, 9, 2, 5, 7, 12, 100 ]
// console.log(c.sort((a, b) => a - b));  // [1, 2, 2, 5, 5, 7, 7, 9, 12, 100]
// console.log(c.sort((a, b) => a + b));  // [ 100, 12, 7, 5, 2, 9, 7, 5, 2, 1 ]

/*  Or  in one line*/
// console.log(a.concat(b).sort((a, b) => a - b));


/***********************************************************************************************************/
/***********************************************************************************************************/
/** How to get value of x in inner function  * How to get value of x in inner function * How to get value of x in inner function * How to get value of x in inner function*/
/***********************************************************************************************************/

// const obj = {
//   x: 1,
//   getX() {
//     const inner = function () {
//       console.log(this.x);            // undefined
//     }
//     inner();
//   }
// }
// obj.getX();


// /**
//  * How to get value of x in same senario & the ans is need to { .bind(this) }       AND

//     const inner = function () {        
//       console.log(this.x);            // 1
//     }.bind(this)                      // using bind this
//     inner(); 

//     const inner = () => {             // using arrow function
//       console.log(this.x);            // 1
//     }
//     inner();

//     const that = this;                // because of lexical scoping
//     const inner = function () {
//       console.log(that.x);            // 1
//     }
//     inner();

//     const inner = function () {        
//       console.log(this.x);            // 1
//     }                      
//     inner.call(this);                 // using call method

//  */

/***********************************************************************************************************/
/***********************************************************************************************************/
/** Sum of array Sum of array Sum of array Sum of array Sum of array Sum of array Sum of array Sum of array Sum of array  */
/***********************************************************************************************************/

// let arr = [1, 2, 5, 7];
// const result = arr.reduce((a, b) => { return a + b });
// console.log(result);

/***********************************************************************************************************/
/***********************************************************************************************************/
/** Find missing number from unsorted array * Find missing number from unsorted array *  Find missing number from unsorted array * Find missing number from unsorted array
/***********************************************************************************************************/

// const arr = [1 - 100]     // 1 number is missing it could be anything 5, 7, or anything
// var mostRecent = 1;
// function findMissingNumber(arr) {
//   const arr2 = arr.sort((a, b) => { a - b })
//   for (let i = 1; i < arr2.length; i++) {
//     if (arr2[i] !== i) {
//       return arr2[i]
//     } else {
//       mostRecent = arr[i];
//     }
//   }
//}

/***********************************************************************************************************/
/***********************************************************************************************************/
/* Remove one number & add all remaining & loop *Remove one number & add all remaining & loop *Remove one number & add all remaining & loop
/***********************************************************************************************************/

// function getMinMaxNumber() {
//   const arr = [1, 2, 3, 4];
//   const minMaxArr = [];
//   const total = arr.reduce((a, b) => { return a + b });
//   arr.forEach((value, key) => {
//     minMaxArr.push(total - value);
//   })
//   minMaxArr.sort((a, b) => a - b)
//   const minNum = minMaxArr[0];
//   const maxNum = minMaxArr[minMaxArr.length - 1];
//   console.log("Min Number:", minNum);
//   console.log("Max Numbers:", maxNum);
// }
// getMinMaxNumber();

//OR

// function getMinMaxNumber() {
//   console.time('test');
//   const arr = [6, 7, 2, 1];
//   let minNumber = Math.min.apply(null, arr);
//   let maxNumber = Math.max.apply(null, arr);
//   let arrSum = arr.reduce((a, b) => a + b);
//   let minSum = arrSum - minNumber;
//   let maxSum = arrSum - maxNumber;

//   console.log("Min:", maxSum);
//   console.log("Max:", minSum);
//   console.timeEnd('test');
// }
// getMinMaxNumber();


/***********************************************************************************************************/
/***********************************************************************************************************/
/* How to calculate length of number without converting into string *How to calculate length of number without converting into string *How to calculate length of number without converting into string *How to calculate length of number without converting into string
/***********************************************************************************************************/

// let num = 12346;
// length = 0;
// if (num == 0) {
//   length = 1;
// } else {
//   while (num >= 1) {
//     num = num / 10;
//     result = num % 10;
//     length++;
//   }
// }
// console.log(length);

//OR

// console.log((num + "").length);          // this is the answer but we have converted number into string


/***********************************************************************************************************/
/***********************************************************************************************************/
/* Console Programs  */ /* Console Programs  */ /* Console Programs  */ /* Console Programs  */ /* Console Programs  */
/* Console Programs  */ /* Console Programs  */ /* Console Programs  */ /* Console Programs  */ /* Console Programs  */
/* Console Programs  */ /* Console Programs  */ /* Console Programs  */ /* Console Programs  */ /* Console Programs  */
/***********************************************************************************************************/

// const profile = {
//   name: 'Rohit',
//   getName: () => {
//     console.log(this.name);        // undefined because this is arrow function & arrow doesn't have his own {this}
//   }
// }
// profile.getName();

// // Ans:
// getName: function () {          // Using Normal Function we can access {this}
//   console.log(this.name);       // Rohit
// }

/***********************************************************************************************************/
/***********************************************************************************************************/
/** Count of Maximum Numbers from array **   ** Count of Maximum Numbers from array **    ** Count of Maximum Numbers from array **
/***********************************************************************************************************/
// var arr = [1, 200, 2, 4, 2, 4, 9, 10, 100, 100, 200, 200, 40];      // 200 is max & total 3 

// var maxNumber = Math.max.apply(null, arr);
// count = 0;
// let ans = arr.reduce((prevValue, currValue, currIndex, arr) => {
//   if (currValue == maxNumber) {
//     count++;
//   }
//   return count;
// })
// console.log("Count:", ans);                  //Count: 3

// OR

// var maxNumber = Math.max.apply(null, arr);
// count = 0;
// arr.forEach(value => {
//   if (maxNumber == value) {
//     count++;
//   }
// })
// console.log("Count:", count);                   //Count: 3


/***********************************************************************************************************/
/* SetTimeout in for Loop   * SetTimeout in for Loop *  * SetTimeout in for Loop *  * SetTimeout in for Loop *  * SetTimeout in for Loop *
/***********************************************************************************************************/
// const arr = [5, 120, 15, 21];
// for (let i = 0; i < arr.length; i++) {
//   setTimeout(() => {
//     console.log(`Index: ${i}, element: ${arr[i]}`);
//   }, arr[i])
// } 

// output:
// Index: 0, element: 5
// Index: 2, element: 15
// Index: 3, element: 21
// Index: 1, element: 120

/***********************************************************************************************************/
/** Tricky & weirdest questions  * Tricky & weirdest questions *  * Tricky & weirdest questions * * Tricky & weirdest questions *
 *  * Tricky & weirdest questions * * Tricky & weirdest questions * * Tricky & weirdest questions * * Tricky & weirdest questions *
 *  * Tricky & weirdest questions * * Tricky & weirdest questions * * Tricky & weirdest questions * * Tricky & weirdest questions *
/***********************************************************************************************************/
/***********************************************************************************************************/


// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 100)
// }                                                 // 55555

/***********************************************************************************************************/


// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 100)                                        // 012345
// }


/***********************************************************************************************************/

// let arr = ["Rohit", "Sanjay", "Patil"];
// delete arr[1];
// console.log(arr.length)          // 3
/***********************************************************************************************************/
/**
 * Find how many times online word came into an string
 */
// const str = 'This is online editor this is online editor';
// const arr = str.split(' ');
// console.log(arr.filter((value) => { return value == 'online'; }).length);


/**
 * Find how many times character came into an string
 */

// const str = 'This is online editor this is online editor';
// const arr = str.split('');
// console.log(arr.filter((value) => { return value == 'e'; }).length);

/***********************************************************************************************************/
// console.log(0.1 + 1 - 1);          // 0.10000000000000009
// console.log(NaN + NaN);            // NaN
// console.log(NaN === NaN);          // false
// console.log(NaN == NaN);           // false
// console.log(NaN == Number);        // false
// console.log(undefined == undefined);   // true
// console.log(-"1" + 2 + 3);        //4
// console.log(* "2" + 2 + 3);      // Error
// console.log(/"2" + 2 + 3);      // Runtime Error
// console.log(true + 0);       // 1
// console.log(true + 'xyz');   //truexyz
// console.log([] + []);        //nothing will print  Every empty array is equal to empty string
// console.log({} + {});        //[object Object][object Object]
// console.log({} + []);        //[object Object]
// console.log(0.1 + 0.2);      //0.30000000000000004
// console.log(0.1 + 0.1);      //0.2
// console.log(0.1 + 0.4);      //0.5
// var obj = {};
// var obj2 = {};
// console.log(obj == obj2);       //false
// console.log(obj === obj2);      //false

// var obj = {};
// var obj2 = obj;
// console.log(obj == obj2);         //true
// console.log(obj === obj2);        //true

// console.log(escape("Hello? How are you"));  //Hello%3F%20How%20are%20you

/***********************************************************************************************************/
/***********************************************************************************************************/


// const x = [1, 2, 3, 100, 99];
// x[-1] = -1;
// console.log(x[x.indexOf(1000)]);     // -1

/***********************************************************************************************************/
/***********************************************************************************************************/

// let x = [1, 2, 3] + [4 + 5 + 6];
// console.log(x);                       // 1,2,315


// let x = [1, 2, 3] + [4, 5, 6]
// console.log(x);                     // 1,2,34,5,6

// let x = [...[1, 2, 3], ...[4, 5, 6]]
// console.log(x);                     // 1,2,3,4,5,6

// let x = String([...[1, 2, 3], ...[4, 5, 6]])
// console.log(x);                     // "1,2,3,4,5,6"

// let y = "" + 1 + 1;
// console.log(y);           //11

// let z = [] + 1 + 1;
// console.log(z);           //11

// let zz = {} + 1 + 1;
// console.log(zz);           //[object Object]11
//*****************************************************************************************************************************************/
//*****************************************************************************************************************************************/
//*****************************************************************************************************************************************/

// var y = 1;
// if (function f() { }) {
//   y += typeof f;
// }
// console.log(y);   //1undefined

// console.log(mul(2)(3)(4)); //mul is not defined

// 4 ways to empty an Array

// var a = ['a', 'b', 'c']
// 1. a = [];
// 2. a.length = 0;
// 3. a.splice(0, a.length);
// 4. while (a.length > 0) {
//   a.pop();
// }

// var output = (function (x) {
//   delete x;
//   return x;
// })(0);
// console.log(output);   // 0


// var Employee = {
//   company: 'xyz'
// }
// var emp1 = Object.create(Employee);
// delete Employee.company  //undefined
// delete emp1.company      //xyz
// console.log(emp1.company);   

// const Info = {
//   name: 'rohit'
// }

// delete Info.name
// console.log(Info.name)    //undefined

// var trees = ["xyz", "xxxx", "test", "ryan", "apple"];
// delete trees[3];
// console.log(trees);             //[ 'xyz', 'xxxx', 'test', <1 empty item>, 'apple' ]
// console.log(trees.length);      //5


// var bar = true;
// console.log(bar + 0);
// console.log(bar + "xyz");
// console.log(bar + true);
// console.log(bar + false);
//1, truexyz, 2, 1

// var foo = function bar() { return 12; };
// console.log(typeof bar());   //bar is not defined


/***********************************************************************************************************/
/***********************************************************************************************************/

// (function () {
//   let a = b = 100;
// })();
// console.log(a);               // a is not defined
// console.log(b);


// (function () {
//   let a = b = 100;
// })();
// console.log(b);               // 100   because b is not declare as let. so here b has global scope.
// console.log(a);               // a is not defined

/***********************************************************************************************************/
/************* MAX Number limit *************** MAX Number limit ********** MAX Number limit ***************************/

/**
 * Javascript have Number.MAX_SAFE_INTEGER value which is 9007199254740991.
 * Any number u entered should not bigger than this.
 * 16 digit is the final limit if number limit crossed it will put 0 afterwards.
 */
// console.log(555555555555555555);        //  555555555555555600
// console.log(Number.MAX_SAFE_INTEGER);     //9007199254740991  

/***********************************************************************************************************/
/***********************************************************************************************************/

// const arr = [1, 2, 15, 14, 5, 45, 7];
// arr.sort();
// console.log(arr);

/***********************************************************************************************************/
/***********************************************************************************************************/

// for (var i = 0; i < 10; i++) {
//   // console.log(i);
// }
// console.log(i);                         // 10


// for (let i = 0; i < 10; i++) {
//   // console.log(i);
// }
// console.log(i);                        // ReferenceError: i is not defined

/***********************************************************************************************************/
/***********************************************************************************************************/

// function a() {
//   return 'hello';
// }
// const temp = a`hi`;       //similar to const temp = a(`hi`);
// console.log(temp);        //hello


// function a(y) {
//   return y;
// }
// const temp1 = a`hi`;       //similar to const temp = a(`hi`);
// console.log(temp1);        // [ 'hi' ]

/***********************************************************************************************************/
/***********************************************************************************************************/

// function y() {
//   console.log(this.length);    //here {this} keyword is nothing but [Arguments] { '0': [Function: y], '1': 1 }  array of objects
// }

// var x = {
//   length: 5,                        // length variable is not releated to the above {this.length}
//   method: function (y) {
//     arguments[0]();
//   }
// }
// x.method(y, 1);           // 2

/***********************************************************************************************************/
/***********************************************************************************************************/

// const x = "constructor";
// console.log(x[2]);      // n
// console.log(x[x]);      // [Function: String]
// console.log(x[x](1));      //1 
// console.log(x[x](99));      //99 
// console.log(x[x](01));      //1 


/***********************************************************************************************************/
/***********************************************************************************************************/
// var a;
// function x() {
//   a = 1;
// }
// x();
// console.log(this.a);            // undefined
// console.log(a);            // 1


/***********************************************************************************************************/
/***********************************************************************************************************/

// console.log(("Hi").__proto__);    //[String: '']   // es line ka meaning "Hi" kaha se create kiya hai so ans is String objects
// console.log(("Hi").__proto__.__proto__);  // { }    // String object kaha se create kiya hai so ans is Object. This is JS main Object. 
// console.log(("Hi").__proto__.__proto__.__proto__);    //null       JS ka main object kaha se create kiya hai so ans is null.
// console.log(("Hi").__proto__.__proto__.__proto__.__proto__); // Cannot read property '__proto__' of null

/***********************************************************************************************************/
/*  How to find arguments length without using for loop.
/***********************************************************************************************************/

// x(1, 2, 3, 4);   //output should be 4
// x(1, 2, 3, 4, 5, 6, 7, 9);   //output should be 8


// ans:

// let x = function () {
//   console.log(arguments);       //[Arguments] { '0': 1, '1': 2, '2': 3 }
//   console.log(arguments.length);  // 7
// }

// x(1, 2, 3, 4, 5, 6, 7);


/***********************************************************************************************************/
/* Method Currying  * Method Currying *  * Method Currying *  * Method Currying *  * Method Currying *  * Method Currying *  * Method Currying *
 * Method Currying *  * Method Currying *  * Method Currying *  * Method Currying *  * Method Currying *  * Method Currying *
  * Method Currying *  * Method Currying *  * Method Currying *  * Method Currying *  * Method Currying *  * Method Currying *
/***********************************************************************************************************/


// var methodCurrying = {
//   x: function () {
//     console.log('inside x');
//   },
//   y: function () {
//     console.log('inside y');
//   },
//   z: function () {
//     console.log('inside z');
//   }
// }
// methodCurrying.x().y().z();         //  Cannot read property 'y' of undefined


// // ans:


// var methodCurrying = {
//   x: function () {
//     console.log('inside x');
//     return this;   or  return methodCurrying;
//   },
//   y: function () {
//     console.log('inside y');
//     return this;   or  return methodCurrying;
//   },
//   z: function () {
//     console.log('inside z');
//     return this;   or  return methodCurrying;
//   }
// }
// methodCurrying.x().y().z();         //  inside x inside y inside z


/***********************************************************************************************************/
/* Scope Chaining  * Scope Chaining *  * Scope Chaining *  * Scope Chaining *  * Scope Chaining *  * Scope Chaining *  * Scope Chaining *
/* Scope Chaining  * Scope Chaining *  * Scope Chaining *  * Scope Chaining *  * Scope Chaining *  * Scope Chaining *  * Scope Chaining *
/* Scope Chaining  * Scope Chaining *  * Scope Chaining *  * Scope Chaining *  * Scope Chaining *  * Scope Chaining *  * Scope Chaining */

/**
 * It will check the values are present in his scope/function
 * if not then it will check his parent scope/function
 * id not then it will check global scope.
 */

// Scope Chaining Example

// var a = "Rohit";
// function firstFunction() {
//   var b = "Neha"
//   secondFunction();
//   function secondFunction() {
//     var c = "Harshal"
//     /**
//      * console.log(a+b+c)
//      * It will check if c is available in this scope or not
//      * If available then good if not then it will check into his parent function
//      */
//     console.log(a + ' ' + b + ' ' + c)
//   }
// }

// firstFunction();

/*********************************** ARRAY & OBJECT Destruction ************************************************************************/

/* Destruction * Destruction * Destruction * Destruction * Destruction * Destruction * Destruction * Destruction * Destruction * Destruction *
Destruction * Destruction * Destruction * Destruction * Destruction * Destruction * Destruction * Destruction * Destruction * Destruction *
Destruction * Destruction * Destruction * Destruction * Destruction * Destruction * Destruction * Destruction * Destruction * Destruction *

What is Destruction?
  Ans:  Destruction makes the assignment of the values of an array or object to the new variable easier.
        e.g let { name, age, address } = personalInfo;     // Object Destruction { personalInfo is object here }
            let [ red, green, blue ] = foo;                   // Array Destruction  { foo is array here }
/***********************************************************************************************************/

/**
 * In Real Life
 */

// function getCountryCodes() {              //In real life we do like this
//   return ['IND', 'USA']
// }

// let codes = getCountryCodes();
// console.log(codes[0]);
// console.log(codes[1]);
// OR
// console.log(getCountryCodes()[0]);   // But other developer will not able to easily find what exactly it is because we have not assigned proper variable to them.
// console.log(getCountryCodes()[1]);

/**
 * Using Destruction below code is possible for getCountryCodes()
 */

// function getCountryCodes() {                                        
//   return ['IND', 'USA']
// }
// let [India_Code, America_Code] = getCountryCodes();                       // Array Destruction
// console.log(India_Code);
// console.log(America_Code);


// function getCountryCodes() {
//   return { "India_Code": "IND", "America_Code": "USA" }
// }
// let { India_Code, America_Code } = getCountryCodes();                       // Object Destruction
// console.log(India_Code);
// console.log(America_Code);



// 1. Object Destruction

// const personalInfo = {
//   name: 'Rohit',
//   age: 28,
//   address: 'Street 68'
// }
// let name = personalInfo.name;
// let age = personalInfo.age;
// let address = personalInfo.address;

// console.log(name);
// console.log(age);
// console.log(address);

// Ans:

// const personalInfo = {
//   name: 'Rohit',
//   age: 28,
//   address: 'Street 68'
// }
// let { name, age, address } = personalInfo;                      // Object Destruction

// console.log(name);
// console.log(age);
// console.log(address);

/***********************************************************************************************************/

// 2. Array Destruction

// let foo = [1, 2, 3];
// let [red, green, blue] = foo;                                  // Array Destruction
// console.log(red);
// console.log(green);
// console.log(blue);

/**
 * Nested Destructring
 * Nested Destructring
 * Nested Destructring
 */

// const person = {
//   name: 'rohit',
//   age: 27,
//   contacts: [{
//       phoneNumber: '7888226600',
//       homeNumber: '07267223839'
//   }]
// }

// let {name:n, age:a, contacts: [{phoneNumber:pn, homeNumber:hn}]} = person;

// console.log(n)         // rohit
// console.log(a)         // 27
// console.log(pn)        // 7888226600
// console.log(hn)        // 07267223839


/******************************************* Multiline String ****************************************************************/
/******************************************* Multiline String ****************************************************************/
/******************************************* Multiline String *************************************************************/
/******************************************* Multiline String **********************************************************/

/**
 *  We can achieve this using
 *   + plus &
 *   ` back tick &
 *   \n\  backslash n backslash &
 *   array with join('\n')
 */

// console.log('string text line 1\n' +
//   'string text line 2');

// //OR

// console.log(`Hello
// World`);

// //OR


// var msg = 'Multiline \n\
// string';

// //OR  

// var msg = ['This text',
//   'can',
//   'span multiple lines'].join('\n');

// console.log(msg);

/***********************************************************************************************************/
/***********************************************************************************************************/
/***************************** Parameters in .map .reduce .filter & .sort ******************************/
/***************************** Parameters in .map .reduce .filter & .sort ******************************/
/***************************** Parameters in .map .reduce .filter & .sort ******************************/
/***************************** Parameters in .map .reduce .filter & .sort ******************************/

/**
 * .map required three parameters { currentValue(required), index(optional), arr(optional) }
 */


// const flowers = ["tulip", "rose", "liac", "India Paintbrush", "petunia"];
// const longFlowers = flowers.map(word => word.length > 6);
// console.log(longFlowers);                                   //[ false, false, false, true, true ]


// const arr = [1, 2, 3, 4];
// arr.map((currentValue, index, arr) => {
//   console.log(currentValue);
//   console.log(index);
//   console.log(arr);
// })

// getAllIDs
// const arr = [{'id': 1, "name": 'Rohit'}, {'id': 2, "name": 'Harshal'}]
// console.log(arr.map((res)=>{return res.id}))     // [1, 2]


/**
 * .reduce required four parameters { previousValue, currentValue, index, arr }
 */

// const arr = [10, 2, 3, 4];
// arr.reduce((previousValue, currentValue, index, arr) => {
//   // console.log(previousValue);      // initial value which is 10 here. 
//   // console.log(currentValue);       // starts from 1st index.
//   // console.log(index);
//   // console.log(arr);
// })

/**
 * .filter required three parameters { currentValue(required), index(optional), arr(optional) }
 */


// const flowers = ["tulip", "rose", "liac", "India Paintbrush", "petunia"];
// const longFlowers = flowers.filter(word => word.length > 6);
// console.log(longFlowers);                                             //[ 'India Paintbrush', 'petunia' ]

// const arr = [1, 2, 3, 4];
// arr.filter((currentValue, index, arr) => {
//   console.log(currentValue);
//   console.log(index);
//   console.log(arr);
// })


/**
 * .sort required two parameters { a(required), b(required) }
 * NOTE: arr.sort() will always takes only first value
 * e.g.  [1,2,15,14,5,45,7]       // we will think output is: 1,2,5,7,14,15,45   NO NO NO NO NO NO
 * the o/p of above is:   1,14,15,2,45,5,7
 * so always use below code.
 */

// const arr = [1, 2, 3, 4, 5, 6, 7];
// arr.sort((a, b) => {
//   console.log(a);            // 1, 2, 3, 4, 5, 6, 7
//   console.log(b);            // 2, 3, 4, 5, 6, 7
// })

/********************************  Splice vs Slice *********************************************************/
/********************************  Splice vs Slice *********************************************************/
/********************************  Splice vs Slice *********************************************************/

/**
 * Splice will return modified array      [ 1, 2 ]
 */

// var array = [1, 2, 3, 4, 5];
// console.log(array.splice(2));

// var array = [1, 2, 3, 4, 5]             // [1,2,3,4,6,7,5]

// array.splice(4, 0, 6, 7);
// console.log("Array", array);


/**
 * Slice will return original array       [ 1, 2, 3, 4, 5 ]
 */

// var array2 = [1, 2, 3, 4, 5]
// console.log(array2.slice(2));


// console.log("----after-----");
// console.log(array);
// console.log(array2);

/***********************************************************************************************************/
/***********************************************************************************************************/
/*** Wissen Test Wissen Test Wissen Test Wissen Test **************** Wissen Test Wissen Test Wissen Test Wissen Test *************************/

/***********************************************************************************************************/

// console.log('1' == 1, '1' === 1, Number('01') === 1);    // true false true

/***********************************************************************************************************/

// const a = {
//   o: 1
// }
// a.o = 2;
// console.log(a);            //  {o:2}
/***********************************************************************************************************/


// let x = 'outer';
// (function () {
//   console.log(x);
//   let x = "inner";         // x is undefined
// })();

/***********************************************************************************************************/

// function f() {
//   console.log(arguments.length);
// }
// f([1, 2]);                  // [Arguments] { '0': [ 1, 2 ] }        // arguments.length is 1
// f(1, 2);                    // [Arguments] { '0': 1, '1': 2 }       // arguments.length is 2
// f.apply(null, [1, 2]);      // [Arguments] { '0': 1, '1': 2 }       // arguments.length is 2
// f.call(null, 1, 2);         // [Arguments] { '0': 1, '1': 2 }       // arguments.length is 2

/***********************************************************************************************************/

// const counter = function (initialValue, stepValue) {
//   var c = initialValue || 0;
//   return function next() {
//     c = c + stepValue;
//     return c;
//   }
// }

// const c1 = counter(1, 1);
// console.log(c1(), c1(), c1());      //2 3 4

/***********************************************************************************************************/


// const counter = function (initialValue, stepValue) {
//   return {
//     val: initialValue,
//     next() {
//       this.val = this.val + stepValue;
//       return this.val;
//     }

//   }
// }

// const c = counter(0, 2);
// console.log(c.val, c.next(), c.val);            //0 2 2
/***********************************************************************************************************/


// var obj = {
//   val: 0,
//   inc() {
//     this.val++;
//     console.log(this.val)
//   }
// }

// var inc = obj.inc;
// inc();
// inc.call(obj);
// obj.inc();

// var obj2 = { val: 2 };
// var inc2 = inc.bind(obj2);
// inc2();                                       //NaN 1 2 3

/***********************************************************************************************************/


// function A(id) {
//   this.id = id;
// }
// A.fn = function () {
//   console.log('in A.fn', this.id);
// }
// A.id = 'class A'
// A.prototype.fn = function () {
//   console.log('in A.prototype.fn', this.id);
// }
// var a = new A('object a');
// a.fn();                                                       //in A.prototype.fn object a
// A.fn();                                                       //in A.fn class A

/***********************************************************************************************************/

// const a = [1, 2, 3];
// const [one, ...rem] = a;
// const [first, , , fourth] = a;
// console.log(one === 1, rem.every((i, j) => i == j + 2), first === 1, fourth === 2);       //true true true false

/***********************************************************************************************************/

// const a = {
//   one: '1.0',
//   two: '2.0',
//   three: '3.0'
// };
// const { one, ...rem } = a;
// const all = { ...a };
// console.log(one === '1.0', rem === undefined, rem.three === '3.0', all.one === a.one);          //true false true true

/***********************************************************************************************************/

// console.log("rohit".split('/'));            //['rohit']

// console.log(JSON.parse("rohit"));            //Unexpected token r in JSON at position 0

// console.log(JSON.stringify("rohit"));        // "rohit"

// console.log(JSON.parse(JSON.stringify("rohit")));   //rohit


/***********************************************************************************************************/

// var intervalID = setInterval(function () {
//   console.log("hello");
// }, 2000);
// setTimeout(function () {
//   console.log("john");
//   clearInterval(intervalID);
// }, 10000)                                                     // hello hello hello hello john


/************************************ Nested Callback Nested Callback **************************************/
/************************************ Nested Callback Nested Callback **************************************/
/************************************ Nested Callback Nested Callback **************************************/

// let arr = [];
// let insertData = function (data) {
//   arr.push(data);
//   return arr;
// }

// let getUserInput = function (insert) {
//   let x = 10;
//   console.log(insert(x));
// }

// getUserInput(insertData);

/***********************************************************************************************************/

// let cleanRoom = function (gc) {
//   console.log("Room is Clean");
//   gc(wonIcecream);
// }
// let collectGarbage = function (wIc) {
//   console.log("Garbage Collected");
//   wIc();
// }
// let wonIcecream = function () {
//   console.log("Won Icecream");
// }

// cleanRoom(collectGarbage);


/************************************ Promise Promise Promise Promise **************************************/
/************************************ Promise Promise Promise Promise **************************************/
/************************************ Promise Promise Promise Promise **************************************/

// const p = new Promise((resolve, reject) => {
//   a = 3;
//   if (a == 4) {
//     resolve('success');
//   } else {
//     reject('error');
//   }
// })

// p.then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// })

/************************************** Nested Promise *********************************************************************/
/************************************** Nested Promise *********************************************************************/
/************************************** Nested Promise *********************************************************************/

// let cleanRoom = function () {
//   return new Promise((resolve, reject) => {
//     resolve('Room is Clean');
//   })
// }

// let collectGarbage = function () {
//   return new Promise((resolve, reject) => {
//     resolve('Garbage Collected');
//   })
// }

// let winIceCream = function () {
//   return new Promise((resolve, reject) => {
//     resolve('Won Icecream');
//   })
// }

/**
 * Won Icecream is depend on Garbage collection & garbage collection depends on Room Cleaning
 * Below code is works see it looks very dangerous & It will not debug if u add more promises into it.
 */

/**
 * Below code is diffcult to debug
 */
// cleanRoom().then((a) => {
//   console.log(a);
//   collectGarbage().then((b) => {
//     console.log(b);
//     winIceCream().then((c) => {
//       console.log(c);
//     }).catch((e1) => {
//       console.log(e1);
//     })
//   }).catch((e2) => {
//     console.log(e2);
//   })
// }).catch((e3) => {
//   console.log(e3);
// })

// ALTERNATE WAY // ALTERNATE WAY // ALTERNATE WAY // ALTERNATE WAY // ALTERNATE WAY // ALTERNATE WAY 
// ALTERNATE WAY // ALTERNATE WAY // ALTERNATE WAY // ALTERNATE WAY // ALTERNATE WAY // ALTERNATE WAY 
// ALTERNATE WAY // ALTERNATE WAY // ALTERNATE WAY // ALTERNATE WAY // ALTERNATE WAY // ALTERNATE WAY


// cleanRoom().then(() => {
//   return collectGarbage();
// }).then(() => {
//   return winIceCream();
// }).then(() => {
//   console.log("Won Icecream * TASK FINISH *");
// })


/**
 * If u wanna do all this with parallel
 * Once all of them are done do something
 * check the below code { Promise.all }
 * { Promise.race } if any of them promise finish first it will come inside this.
 * It will not wait for all.
 */

// Promise.all([cleanRoom(), collectGarbage(), winIceCream()]).then(() => {     
//   console.log("All Promises are done");
// }).catch(() => {
//   console.log("Promises are failed");
// })

/************************************** Promise vs Observable *********************************************************************/
/************************************** Promise vs Observable *********************************************************************/
/************************************** Promise vs Observablee *********************************************************************/

// const promSingle = new Promise((resolve) => {
//   resolve('a');
//   resolve('b');
// })

// /***
//  * It will print {a}.
//  * Promise only resolve single value.
//  * It will not return {b}
//  */
// promSingle.then(value => {
//   console.log(value)
// })

/***********************************************************************************************************/

// const obSerMult = new Observable((observer) => {
//   observer.next('a');
//   observer.next('b');
//   observer.next('c');
//   observer.next('d');
// })

// /***
//  * It will print {a b c d}.
//  * Observable will return multiple values using next.
//  */
// obSerMult.subscribe(value => {
//   console.log(value);
// })

/***********************************************************************************************************/
/***********************************************************************************************************/
/* Itertors vs Generators * Itertors vs Generators * * Itertors vs Generators * * Itertors vs Generators *
 * * Itertors vs Generators * * Itertors vs Generators ** Itertors vs Generators ** Itertors vs Generators *
 * * Itertors vs Generators ** Itertors vs Generators ** Itertors vs Generators ** Itertors vs Generators */


/**
 * Iterators Example
 */
// const arr = [1, 2, 3, 4];
// const iterator = arr[Symbol.iterator]();
// console.log(iterator.next());                //{ value: 1, done: false }             {Array NOT DONE} 
// console.log(iterator.next());                //{ value: 2, done: false }             {Array NOT DONE} ...
// console.log(iterator.next());                //{ value: 3, done: false }
// console.log(iterator.next());                //{ value: 4, done: false }
// console.log(iterator.next());                //{ value: undefined, done: true }        {Array DONE}


/**
  * Generators Example
  * Generators is a special kind of function will start from * astrisk
  * e.g:  function* hello(){}   or function *hello(){}
  * It's kind of stops / pauses & when we call it again then it produces a next value.
  * It's kind of maintain the state of it.
  *
  * What is yield?:  yield will reproduce the values & Generator will only yield one value at a time.
  * It's pauses & doesn't move the next line until it resolves from the first one.
  *
  */

// function* hello() {
//   yield 1;                
//   yield 2;
//   yield 3;
//   yield 4;
// }

// let iterator = hello();

// console.log(iterator.next());                //{ value: 1, done: false }             {Array NOT DONE} ...
// console.log(iterator.next());                //{ value: 2, done: false }   
// console.log(iterator.next());                //{ value: 3, done: false }
// console.log(iterator.next());                //{ value: 4, done: false }
// console.log(iterator.next());                //{ value: undefined, done: true }        {Array DONE}

//Get Squared numbers  1, 4, 9, 16, 25, 32... & so on
// function* createSquaredNumbersGenerators() {
//   let n = 0;
//   while (true) {
//     n++;
//     yield n * n;
//   }
// }
// const sN = createSquaredNumbersGenerators();
// console.log(sN.next().value);
// console.log(sN.next().value);
// console.log(sN.next().value);

/**
 * It looks like infinite function
 * But it will not give Stack Overflow Error
 */
// function* infiniteMaker() {
//   let i = 0;
//   while (true) {
//     yield i;
//     i++;
//   }
// }

// let iterator = infiniteMaker();
// console.log(iterator.next());     //{ value: 0, done: false }
// console.log(iterator.next());     //{ value: 1, done: false }
// console.log(iterator.next());     //{ value: 2, done: false }         // call as many times you want & get values

/**
 * IMPORTANT NOTE:
 *
 * Calling another generator function into already existed generator function
 */

// function* generator() {                 // This Syntax will work
//   yield 1;
//   yield* anotherGenerator();
//   yield 3;
// }

// function* anotherGenerator() {           // This Syntax will also work
//   yield 2;
// }

// let iterator = generator();

// console.log(iterator.next());             //{ value: 1, done: false }
// console.log(iterator.next());             //{ value: 2, done: false }
// console.log(iterator.next());             //{ value: 3, done: false }
// console.log(iterator.next());             //{ value: undefined, done: true }


/**
 * Generators with return
 */

// function* generator() {                 // This Syntax will work
//   yield 1;
//   yield* anotherGenerator();
//   return 'hello';
//   yield 3;
// }

// function* anotherGenerator() {           // This Syntax will also work
//   yield 2;
// }

// let iterator = generator();

// console.log(iterator.next());             //{ value: 1, done: false }
// console.log(iterator.next());             //{ value: 2, done: false }
// console.log(iterator.next());             //{ value: 'hello', done: true }
// console.log(iterator.next());             //{ value: undefined, done: true }
/***********************************************************************************************************/
/***********************************************************************************************************/

/*  Map vs WeakMap * Map vs WeakMap * * Map vs WeakMap ** Map vs WeakMap ** Map vs WeakMap *
 * * Map vs WeakMap ** Map vs WeakMap ** Map vs WeakMap ** Map vs WeakMap ** Map vs WeakMap *
 * * Map vs WeakMap ** Map vs WeakMap ** Map vs WeakMap ** Map vs WeakMap ** Map vs WeakMap */

/**
 * Why Map ?
 * Generally we use key & value pair where {key} is string
 * But I want key as Object
 * We can achieve this using Map
 * In a map you only can store {Unique Value}
 * We can do it {without Map} also but there is a problem lets see what tha problem is {It only takes last value}
 *
 * Why WeakMap?
 * Once you define Map key it's kind of holds it in memory
 * And it doesn't let it gabage collected even the original key is removed that's why we need {WeakMap}.
 */

/***********************************************************************************************************/

// var obj1 = { a: 1 };
// var obj2 = { b: 2 };

// var map = new Map();
// var wm = new WeakMap();

// map.set(obj1, 'obj1');
// wm.set(obj2, 'obj2');

// obj1 = null;                              //obj1 is null but still in next line we are getting value.
// map.forEach(function (val, key) {
//   console.log(key, val); // {a: 1} 'obj1'
// });

// obj2 = null;
// wm.get(obj2); // undefined

/***********************************************************************************************************/


// const x = {};
// const a = {};
// x[a] = 'a';
// console.log(x);     //{ '[object Object]': 'a' }
// console.log(x[a]);    // a

/* Add another key  */

/**
 * It only supports one value. That's the actual problem
 */
// const x = {};

// const a = {};
// const b = { num: 1 };

// x[a] = 'a';
// x[b] = 'b';

// console.log(x);     //{ '[object Object]': 'b' }

// console.log(x[a]);    // b
// console.log(x[b]);    // b

/**
 * Map Example Map Example
 * Map Example Map Example
 * Map Example Map Example
 */

// const a = {};
// const b = { num: 1 };

// const map = new Map();
// map.set(a, 'a');            // key: {}, value: 'a'
// map.set(b, 'b');            // key: { num: 1 }, value: 'b'

//or We can do it {in one line}

// We have override the value of object {a}
// map.set(a, 'a').set(b, 'b').set(a, 'c')   // key: {}, value: 'c', key: {num: 1}, value: 'b'
// console.log(map);

/***********************************************************************************************************/

/**
 * Delete & Clear
 */

// map.delete(b)             // b is deleted & output is key: {}, value: 'c'
// map.clear()                   

/***********************************************************************************************************/

/**
 * {for of} loop
 */

// for (let [key, value] of map.entries()) {
//   console.log(key, value);
//   /**
//    *  {} 'c'
//    *  { num: 1 } 'b'
//    */
// }

/***********************************************************************************************************/


// Converting into an array

// const arr = [...map];
// console.log(arr);           //[ [ {}, 'c' ], [ { num: 1 }, 'b' ] ]        Two Dimentional Array

/**
 * WeakMap Example
 */

// {
//   let x = {                   // let have Block Scope so it should not available outside
//     a: [1, 2]
//   };

//   var map = new Map();       // var Function Scope it should available outside
//   map.set(x, 'something')


//   var weakMap = new WeakMap();       // var Function Scope it should available outside
//   weakMap.set(x, 'something')

// }

// console.log(map);           //{ { a: [ 1, 2 ] } => 'something' }     But Here we are getting value of {x object} ??????????
// console.log(weakMap);       //{ [items unknown] }  you will not get outside

/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/
/*  Set vs WeakSet * Set vs WeakSet * Set vs WeakSet * Set vs WeakSet * Set vs WeakSet * Set vs WeakSet *
/*  Set vs WeakSet * Set vs WeakSet * Set vs WeakSet * Set vs WeakSet * Set vs WeakSet * Set vs WeakSet *
/*  Set vs WeakSet * Set vs WeakSet * Set vs WeakSet * Set vs WeakSet * Set vs WeakSet * Set vs WeakSet */

/**
 * Both are non-primitive data type
 */

// Set   Set is used to store unique values
// const m = new Set()           // Hear we can pass itreable array { const ws = new WeakSet([1,2,3]);  }
// m.add(1).add(2).delete(1)    // etc

// // WeakSet 
// const ws = new WeakSet();                   // Hear we can pass itreable objects { const ws = new WeakSet([{a:1},{b:2}]);  }
// ws.add({ a: 1 }, { b: 2 }).delete(a)         // In weakset we have to insert object in .add method


/*********************** BigInt BigInt BigInt BigInt BigInt *******************************************/

// console.log(200n / 20);   // Cannot mix BigInt and other types, use explicit conversions
// console.log(200n / 20n);  // 10n

/************* Async & Await * Async & Await * Async & Await ******************/
/************* Async & Await * Async & Await * Async & Await ******************/
/************* Async & Await * Async & Await * Async & Await ******************/

/**
 * Defination:
 * async await returns a promise
 * It looks like synchronous code but hard to debug
 * /


function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

// With async & await

// asyncCall = async _ => {
//   console.log('calling');
//   const result = await resolveAfter2Seconds();       //VVIMP Accessing the await values
//   console.log(result);
//   // expected output: 'resolved'
// }

// OR

// Without async & await

// asyncCall = _ => {
//   console.log('calling');
//   resolveAfter2Seconds().then((m) => { console.log(m) })
//   // expected output: 'resolved'
// }

asyncCall();

/*************************************** VVIMP * VVIMP * VVIMP * VVIMP ***************************************/
/***********************************************************************************************************/
/* Array Flattening  * Array Flattening * Array Flattening * Array Flattening * Array Flattening * Array Flattening
* Array Flattening * Array Flattening * Array Flattening * Array Flattening * Array Flattening * Array Flattening
* Array Flattening * Array Flattening * Array Flattening * Array Flattening * Array Flattening * Array Flattening
/***********************************************************************************************************/

// let data = [0, 1, [2, [3, 4]]];        //How to convert to normal array like[0, 1, 2, 3, 4] ???????

// flatten = (arr) => {
//   var flatArr = [];
//   arr.forEach(element => {
//     if (Array.isArray(element)) {
//       flatArr = flatArr.concat(flatten(element));
//     } else {
//       flatArr.push(element);
//     }
//   });
//   return flatArr;
// }

// const newArr = flatten(data);
// console.log(newArr);

/***********************************************************************************************************/
/***********************************************************************************************************/

/**
 * Symbol
 * Symbols are new primitive type introduced in ES6. Symbols are completely unique identifiers.
 * Just like their primitive counterparts (Number, String, Boolean), they can be created using the factory function Symbol() which returns a Symbol.
 * Every time you call the factory function, a new and unique symbol is created.
 */

/**
 * Below code override prop propertity.
 */
// var map = {};
// function setProp(map) {
//     map.prop = "hey";
// }
// function setProp2(map) {
//     map.prop = "hey, version";
// }
// setProp(map);
// setProp2(map);
// console.log(map.prop);

// NOTE: USING Symbol Property will not override.

// var map = {};
// var symbol1 = Symbol("prop");
// var symbol2 = Symbol("prop"); // same name, different instance – so it's a different symbol!
// map[symbol1] = "hey";
// map[symbol2] = "hey, version"; // doesn't override the previous symbol's value
// console.log(map[symbol1] + " " + map[symbol2]);

/***********************************************************************************************************/
/*************** Convert Objects to Array ******* & ********* Array to Objects ******************************/
/*************** Convert Objects to Array ******* & ********* Array to Objects ******************************/
/*************** Convert Objects to Array ******* & ********* Array to Objects ******************************/

// var person1 = { name: 'vikas', age: 20 }
// console.log(Object.keys(person1)); //["name", "age"]
// console.log(Object.values(person1)); //["vikas", 20]
// console.log(Object.entries(person1)); // [ ['name', 'vikas'], ['age', '20'] ]
// const arraysss = [['one', 1], ['two', 2],];
// var datasss = Object.fromEntries(arraysss);
// console.log(datasss); //{one: 1, two: 2}

/***********************************************************************************************************/
/********* Function Pointer ******* Function Pointer ******************* Function Pointer ******************** Function Pointer ***************/
/********* Function Pointer ******* Function Pointer ******************* Function Pointer ******************** Function Pointer ***************/
/********* Function Pointer ******* Function Pointer ******************* Function Pointer ******************** Function Pointer ***************/
/***********************************************************************************************************/
/**
 * What is function pointer?
 * Function Pointer means storing the function into variable & call that variable
 * So the variable works as a function because, function reference is stored into variable.
 *

// function dostuff() {
//   return 'stuff';
// }
// var fnpointer = dostuff;
// console.log(fnpointer());

/**
 * But Why??????
 *
 * The variable fnpointer acts just like the function does. So what's the point?
 * ... Well, callbacks now become a possibility.
 */

// function myfnvar()
// {
// 	alert('you called the function variable');
// }
// function realfunction(ofnvar)
// {
// 	ofnvar();
// }
// realfunction(myfnvar);
/***********************************************************************************************************/


/*********************************************************************************************************************8*****/
/**************************** Code Practices *********************** Code Practices ****************************************/
/*********************************************** Code Practices ************************************************************/

// const a = { "Java": 10, "Ruby": 80, "Python": 65 };
// const b = { "Hindi": 60, "Dutch": 93, "Greek": 71 };
// const c = [{ "C++": 60 }, { "ASM": 10 }, { "Haskell": 20 }];

// function getSubjectsAboveSixtyMarks(a, b, c) {
//   let obj;
//   temp = {};
//   c.forEach((v, k) => {
//     obj = Object.assign(temp, v);
//   })
//   var finalObj = { ...a, ...b, ...obj }
//   this.getBusinessLogic(finalObj);
// }

// function getBusinessLogic(a) {
//   const k = Object.keys(a);
//   k.forEach((v) => {
//     if (a[v] >= 60) {
//       console.log(v);
//     }
//   })
// }

// getSubjectsAboveSixtyMarks(a, b, c);


/***********************************************************************************************************/
/***********************************************************************************************************/

// const myArr = [22,1,4,2,23,22,4,7,7,2,3,7];     // sort this array & remove duplicates

// function getSortedArr(newArr){
//   //let unique = [...new Set(arr)]
//   //console.log(unique.sort((a,b)=>{return a-b}))
//   var temp;
//   var arr = getUniqueArr(newArr);
//   for(var i = 0; i < arr.length; i++){
//     for(var j = 0; j < arr.length; j++){
//       if(arr[j] > arr[j+1]){
//             temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//       }
//     }
//   }
//   console.log("Sorted",arr)
// }
// getSortedArr(myArr);

// function getUniqueArr(myArr){
//   var unique = [];
//   for(var i = 0; i < myArr.length;  i++){
//      if(unique.indexOf(myArr[i]) === -1){
//         unique.push(myArr[i]);
//      }
//   }
//   return unique;
// }

/***********************************************************************************************************/

// const arr = [100, 0, 0, 0, 1, 0, 1, 1, 0, 3, 7, 7]
// var newArr = [];
// for (var i = 0; i < arr.length; i++) {
//   if (!includes(newArr, arr[i])) {
//     newArr.push(arr[i])
//   }
// }
// console.log(newArr);

// function includes(arr, num) {
//   isPresent = false;
//   if (arr && arr.length > 0) {
//     arr.forEach(element => {
//       if (element == num) {
//         isPresent = true;
//       }
//     });
//   }
//   return isPresent;
// }


/***********************************************************************************************************/
/***********************************************************************************************************/
// function isParenthesisMatching(str) {
//   temp = []
//   var mapObj = {
//     '}': '{',
//     ']': '[',
//     ')': '('
//   }
//   for (let s of str) {
//     if (s === '(' || s === '{' || s === '[') {
//       temp.push(s)
//     }else{
//        if(temp.pop() !== mapObj[s]){
//          return false
//        }
//     } 
//   }
//   return temp.length == 0
// }
// console.log(isParenthesisMatching('[{}'))


/***********************************************************************************************************/
/***********************************************************************************************************/

// function getCharCount(str) {
//   var unique = []
//   for (var i = 0; i < str.length; i++) {
//     count = 0;
//     for (var j = 0; j < str.length; j++) {
//       if (str[i] === str[j]) {
//         count++
//       }
//     }
//     if (!unique.includes(str[i])) {
//       unique.push(str[i], count)
//     }
//   }
//   console.log(unique.join(''))
// }

// getCharCount('aaajajak')        //a5j2k1

/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/
// function getWordCount(str){
//   if(str.length === 0){
//     return 0
//   }else{
//     count = 1;
//     const arr = str.split('')
//     for(var i = 0; i < arr.length; i++){
//       if(arr[i] === arr[i].toUpperCase()){
//         count++
//       }
//     }
//   }
//   return count
// }
// console.log(getWordCount('saveChangesInTheEditor'))        // 5 word present 
// console.log(getWordCount('camelCase'))                     // 2 word present 
/***********************************************************************************************************/
/***********************************************************************************************************/

/******* What is Babel? ****** What is Babel? ******************* What is Babel? ******* What is Babel? ******* What is Babel? *********** What is Babel? *********/

/**
 * It is a transpiler which will convert/compile our JS code into ES5
 */

/********** How to compare two objects ******* How to compare two objects *********** How to compare two objects ***************************************/
/********** How to compare two objects ******* How to compare two objects *********** How to compare two objects ***************************************/
/********** How to compare two objects ******* How to compare two objects *********** How to compare two objects ***************************************/

/**
 * Ans:
 *
 * JSON.stringify(objX) === JSON.stringify(objY)
 */

/**
 * Examples
 */

//EX 1

/**
 * x = { a: 1, b: 2 };
 * y = { b: 2, a: 1 };
 * console.log(JSON.stringify(x) === JSON.stringify(y)) // false (Because The {ORDER} of the properties IS IMPORTANT)
 */

//EX 2

/**
 * x = { a: 1, b: 2 };
 * y = { a: 1, b: 2 };
 * console.log(JSON.stringify(x) === JSON.stringify(y)) // true (because the order is same)
 */



// var obj1 = {
//   name: 'rohit',
//   age:25
// }
// var obj2 = {
//   name: 'rohit',
//   age:25
// }
// var obj3 = {
//   age:25,
//   name: 'rohit'
// }

// console.log(JSON.stringify(obj1) === JSON.stringify(obj2) )          // true
// console.log(JSON.stringify(obj1) === JSON.stringify(obj3) )          // false (because {order} of propertities is IMPORTANT)


/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/


/*********** Shift Unshift Push Pop ************ Shift Unshift Push Pop ******* Shift Unshift Push Pop *********** Shift Unshift Push Pop **************/
/*********** Shift Unshift Push Pop ************ Shift Unshift Push Pop ******* Shift Unshift Push Pop *********** Shift Unshift Push Pop **************/
/*********** Shift Unshift Push Pop ************ Shift Unshift Push Pop ******* Shift Unshift Push Pop *********** Shift Unshift Push Pop **************/


//var arr = [1,2,3,4,5]
// arr.push(6)   // [1,2,3,4,5,6]
// arr.pop()     // [1,2,3,4]
// arr.shift()   // [2,3,4,5]
// arr.unshift(9)   [9,1,2,3,4,5]
//console.log(arr)

/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/

/**
 * Cumulus Systems Interview Starts
 */

// const test = function (name) {
//   const test1 = function () {
//     this.name = name;
//   }
//   test1();
// }

// const obj = new test('Amit');
// console.log(obj.name)             // undefined 
// console.log(name)                 // Amit


/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/

/**
 * Return Unique Array
 */

// const arr = [1, 2, 1, 1, 2, 3, 2]

/**
 * Ans:
 *    Array.from(new Set(arr))
 */

/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/

/**
 *   Is this possible we have used const keyword?
 */

// const arr = [1, 2, 1, 1, 2, 3, 2]
// arr[2] = 7

/**
 * Yes Possible out array is: [1, 2, 7, 1, 2, 3, 2]
 */

// But How?

/**
* const * * const * * const * * const * * const * * const * * const * * const * * const *
* const * * const * * const * * const * * const * * const * * const * * const * * const *
* const * * const * * const * * const * * const * * const * * const * * const * * const *
*
*     1. constant cannot change through re-assignment
*     2. constant cannot be re-declared
*/


/* * Very Very Very Important * */
/* * Note:
            When you're adding to an array or object you're not re-assigning or re-declaring the constant,
            it's already declared and assigned, you're just adding to the "list" that the constant points to.
*/


/****So this works fine:***/

// const x = {};

// x.foo = 'bar';

// console.log(x); // {foo : 'bar'}

// x.foo = 'bar2';

// console.log(x); // {foo : 'bar2'}  

/* * AND * */
/* * AND * */
/* * AND * */

//const arr = [1, 2, 1, 1, 2, 3, 2]         
//arr[2] = 7                        //  [1, 2, 7, 1, 2, 3, 2]


// const y = [];

// y.push('foo');

// console.log(y); // ['foo']

// y.unshift("foo2");

// console.log(y); // ['foo2', 'foo']

// y.pop();

// console.log(y); // ['foo2']

/* * But * */
/* * But * */
/* * But * */


/**
 * Below will not work
 */


// const x = {};
// x = {foo: 'bar'}; // error - re-assigning

// const y = ['foo'];
// const y = ['bar']; // error - re-declaring

// const foo = 'bar'; 
// foo = 'bar2';       // error - can not re-assign

// var foo = 'bar3';   // error - already declared
// function foo() {};  // error - already declared


/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/

/**
 * Function Expression & Arrow Function difference programatically
 */


/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/

/**
 * Problem
 */

//Lorem Ipsum is __L__ simply dummy text __L__ of the printing __L__ and typesetting __L__ industry.

//convert it to => =>

//Lorem Ipsum is <a> simply dummy text</a> of the printing <a> and typesetting</a> industry

/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/

/**
 * Cumulus Systems Interview Ends
 */

/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/

/**
 * Javascript basics but important interview questions
 */

/**
 * 1. Hoisting
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    console.log('bar:', bar);
    bar = 15;
    var foo = 1;
    console.log("foo:", foo, "bar:", bar);
    var bar;

    Answer:
      bar:undefined
      foo:1bar:15

  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  greetings();
  var greetings = function(){
     console.log("First greetings");
  }
  greetings();
  function greetings(){
    console.log("Second greetings");
  }
  greetings();

  Answer: Second greetings, First greetings, First greetings.

  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  var variable = 10;
  (()=>{
    console.log(variable);
     variable = 20;
    console.log(variable);

  })();

    console.log(variable);
    var variable = 30;

    Answer: 10 20 20

  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  var variable = 10;
  (()=>{
   variable_3 = 35;
   console.log(variable_3);
    var variable_3 = 45;
    variable_2 = 15;
    console.log(variable);
  })();

    console.log(variable_2);
    console.log(variable_3);
    var variable = 30;

    Answer: 35, 10, 15, and an error saying "variable_3 is not defined

  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 */


/**
 *  2. Closure and variable scope
 *    1. Explain the pros and cons of closure?
 *    2. What would happen if I remove the closure feature from JavaScript?
 *    3. What could be the alternative to closure?
 *
 *  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    WAP on a private counter using a closure. or ask below code
    let counter = function(){
      let k = 0;
      return () => k++;
    }();

    console.log(counter());
    console.log(counter());
    console.log(counter());

    Answer: 0 1 2
 *
 */


/**
 * 3. knowledge about this

   var fullname = 'John Doe';
   var obj = {
   fullname: 'Colin Ihrig',
   prop:{
     fullname: 'Aurelio De Rosa',
     getFullname: function(){
       return this.fullname;
     }
   },
   getMyName: function(){
     return this.fullname;
   },
   getFirstName: () =>{
     return this.fullname.split(' ')[0];
   },
   getLastName: (function(){
     return this.fullname.split(' ')[1];
   })()
}

 console.log(obj.prop.getFullname())
 console.log(obj.getFirstName())
 console.log(obj.getMyName())
 console.log(obj.getLastName)


 Answer:
   Aurelio De Rosa
   John
   Colin Ihrig
   Doe
 */

/**
 * 3. Objects
 *
 * Which of the following statement would modify the obj object?
 *
 *  const obj = { title: 'Hello World' };
 *  Object.seal(obj);
 *
 *  A. obj.title = "bla bla bla";
 *  B. obj.xyz = "bla bla bla";
 *  C. delete obj.title;
 *  D. Object.assign(obj, { xyz: "bla bla bla" })
 *
 * Answer: A is the correct choice because new properties can not be added/remove but modify the existing propertities
 *
 */

/**
 * console.log(mul(2)(3)(4)); // 24
 *
 * ans:
 *
   function mul (x) {
     return function (y) { // anonymous function
       return function (z) { // anonymous function
         return x * y * z;
       };
     };
   }
 */

/**
 * Write a function which will returns 16 and 27
 *
 * var addSix = createBase(6);
 * console.log(addSix(10)); // returns 16
 * console.log(addSix(21)); // returns 27
 *
 * Answer:
 *
    function createBase(val) {
        return function(x) {
            return x + val
        }
    }
 */

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

 // Create our own Array using class

/**
 * class MyArray{
  length = 0;
  data = {};

  push(item){
    this.data[this.length] = item;
    this.length++;
  }

  pop(){
    delete this.data[this.length - 1];
    this.length--;
  }

  getIndex(index){
    return this.data[index]
  }

  delete(index){
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index){
    for(let i = index; i < this.length-1; i++){
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArr = new MyArray();
newArr.push('hey')
newArr.push('you')
newArr.push('are')
newArr.push('sexy')
// newArr.pop();
// newArr.pop();
// newArr.getIndex(3);
newArr.delete(3);
console.log(newArr)
 */


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@