/***********************************************************************************************************/
/************** This documentation is written by Rohit Patil (7888226600) *********************************/
/***********************************************************************************************************/

/**
 * NodeJS & ExpressJS
 */

/***********************************************************************************************************/
/***********************************************************************************************************/

/**
 * REST APIS
 */


/**
 * GET - requests data from the resource and should not produce any side effect.
 */

/**
 * POST - method requests the server to create a resource in the database, mostly when a web form is submitted.
 * Post is non - idempotent which means multiple requests will have different effects.
 */

/**
 * PUT - method requests the server to update a resource or { create the resource }, if it doesn’t exist.
 * Put is idempotent which means multiple requests will have the same effects.
 */

/**
 * DELETE - method requests that the resources, or its instance, should be removed from the database.
 */


/***********************************************************************************************************/
/***********************************************************************************************************/

/**
 * Best ExpressJS, NodeJS and MongoDB Project Structures
 */

/**
 * Beginner
 *
 * node_modules
 * src
 *      config -> db configurations
 *      helpers -> common functions
 *      models -> MongoDB Schemas
 *      routes -> api, api2, api3
 *      index.js -> server code (js file which will runs first)
 *      .env
 *      .gitignore
 *      .package.json
 *      .package.lock.json
 */

/**
 * Intermidiate (think about design pattern e.g MVC)
 *
 * node_modules
 * src
 *      api
 *          controllers
 *          helpers -> common functions, common files e.g errors.js, http-errors.js, is-valid-email.js
 *          middlewares
 *          models -> db schemas
 *          routes -> users.js, authentication.js etc.
 *          services -> business logic
 *          validations
 *
 *      config -> db configurations
 *      index.js -> server code (js file which will runs first)
 *      .env
 *      .gitignore
 *      .package.json
 *      .package-lock.json
 */

/**
 * Advance Level (use typescript, testing, eslint)
 *  e.g api-url:   https://api.selluseller.com/api2/v1/dashboard/top_performers?days=7days
 *                 https://api.selluseller.com/api/v1/registrations/validate_email
 *                 https://api.selluseller.com/api/logout
 *
 * node_modules
 * src
 *      api
 *          v1 -> controllers, helpers, interfaces, middlewares, models, routes, services, validations
 *          v2 -> controllers, helpers, interfaces, middlewares, models, routes, services, validations
 *          v3 -> controllers, helpers, interfaces, middlewares, models, routes, services, validations
 *
 *      api1
 *          v1 -> controllers, helpers, interfaces, middlewares, models, routes, services, validations
 *          v2 -> controllers, helpers, interfaces, middlewares, models, routes, services, validations
 *          v3 -> controllers, helpers, interfaces, middlewares, models, routes, services, validations
 *
 *      api2
 *          v1 -> controllers, helpers, interfaces, middlewares, models, routes, services, validations
 *          v2 -> controllers, helpers, interfaces, middlewares, models, routes, services, validations
 *          v3 -> controllers, helpers, interfaces, middlewares, models, routes, services, validations
 *
 *      config
 *          swagger -> api documentation
 *          constants.js
 *          db.config.ts
 *          logger.ts -> allows you to improve your console capabilities
 *      index.ts
 *      .env
 *      .eslintignore
 *      .gitignore
 *      .package.json
 *      .package-lock.json
 *
 */


/***********************************************************************************************************/
/***********************************************************************************************************/

/**
 * Nodemon -> watch our code and when save it reflects those changes. like in angular when we save it updates
 */

/***********************************************************************************************************/
/***********************************************************************************************************/

/**
 * Named Exports (requires bracket when import) vs Default Exports (does not requires bracket when import AND only {ONE PER MODULE} else error:  Duplicate export of 'defaults')
 *
 * Named Exports -> It requires bracket when import
 *
 * //user.js
 * export function getName(){
 *  return 'Rohit';
 * }
 *
 * import { getName } from './user'     // THIS IS A { Named Export }
 *
 *
 * Default Exports -> It does not requires bracket when import
 *
 * const express from 'express';
 * const router = express.Router();
 * router.get('/',()=>{console.log('Welcome to Home')})
 *
 * export default router;
 *
 *
 * import pantRoutes from '../src/routes/pant'; // this is a dummy path
 *
 *
 */


/********** List Few Npm Package ********** List Few Npm Package ************* List Few Npm Package *******/
/********** List Few Npm Package ********** List Few Npm Package ************* List Few Npm Package *******/
/********** List Few Npm Package ********** List Few Npm Package ************* List Few Npm Package *******/




/********** Explain util & http package ********** Explain util & http package ************* Explain util & http package *******/
/********** Explain util & http package ********** Explain util & http package ************* Explain util & http package *******/
/********** Explain util & http package ********** Explain util & http package ************* Explain util & http package *******/


/**
 * How to debug express app?
 *  =>
 */

/**
 * What is the difference between Framework, Library and Environment
 */

/**
 * How to handle concurrency in nodejs?
 */

/**
 * Error first callback vs normal callback
 */

/**
 * What is thread pool?
 */

/**
 * What is Libuv?
 */

/**
 * What is next paramter in express js?
 */