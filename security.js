/***********************************************************************************************************/
/************** This documentation is written by Rohit Patil (7888226600) *********************************/
/***********************************************************************************************************/

/**
 * Security
 */


/**
 * Basic Authentication => username/password with base64 ID  => in headers Basic <base64ID>
 * Bearer Authentication => (Token Authentication) => in headers Bearer <497a7f4980c28c58173c2c4df164a720>
 */

/**
 * What is CORS? Why this error occours ? How to prevent this error?
 * Defination:
 *         Cross-origin resource sharing
 *      This erros occours when same origin are present in front-end & back-end
 *      front-end: localhost:4200
 *      back-end: localhost: 3000
 *
 *      localhost is origin here & its same.
 *
 *      To avoid this we need to set headers either we can set into front-end app or we can set it to back-end app
 *
 *      For front-end we need to create --proxy.conf file
 *      {
 *         "/api/*": {
 *             "target": "http://localhost:3000",
 *             "secure": false,
 *             "logLevel": "debug",
 *             "changeOrigin": true
 *         }
 *     }
 *
 */

/**
 * What is Cross Site Scripting ( XSS attack )?
 * Defination:
 *         Cross-site Scripting (XSS) is a client-side code injection attack.
 *         The actual attack occurs when the user visits the web page that executes the malicious code
 *
 * How to Prevent?
 *    1. Angular will removed all <script></script> tag from our application to avoid Cross Site Scripting
 *    2. To prevent Cross Site Scripting we need to configure the Content Security Policy
 *
 * How to configure ?
 *  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';">
 *  or
 *  We can use the Content-Security-Policy HTTP header to specify your policy, like this:
 *  Content-Security-Policy: policy
 */

/**
 * What is Content Security Policy?
 *  Defination:
 *         Content Security Policy is a computer security standard introduced to prevent cross-site scripting
 *         To prevent Cross Site Scripting we need to configure the Content Security Policy
 *  How to configure ?
 *  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';">
 *  or
 *  We can use the Content-Security-Policy HTTP header to specify your policy, like this:
 *  Content-Security-Policy: policy
 */

/**
 * What is Cross Site Request Forgery? How to handle?
 *
 * The CookieXSRFStrategy class (within the XHRConnection class) takes care of preventing CSRF/XSRF attacks.
 * Note that the CSRF/XSRF protection is enabled by default on the client but only works
 * if the backend sets a cookie named XSRF-TOKEN with a random value when the user authenticates
 */

/**
* What is Open Web App Security (OWAS)?
*/

/**
* What is Angular Security?
*/

