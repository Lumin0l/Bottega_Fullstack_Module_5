/* Popular functions in the moment library */

// first, you need to import moment (i installed it locally)

import moment from 'moment';

// Returns a number: the number of seconds since 1970. They are called "epic-timestamps". Works for calculations, and buffers...
console.log(moment.now());

// moment() itself, called like a function returns the current date and time:
var rightnow = moment();
console.log(rightnow); // this will print the current date and time.

	// If it's empty it will return the current time, but it admits parameters, such as: a date and it's format:
	const today = moment('13-07-2023', 'dd-mm-yyyy');
	console.log(today);

	// then it has special syntax keys:
	console.log(today.format('dddd')); // This will print the day of the week in letters
	console.log(today.fromNow()); // This will tell how long ago was that.
	// they are all in the documentation.

// We can create useful things such as timers or reminders:
const twoWeeksFromNow = moment().add(14, 'days');
const other_twoWeeksFromNow = moment().add(2, 'weeks');