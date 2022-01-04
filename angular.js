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

// ANS: It loads as comment in DOM but it displays his inside data 
     // Use ng-container whenever it's possible instead of html elements to avoid adding extra nodes to DOM.
/**
 * The Angular <ng-container> is a grouping element that doesn't interfere with styles or layout
 * because Angular doesn't put it in the DOM. ...We should use <ng-container> when we just want to apply multiple structural directives
 * without introducing any extra element in our DOM.
 *
 *      e.g: let arr = [
 *                      {name: 'rohit' , amountPaid: true},
*                       {name: 'harsh' , amountPaid: false},
*                       {name: 'neha' , amountPaid: true},
*                       {name: 'patil' , amountPaid: false}
 *              ]
 *
 *      <div *ngFor="let d of arr">
 *              <div *ngIf="d.amountPaid">{{d.name}}</div> //I will print 2 items but in DOM it creates 4.
 *      </div>
 *
 *
 *  NOTE: using <ng-container> we can avoid this just replace div with <ng-container>
 */

/************ ng-template ******** ng-template *********** ng-template **************** ng-template ************ ng-template ******************** ng-template ***********************/
/************ ng-template ******** ng-template *********** ng-template **************** ng-template ************ ng-template ******************** ng-template ***********************/
/************ ng-template ******** ng-template *********** ng-template **************** ng-template ************ ng-template ******************** ng-template ***********************/

// ANS: It loads as comment in DOM and it hides his inside data 
/**
 * ng-template is an Angular element used to render HTML templates.
 * We use ng-template with angular *ngIf directive to display else template
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

/******* Optimization Strategies  *************** Optimization Strategies  **************** Optimization Strategies  ***************************/
/******* Optimization Strategies  *************** Optimization Strategies  **************** Optimization Strategies  ***************************/
/******* Optimization Strategies  *************** Optimization Strategies  **************** Optimization Strategies  ***************************/

/**
 * 1. Explain How to use NgZone?
 *      => zone.js file detect async operations and run change detection.
 */

/**
 * 2. ChangeDetectionStrategy: OnPush
 *      => Whenever input or output (references) properties will change it will run change detection except manual change detection.
 */

/**
 * 3. Run Outside Angular?
 *      => Run code unit outside the angular-zone so that angular zone will not see any async operation changes
 *         and will not start change detection.
 *
 *      this.ngZone.runOutsideAngular(()=> {
            if(data >= 100)
                this.ngZone.run(()=> {data = "Done"})
            else
                data += 1
        })
 */

/**
 * 4. Use Pure Pipes
 *      => Pure pipes have no side-effects so the behavior is predictable and we can cache the input
 *         It will called only once because cached results are just returned on subsequent calls.
 */

/**
 * 5. Use TrackBy on *ngFor ( track on each item and see if value is changed or not if occour any change update the DOM)
 *      => differ will see if any iterable array value is changed or not.
 *         TrackBy will prevent the whole DOM from being constantly destroyed and re-created.
 */

/**
 * 6. Use Web Workers => creates a another work thread to divide the load of main thread
 *   command:  ng g web-worker webWorker
 */

/**
 * 7. Use Lazy Loading
 *      => It involves deferring the load of resources (images, audio, video, webpages) at load time till the time it’s needed then, it’s loaded.
 */


/******* ngTemplateOutlet ****************** ngTemplateOutlet ***************** ngTemplateOutlet ***************************************************/
/******* ngTemplateOutlet ****************** ngTemplateOutlet ***************** ngTemplateOutlet ***************************************************/
/******* ngTemplateOutlet ****************** ngTemplateOutlet ***************** ngTemplateOutlet ***************************************************/

/**
 * Why ngTemplateOutlet? => for reusing the template
 *
 *      => It can his div or ng-containter replace with <ng-template>
 *      => context: { $implicit : 'Rohit Brand' } $implicit is the default key then for fetching take any name
 *
 * e.g
 *   Common Template which we can use anywhere
 *      <ng-template #brand>
 *              <div>Template which we need use on multiple places like image and brand name</div>
 *              <img src="http://picsum.photos/200" alt=""/>
 *              <h3>Brand Name</h3>
 *      </ng-template>
 *
 *  Q. How to use above template?
 *      => <ng-container [ngTemplateOutlet]="brand"></ng-container> or any element like div
 *
 *  Q. But How to render brand name dynamic or change img url ?
 *      => We need to pass the data which we call it as "context"
 *
 *         <ng-container [ngTemplateOutlet]="brand; context: { name: 'Rohit Brand' , imageURL: 'http://picsum.photos/400'}"></ng-container>
 *
 *
 *  Q. How to get passed data in ng-template?
 *      let-data => to fetch data
 *      let-n="name" => alias of propertities
 *      let-imgURL="imageURL" => alias of propertities
 *
 *      <ng-template #brand let-data let-n="name" let-imgURL="imageURL">
 *              <div>Template which we need use on multiple places like image and brand name</div>
 *              <img src="{{imgURL}}" alt=""/>
 *              <h3>{{n}}</h3>
 *      </ng-template>
 *
 */

/******* Content Projection (will create configurable components) ****************** Content Projection ***************** Content Projection ***************************************************/
/******* Content Projection ****************** Content Projection ***************** Content Projection ***************************************************/
/******* Content Projection ****************** Content Projection ***************** Content Projection ***************************************************/

