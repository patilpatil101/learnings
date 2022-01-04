/***********************************************************************************************************/
/************** This documentation is written by Rohit Patil (7888226600) *********************************/
/***********************************************************************************************************/

/**
 *  What are position available in css explain all
 */

/**
 * BEM (Block, Element, Modifire) Methodology ? 
 */

/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/

/**
 * CSS & SCSS
 */

// SASS vs SCSS (In SASS brackets are not required)

/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/


/**
 * CSS Limitations
 *
 * No Nesting of classes
 * No Variables
 * CSS cannot perform any logical operations like if/else or for/while or +/-.
 * CSS has no concept of sibling relationships. For example, it is impossible to write a CSS stylesheet that will render every other paragraph in bold
 */
/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/


//CSS Selectors

// Simple selectors (select elements based on name, id, class)  . #
// Combinator selectors (select elements based on a specific relationship between them) > ~ 
// Grouping Selector   h1, h2, p { text-align: center; color: red;}
// Attribute selectors (aka Type selectors) (select elements based on an attribute or attribute value) a[target="_blank"], input[type="text"]

/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/


// CSS Style Components

// Selector  =>  HTML element name, id name, class name.
// Property  => It's like an attribute such as background color,font-size,position,text-align,color,border etc.
// Values    => which defines property or values allocate for properties.

/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/


/**
 * Flexbox & CSS Grid 
 */

//  When to go for Flexbox
// Answer: do I only need to control the layout by row or column – use a flexbox

// When to go for CSS Grid
// Answer: do I need to control the layout by row and column – use a grid

// Why padding not collpasing
// Answer:  Since paddings are inside of elements, I don't think it would make sense.

/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/

/**
 * Difference Between justify-content(x-axis) vs align-items(y-axis) ? 
 * 
 * Ans:
 * *         => =>  justify-content: Horizontal   (Alignment & Spacing along primary axis {X-axis})
 * 
 *          1. flex-start;       Align children horizontally left
 *          2. flex-end;         Align children horizontally right
 *          3. center;           Align children horizontally centered (amaze!)
 *          4. space-between;    Distribute children horizontally evenly across entire width
 *          5. space-around;     Distribute children horizontally evenly across entire width (but with space on the edges)
 * 
 * 
 *  *       => =>  align-items: Vertical   (Alignment only along secondary axis {Y-axis})
 * 
 *          1. flex-start;  Align children vertically top
 *          2. flex-end;    Align children vertically bottom
 *          3. center;      Align children vertically centered (amaze!)
 *          4. baseline;    Aligned children vertically so their baselines align (doesn't really work)
 *          5. stretch;     Force children to be height of container (great for columns)
 * 
 */


/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/

//How to reverse the order of span like:  content3 content2 content1
//How to reverse the order of span like:  content3 content2 content1
//How to reverse the order of span like:  content3 content2 content1

{/* <div class="wrapper">
    <span>content1</span>
    <span>content2</span>
    <span>content3</span>
</div> 

     Output of this is:  //content1 content2 content3 but we want  => => content3 content2 content1
*/}

/**
 * Ans:
 *      .wrapper{
                display: flex;
                flex-direction: row-reverse;                    //IMP
                justify-content: flex-end;
         }
 */

/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/

/**
 * Print this like
 *
 * 1  4  7
 * 2  5  8
 * 3  6  9
 */

{/* <div class="grid-container">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
    <div class="grid-item">7</div>
    <div class="grid-item">8</div>
    <div class="grid-item">9</div>
</div> */}

/**
 *  Answer:
 *
 *                  display: grid;
 *                  grid-template-rows: 20px 20px 20px;
 *                  grid-auto-flow: column;                         //IMP
 */


/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/


/**
 * Actual work of Flexbox?
 *          &
 * Actual work of CSS Grid ?
 *
 * How both works with DOM?
 */

/***********************************************************************************************************/
/***********************************************************************************************************/

/**
 * Mixins and How to call Mixins?
 *
 */

/**
 * Placeholder in scss
 */


