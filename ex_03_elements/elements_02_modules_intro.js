/* 
Intro to Modules, or how to brak your projects apart into smaller parts that work together
*/

// This will be a text intro, but i didn't realize till a few mins into the lesson, so we stay in js


/* 
It is done through "imports". Thta way you can select what part works with which
*/


// ES6 Syntax
// it is a frame that makes it easier to work with frameworks -> It is included in the course and i recommend gettingit, i just can't get it in my desktop.


/* 
Adding import into the programs
*/

// It's recommended to separate snippets with different tasks in different files, and then connecting them as needed

// Imagine we create a helper.js file, and in it we introduce a function in our case "multiply"
// Once it is created, we need to export it with export:
	/* export function multiply(numOne, numTwo) { 
  return numOne * numTwo;
} */

// We then can call that function in any other file by naming it and writing the path to it:
	// import { multiply } from './helper';



// Multiple import/exports ->

/* 
Just add a comma:
	import { multiply, compare, divide } from './helper';

You can also import all adn set an alias:
	import * as helper from './helper';

Now we can use it as a library, like: helper.multiply();
*/

// Default import-export ->

/* 
If you type:
	in "greeting" file:
	export default function() {
		-> Stuff here that gets exported <-
	}

There can only be a single default export, but there can be other named exports and can be imported as:

import greeting from './greeting'; // for the default
import greeting, { multiply, divide } from './greeting'; // for multiple

*/
