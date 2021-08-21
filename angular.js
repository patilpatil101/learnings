/***********************************************************************************************************/
/************** This documentation is written by Rohit Patil (7888226600) *********************************/
/***********************************************************************************************************/

/**
 * Angular
 */

// annonations vs decorators
// Location Strategy
// HashLocation vs PathLocation
// Incremental DOM
// IVY Render
// SwitchMap vs MergeMap
// Differential Loading
// Web Components
// Paraller Request call
// Is it possible to use multiple pipe if yes how if not why? //Yes Possible {{name  | filter | toLowerCase | toUpperCase}}

/**
* What is present inside Angular Compiler?
*
* JIT JIT JIT JIT JIT JIT JIT JIT JIT JIT JIT JIT JIT JIT
* JIT JIT JIT JIT JIT JIT JIT JIT JIT JIT JIT JIT JIT JIT
*
*  1. Compiled in the browser.
*  2. Each file compiled separately.
*  3. No need to build after changing our code and before reloading the browser page
*  4. Suitable for local development
*
*      //Build Time
*       => Source Code
*
*      //RuntTime
*      => Template, Parser, Abstract Syntax Tree (AST)
*
* AOT AOT AOT AOT AOT AOT AOT AOT AOT AOT AOT AOT AOT AOT AOT
* AOT AOT AOT AOT AOT AOT AOT AOT AOT AOT AOT AOT AOT AOT AOT
*  Defination:
*          The Angular ahead-of-time (AOT) compiler converts your Angular HTML and TypeScript code into efficient JavaScript code
*          during the build phase before the browser downloads and runs that code.
*
*  1. Compiled by the machine itself
*  2. All code compiled together
*  3. More secure, original source not disclosed
*  4. Suitable for production builds
*
*    // Build Time
*    => Source Code
*    => Template, Parser, Abstract Syntax Tree (AST)
*
*  ******************* HOW AOT WORKS ? **********************************************************************************************************
*  There are 3 compilation phases in it.
*    It's all about metadata. @Component, @Directives, @Pipes
*    It takes the entire information from metadata.
*
*    1. Code Analysis
*    2. Code Generation
*    3. Template Type Checking
*
*  **********************************************************************************************************************************************
*/

/**
 * Why Webpack?
 *      Older problem:
 *              If our application required 1000s of JS files
 *              so we have to import that all the files in index.html which is not good
 *              so that we use webpack to generate single file from multiple js.
 *
 * Webpack (It will converts all js files into single js file. which is combination of multiple js)
 *      we mostly used in development mode.
 *      we minified js code using -p e.g
 *  package.json
 *      "scripts": {
                "build": "webpack src/js/app.js dist/bundle.js"
                "build:prod": "webpack src/js/app.js dist/bundle.js -p"
        },
 *
 * steps:
 *      1. Install webpack -> npm i webpack
 *      2. run webpack ->  npm run webpack <source_files> <destination_file> e.g webpack src/js/app.js dist/bundle.js
 *
 * VVIMP VVIMP VVIMP
 *
 *      CORE POINTS in webpack
 *
 *      1. Entry Point -> 2. Module Loaders -> 3. Plugins -> 4. Output
 */

/**
 * Webpack Dev Server? -> Auto compiles the code. When we save it renders that to UI.
 *
 *    package.json
 *      "scripts": {
 *           "build": "webpack-dev-server src/js/app.js dist/bundle.js"    ///Wait Wait IT will not work but why????
 *      }
 *
 *      Ans: It's needs to specify --entry and --output-filename and required relative path e.g "build": "webpack-dev-server --entry ./src/js/app.js --output-filename ./dist/bundle.js"
 *
 * How to run?
 *      npm run build
 */

/**
 * What are Chunks?
 * Chunks aren't part of Angular, they're a part of Webpack, which Angular uses internally to build your application.
 * When Webpack transpiles the TypeScript files into JavaScript,
 * it creates “chunks” which might represent parts of files, or whole files depending on your build configuration.
 */
/**********************************************************************************************************************************************
/**
 * What is Web Workers?
 * Defination:
 *         Web Workers are a grate way to speed up your application
 *         Web workers allows you to offload work to a background thread.
 *         tsconfig.worker.json which handle worker.ts file also this information added into angular.json as
 *         "webWorkerTsConfig": "tsconfig.worker.json"
 *      ng generate webWorker my-worker
 */
/**********************************************************************************************************************************************
/**
 * ActivatedRoute vs ActivateRouteSnapshot
 *
 *   1. ActivatedRoute => mutable
 *   2. ActivateRouteSnapshot => immutable because it's just a snapshot we can not change it.
 *
 *    activatedRoute:ActivatedRoute => activatedRoute.snapshot
 */
/**********************************************************************************************************************************************
/**
 * paramMap
 *
 * The paramMap provide more convenience to play with route parameter. Having following three methods:
 *   1. has()
 *   2. get()
 *   3. getAll()
 */
/**********************************************************************************************************************************************
/**
 * What is Matrix Parameters vs Query Parameters
 *
 *  Matrix Parameter:
 *      e.g: /books/2011;author=mkyong       => author=mkyong is Matrix Parameter seperated by ";"
 *      format: http://www.example.com/example-page;field1=value1;field2=value2;field3=value3
 *
 *  Query Parameter:  http://www.example.com/example-page?field1=value1&field2=value2&field3=value3
 */
/**********************************************************************************************************************************************
/**
 * Params vs QueryParams
 *
 * Param:
 *     An observable of the matrix parameters scoped to this route.
 *
 * QueryParam:
 *     An observable of the query parameters shared by all the routes.
 */
