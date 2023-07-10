/* 
Management of errors when working with APIs
*/


// We create the error the normal way, extending the "Error" class.
class ApiError extends Error {
	constructor(msg = 'An api error occurred', ...params) {
	  super(...params);
	  this.msg = msg;
	}
  }

  // create a var named request and give it the library function XMLHttpRequest
  var request = new XMLHttpRequest();
  // Now we open the content of the API using the "GET" Method.
  request.open('GET', 'http://api.dailysmarty.com/oops', true);
  // we trigger a nameless function on load.
  request.onload = function() {
	// We create a condition to trigger our custom error when the status of the GET is an error:
	if (request.status >= 200 && request.status < 400) {
	  var data = JSON.parse(request.responseText);
	  console.log(data);
	} else {
	  throw new ApiError('ApiError', `An API error occurred with a status code of ${request.status}`);
	}
  };
  request.send();