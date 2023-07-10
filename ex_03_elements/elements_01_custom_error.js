/* 
How to create custom errors in js
*/

// we do that by using 'extend', which extends the standard error


// We create it with a class that has a constructor part
class DevcampError extends Error {
	constructor(msg = 'An error occurred', ...params) {
		// with super we inherit the bigger class "Error"
		super(...params);

	  this.msg = msg;
	}
  }


  function siteComponent(func) {
	return func();
  }

  try {
	console.log(siteComponent('oops'));
  } catch(e) {
	// With "throw" we launch the custom error
	throw new DevcampError('DevcampError', e);
  }

  widget = () => {
	return '<div>Hi there</div>';
  }
