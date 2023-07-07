/* 
How to prepare for and handle errors 
*/

    function siteComponent(func) {
      return func();
    }
    widget = () => {
      return '<div>Hi there</div>';
    }

// siteComponent expects a function, so if we pass a string it will not work.


// With try-catch, we basically say try this, if it doesn't work catch the error (e) and do this other thing instead.
    try {
      console.log(siteComponent('oops'));
    } catch(e) {
      console.log('An error occurred', e);
    }
    console.log(siteComponent(widget));