/**********************************************************************************************************************************************
/**
 * main.ts
 *
 *  platformBrowserDynamic
 *       Defination: platformBrowserDynamic() creates a platform to load our app into browser.
 *
 *  What is enableProdMode()?
 *
 *     => import { enableProdMode } from "@angular/core";
 *    Answer: Disable Angular's development mode, which turns off modifications (e.g bindigs) and other checks within the framework
 */
/**********************************************************************************************************************************************
/**
 * What is ng build --prod
 *
 * Answer: ng build --prod replaces environment.ts with environment.prod.ts
 */
/**********************************************************************************************************************************************
/**
 * DebounceTime vs ThrottlingTime (Both techniques are used to improve browser performance)
 *
 * DebounceTime:
 *      Debouncing in JavaScript is a practice used to improve browser performance
 *
 * ThrottlingTime:
 *     No matter how many times the user fires the event, the attached function will be executed {only once in a given time interval}.
 *     function gets called everytime after given interval (throttling executes the function at a regular interval)
 */



/*********** State Management by NGRX ( Redux ) ******************** State Management by NGRX ( Redux ) ********************** State Management by NGRX ( Redux ) *************/
/**
 * NGRX means Redux
 * Use for State Management
 *
 *  Principle in Redux:
 *      1. Store: Single source of truth
 *      2. Dispaching Action: State is ready only & only change by Dispaching Action
 *      3. Reducers: Changes are made using functions. It's a function (initialValue, action) two parameter
 */

/*********** ng-container ng-container ng-container ng-container ng-container ng-container ng-container ng-container ng-container *************/
/*********** ng-container ng-container ng-container ng-container ng-container ng-container ng-container ng-container ng-container *************/
/*********** ng-container ng-container ng-container ng-container ng-container ng-container ng-container ng-container ng-container *************/

// ANS:
/**
 * The Angular <ng-container> is a grouping element that doesn't interfere with styles or layout
 * because Angular doesn't put it in the DOM. ...We should use <ng-container> when we just want to apply multiple structural directives
 * without introducing any extra element in our DOM.
 */

/**********************************************************************************************************************************************
/**********************************************************************************************************************************************
/**********************************************************************************************************************************************



/************ ng-template ******** ng-template *********** ng-template **************** ng-template ************ ng-template ******************** ng-template ***********************/
/************ ng-template ******** ng-template *********** ng-template **************** ng-template ************ ng-template ******************** ng-template ***********************/
/************ ng-template ******** ng-template *********** ng-template **************** ng-template ************ ng-template ******************** ng-template ***********************/

// ANS:
/**
 * ng-template is an Angular element used to render HTML templates. We use ng-template with angular *ngIf directive to display else template
 */

/**********************************************************************************************************************************************
/**********************************************************************************************************************************************
/**********************************************************************************************************************************************


/******* Virtual DOM vs Shadow DOM *************** Virtual DOM vs Shadow DOM **************** Virtual DOM vs Shadow DOM ***************************/
/******* Virtual DOM vs Shadow DOM *************** Virtual DOM vs Shadow DOM **************** Virtual DOM vs Shadow DOM ***************************/
/******* Virtual DOM vs Shadow DOM *************** Virtual DOM vs Shadow DOM **************** Virtual DOM vs Shadow DOM ***************************/

/**
 * Virtual DOM: => => Virtual DOM is creating a copy of the whole DOM object
 * Shadow DOM: => => Shadow DOM creates small pieces of the DOM object which has their own, isolated scope for the element they represent
 */

/**********************************************************************************************************************************************
/**********************************************************************************************************************************************
/**********************************************************************************************************************************************

/******** Types of NgModules ************* Types of NgModules ************** Types of NgModules ********* Types of NgModules *************/
/******** Types of NgModules ************* Types of NgModules ************** Types of NgModules ********* Types of NgModules *************/
/******** Types of NgModules ************* Types of NgModules ************** Types of NgModules ********* Types of NgModules *************/
/**
 * Ans:
 *
 * Features Module.
 * Routing Module.
 * Service Module.
 * Shared Module.
 */

/**********************************************************************************************************************************************
/**********************************************************************************************************************************************
/**********************************************************************************************************************************************


/******** QueryParams vs RouteParams ************* QueryParams vs RouteParams ************** QueryParams vs RouteParams ********* QueryParams vs RouteParams *************/
/******** QueryParams vs RouteParams ************* QueryParams vs RouteParams ************** QueryParams vs RouteParams ********* QueryParams vs RouteParams *************/
/******** QueryParams vs RouteParams ************* QueryParams vs RouteParams ************** QueryParams vs RouteParams ********* QueryParams vs RouteParams *************/


/**
 * Route Params
 *
 * Ans:
 *  Prefer a route parameter when:
 *      1. The value is required.
 *      2. The value is necessary to distinguish one route path from another.
 *
 * e.g: path: '/user/:id'
 */


/**
* Query Params
*  A query parameter is a parameter that we pass from one route to another route.
*
*  Prefer a query parameter when:
*      1. The value is optional.
*
* e.g: How to pass optional parameter => =>
            <a [routerLink]="['product-list']" [queryParams]="{ page: 99 }">Go to Page 99</a>
                    or
            this.router.navigate(['/route1'], { queryParams: { val: 'Query params for route 1' }});
*/

//**IMPORTANT**// 

//URL with query params: http://some.where/thing?paramA=1&paramB=6542
//URL with matrix params: http://some.where/thing;paramA=1;paramB=6542

/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/


//Optimization strategies in Angular
//1. Explain How to use NgZone?

//2. ChangeDetectionStrategy: OnPush





