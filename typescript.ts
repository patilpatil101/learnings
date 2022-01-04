/***********************************************************************************************************/
/************** This documentation is written by Rohit Patil (7888226600) *********************************/
/***********************************************************************************************************/

/**
 * TypeScript
 *
 * (TypeScript allows code optimization using the OOPS concept)
 */

/***********************************************************************************************************/

/**
 * List of data types available in typescript?
 * List of data types available in typescript?
 * List of data types available in typescript?
 *
 *  1. boolean  =>  let isDone: boolean = false;
 *  2. string   =>  let color: string = "blue";
 *  3. number   =>  let hex: number = 0xf00d;
 *  4. array    =>  let list: number[] = [1, 2, 3];   or   let list: Array<number> = [1, 2, 3];
 *  5. any      =>  let maybe: any;         // maybe is string | number | ...anything
 *  6. void     =>  functions that do not return a value
 *  7. null
 *  8. undefined
 *  9. object
 *  9. tupple   =>  let x: [string, number];
 *                  x = ["hello", 10];  // OK
 *                  x = [10, "hello"]; // Error
 *
 *
 *  10. enum   =>
 *                    enum Color {
                          Red,
                          Green,
                          Blue,
                      }
                      let c: Color = Color.Green;
 *
 *
 */

/***********************************************************************************************************/

/**
 * Overloading is not possible example
 * Overloading is not possible example
 * Overloading is not possible example
 */

// class Employee{
//   constructor(name,salary,exp){
//     this.name = name;
//     this.salary = exp;
//     this.exp = exp;
//   }

//   add(x,y,z){
//     return x+y+z
//   }
// }

// class Programmer extends Employee{
//   constructor(name, salary, age){
//      super(name, salary, age)                  // {Constructor Chaining} with the help of super in ES6
//      Employee.call(this, name, salary, age)    // typical ES5 way              
//   }

//   add(x,y){
//     return x+y
//   }
// }

// const p = new Programmer('Rohit',90,4);
// console.log(p)
// console.log(p.add(10,10,10))     //20 Because JavaScript does not support function overloading natively. 
//                                     //If we will add functions with the same name and different arguments, it considers the last defined function 

/***********************************************************************************************************/

/**
 * TypeScript Inheritance vs JavaScript Inheritance
 * TypeScript Inheritance vs JavaScript Inheritance
 * TypeScript Inheritance vs JavaScript Inheritance
 */

//TS

// class Employee{
//   constructor(name,salary,exp){
//     this.name = name;
//     this.salary = exp;
//     this.exp = exp;
//   }
// }

// class Programmer extends Employee{
//   constructor(name, salary, age){
//      super(name, salary, age)                  // {Constructor Chaining} with the help of super in ES6
//      Employee.call(this, name, salary, age)    // typical ES5 way              
//   }
// }

// const p = new Programmer('Rohit',90,4);
// console.log(p)

//***************************************************** */

//JS
// function Employee(name, salary, exp) {
//   this.name = name;
//   this.salary = salary;
//   this.exp = exp;
// }
// Employee.prototype.slogan = function () {
//   return `My company is best. Regards ${this.name}`
// }

// // var harry = new Employee('Harry',1000,4);
// // console.log(harry.slogan())                             // My conpany is best. Regards Harry

// function Programmer(name, salary, exp, language) {
//   Employee.call(this, name, salary, exp);                  // VIMP Line
//   this.language = language;
// }

// Programmer.prototype = Employee.prototype                 // {Prototype Chaining} All prototype methods will come with this line 

//   Programmer.prototype.slogan = function(){               // specially for programmer function
//     return `I am proficient in ${this.language}`
//   }

// let rohit = new Programmer('Rohit', 80, 8, 'JavaScript');
// console.log(rohit.slogan())                                // TypeError: p.slogan is not a function {if prototype chaining not done}

// How to access slogan method? 
// Yes we can access it by prototype chaining how?
// add one line before object creation {Programmer.prototype = Employee.prototype}

/***********************************************************************************************************/

/**
 * Hot Module Reload (HMR provide auto compile feature.)
 *
 * Answer: HMR automatically runs and compile the code and generate the code in the dist folder.
 * npm i -D ts-loader webpack webpack-cli webpack-node-externals
 *
 *  ts-loader -> converts ts file to js
 */
/***********************************************************************************************************/

/**
 *     Interface
 *          - If we gives interface name as a return type to parameter then it suggests that parameter propertities
 *          - Avoid mistakes -> if we forgot to pass any property to the function parameter it gives error
 *
 *     interface RectangleOptions{
 *         width: number,
 *         length: number
 *     }
 *
 *     function drawRectangle(option: RectangleOptions){ //only option will not gives suggestions for suggestions we need { options: RectangleOptions }
 *          let width = option.width;
 *          let length = option.length;
 *          // Draw logic
 *     }
 *
 *      drawRectangle({
 *           width: 100       // ERROR: Now if you doesn't pass length when you insert comma after 100 it gives suggestion to add length
 *      })
 *
 *      drawRectangle({
 *          width: 100,      // SUCCESS: now this is complete
 *          length: 50
 *      })
 */

///////////////////////////////////////////////////////////////////////////////

/**
 * Tuples ->  return type:- combination of types and Gives Strictness when writing code
 *
 *     roles: [number, string]
 *
 * so we can use: roles: [2, 'rohit']
 *
 */

///////////////////////////////////////////////////////////////////////////////

/**
 * Intersection types
 */

// type Admin = {    // Admin will have name and roles propertities
//   name: string;
//   roles: string[]
// }

// type Employeee = { // Employee will have name and startDate propertities
//   name: string;
//   startDate: Date;
// }


// now if you want to create super employee with 

// this super employee requires all the propertities from Admin and Employee

// e.g public class SuperEmployee extends Admin, Employee
// type SuperEmployee = {
//   name: string;
//   roles: string[];
//   startDate: Date;
// }

/**
 * NOTE: instead of writing same code again & again use like this
 *
 * type SuperEmployee = Admin & Employee;
 *
 *  alternative of { public class SuperEmployee extends Admin, Employee }
 *
 */
///////////////////////////////////////////////////////////////////////////////
/**
 * How to create generics type for function A and function B
 */

// function A(): ?? {
//   return {
//     id: 1234
//   };
// }

// function B(): ?? {
//   return {
//     id: "1234"
//   }
// }

///////////////////////////////////////////////////////////////////////////////