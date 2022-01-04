/***********************************************************************************************************/
/************** This documentation is written by Rohit Patil (7888226600) *********************************/
/***********************************************************************************************************/

/**
 * Optimization
 */

/**
 * Ways to optimize Angular App?
 *
 *    1. ChangeDetectionStrategy.OnPush
 *    2. Detaching the Change Detector
 *    3. Local Change Detection
 *    4. Run outside Angular (NgZone)
 *    5. Use pure pipes
 *    6. Use trackBy option for *ngFor directive
 *    7. Optimize template expressions
 *    8. Web Workers
 *    9. Lazy-Loading
 *    10. Preloading
 */

/**
 * How to reduce build size of our angular application?
 *
 * ANS:
 * ng build --prod --configuration=test --outputHashing=all --source-map=false
 */

/**
 *  Souce Map
 *
 * Ans: When we build the Angular application, js files and js.map (source map) files are created. At its core,
 * a source map is a JSON file that contains all the necessary information to map the transpiled code back to the original sources.
 *
 * --source-map=false     => disable generation of source maps
 */


/**
 * outputHashing=all
 *
 * Ans:  hash contents of the generated files and append hash to the file name to facilitate browser cache busting
 * (any change to file content will result in different hash and hence browser is forced to load a new version of the file
 */


/**
 * What is webpack bundle analyzer ?
 * Defination:
 *         It creates a tree map & This map is useful for finding what are the npm packages that are adding the most to your bundle size
 *
 * How to Run?
 *    commands:
 *      1. generate stats.json => webpack --profile --json | Out-file 'stats.json' -Encoding OEM
 *      2. run webpack bundle  => webpack-bundle-analyzer bundle/output/path/stats.json
 */

/**
* How to find which module is heavily loaded ?
*/

/**
* When loading at first time 6MB file is getting downloaded in users machine, How to reduce it to 3MB?
*/