/**
 * Display parent html code which is written inside child selector into child html through <ng-content></ng-content>
 *
 * We can pass data through @Input but can we pass html template to child ?  => YES we can pass
 * We can pass html from parent and will display that html through <ng-content></ng-content> in child
 *
 * app.component.html
 *
 * AVOID: <app-input [type]="'text'" [value]="'2'" [placeholder]="'John'"></app-input>
 *      => because we have to write many lines of code in child like @Input type; @Input value; ...
 *         and for handling events we have to use @Output and all) so we can get rid of all this by doing below thing
 *
 * USE:
 *  <app-input> // child component instead of passing dynamic inputs(type,placeholder,value, etc.) to the app-input send html directly
 *      <label class="label">Email Address</label>
 *      <input type="text" (keyup.change)="handleEv($event)" placeholder="Company email"/>
 *      <small id="smallCase">Your company email</small>
 *      // we are just using here but control of this element is with app.component.ts file not with input.component.ts
 *  </app-input>
 *
 * app.component.ts
 *
 * @Component({
 *      selector: '<app-component></app-component>'
 * })
 *      handleEv(ev){
 *              console.log("You will get data here", ev)
 *      }
 *
 *
 * input.component.html
 *      <span> I belongs to input.component.html </span>
 *      <span> I also belongs to input.component.html </span>
 *
 *      // We are projecting some content here from parent component
 *      <ng-content></ng-content> // I belongs to app.component.ts file which is parent
 *
 *      NOTE: <ng-content></ng-content> will display all data directly
 *
 *      we can use multiple <ng-content> like:
 *              <ng-content select="label"></ng-content> //so label tag will display here
 *              <ng-content></ng-content> remaining code will go here
 *              <ng-content select="small"></ng-content> //so small tag will display here
 *
 *   or select based on class or id etc
 *              <ng-content select=".label"></ng-content> //so label tag will display here
 *              <ng-content select="[id="smallCase"]"></ng-content>
 *
 *  IMPORTANT::IMPORTANT::IMPORTANT::IMPORTANT::IMPORTANT::IMPORTANT
 *  IMPORTANT::IMPORTANT::IMPORTANT::IMPORTANT::IMPORTANT::IMPORTANT
 *
 *  but if you write <ng-content> multiple time without "select" it will just print only once
 *
 *              why? why? why? it should print multiple times right? the answer is NO
 *      Reason:
 *              Performance
 *
 * input.component.ts
 * @Component({
 *      selector: '<app-input></app-input>'
 * })
 */


/******* TemplateRef & TemplateContainerRef ****************** TemplateRef & TemplateContainerRef ***************** TemplateRef & TemplateContainerRef ********************/
/******* TemplateRef & TemplateContainerRef ****************** TemplateRef & TemplateContainerRef ***************** TemplateRef & TemplateContainerRef ********************/
/******* TemplateRef & TemplateContainerRef ****************** TemplateRef & TemplateContainerRef ***************** TemplateRef & TemplateContainerRef ********************/

/**
 * To create structural custom directives we used TemplateRef and TemplateContainerRef
 * e.g *myOwnIf
 *
 * import {TemplateRef, ViewContainerRef} from '@angular/core';
 * @Directive({
 *      selector: [myOwnIf]
 * })
 * constructor(public viewContainerRef: ViewContainerRef, public templateRef: TemplateRef<Object> ){}
 * ngOnInit(){
 *      const condition = true;
 *      if(condition){
 *              this.viewContainerRef.createEmbeddedView(this.templateRef);
 *      }else{
 *              this.viewContainerRef.clear()
 *      }
 * }
 *
 * <div *myOwnIf>Hello Rohit</div>
 *
 *
 */

/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/


/**
 * What is difference between Subject, BehaviourSubject and ReplaySubject
 *
 * Subject: It will not hold any value (Only Upcoming Values)
 * BehaviourSubject: We can set initial value and it can hold one value (One Previous Value & Upcoming Values)
 * ReplaySubject: It can hold more than one value.(All Previous Values & Upcoming Values)
 * AsyncSubject: (Latest Value when stream will close)
 */


/******** RXJS ************************* RXJS *********************** RXJS ************ RXJS ********** RXJS *************** RXJS *************************************************/
/******** RXJS ***************** RXJS ************* RXJS ****************** RXJS ********** RXJS ******** RXJS ************** RXJS ******************************************************/

/**
 * How RXJS works?
 */


/**
 * What is map and switchMap?
 *
 *      Observable => is a data source which emit the data
 *      Subscribe => which receives the emitted data.
 *
 *      Observable I have uploaded the video to my channel
 *      -----(Youtube Video 1)-----(Youtube Video 2)-----(Youtube Video 3)------->
 *
 *      those who subscribe my channel they will get my videos
 *
 *      -----(Youtube Video 1)-----(Youtube Video 2)-----(Youtube Video 3)------->
 *
 * .map() => Transformation Operator used to transform the items emited by an overvable by applying a function to each item.
 *
 *
 * SwitchMap() => take latest data and cancel all other request.
 * => used for flattening
 *
 */


/**
 * What is Flattening?
 * => Flattening means rescue when we have a nested subscription.
 *    i.e, Observable ke resopnse ke under aur ek observable
 */


/**
 * What is ExhaustMap? We use this to improve app performance
 *      (cancels all clicks event and only take the latest click.)
 *
 * E.g:
 *     consider Login button will have login api.
 *     If we call login button multiple times very fastly it will impact on our application performance because multiple api will fire.
 *
 *     to avoid this we use Exhaust Map.
 *
 */

/**
 * .tap() operator in rxjs?
 *
 * tap will perform an action like click event
 * Tap operator is useful for logging the value, debugging the stream for the correct values, or perform any other side effects.
 *
 * .tap(()=>{console.log("log any value")})
 */

/**
 * List few operator in rxjs?
 */
