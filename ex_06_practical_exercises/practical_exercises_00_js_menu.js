/* 
Exercise with the following instructions:
	Build out a Diner menu in JAVASCRIPT. Here are your instructions to build that Diner.
	Bottega Diner
	Have the Main Menu and a Sides Menu
	You get one entree and two side choices at regular cost.
	- show them the entire menu (print out)
	- A user selects an entree.
	- “Waitress” makes a comment based on their selection
	- comment can either be a comparison of the two items, or random comment pulled from a comment vault.
	- Tell them the price
	- repeat the above options for side choices (comment and a price)
	- total up the cost

	BONUS
	Have breakfast, lunch, and dinner menu. Breakfast has different items, lunch and dinner have the same items but are different prices.

	BONUS: Allow for item customization (how items are prepared, decide additional cost implications)
*/


/* Pseudocode:
	- Create a function called Bottega_Diner
	- Create a variable called lunchEntreeMenu and assign it to an class with dish name and prize pairs
	- Create a variable called lunchSidesMenu and assign it to an class with dish name and prize pairs
	- Create a variable called dinnerEntreeMenu and assign it to an class with same dish names as lunchEntreeMenu but different prize pairs
	- Create a variable called dinnerSidesMenu and assign it to an class with same dish names as lunchSidesMenu but different prize pairs
	- Create a variable called breakfastEntreeMenu and assign it to an class with dish name and prize pairs
	- Create a variable called breakfastSidesMenu and assign it to an class with dish name and prize pairs
	- Create a variable called waitressComments and assign it to a class with dish names and comments pairs

	- Create a function called showMenu, first prints menu names "Lunch Menu", "Dinner Menu", "Breakfast Menu", user selects one of them, prints the menu with dish names and prizes. If the user input is not a match with the menu names in upper or lowercase, print "sorry, we don't have that menu, select one of these: " and repeat the list of menus. when done, prints message "please, select an entree: ". If the entree is not in the list print "that is not in the menu, please select an entree from the menu"
	- Store the user selection in a variable class called userSelection, with name and prize
	- Create a function called waitressComment, takes userSelection as a parameter, prints a comment based on the userSelection. Prints prize of the dish. When done prints message "please, select two sides". and outputs the input option message "side 1: ?". If the side is not in the list print "that is not in the menu, please select a side from the menu"
	- Store the user selection in a variable class called userSelectionSide1, with name and prize
	- Create a function called waitressCommentSide1, takes userSelectionSide1 as a parameter, prints a comment based on the userSelectionSide1. Prints prize of the dish. When done prints message "please, select a second side". and outputs the input option message "side 2: ?". If the side is not in the list print "that is not in the menu, please select a side from the menu"
	- Output the question "side 2: ?". If the side is not in the list print "that is not in the menu, please select a side from the menu"
	- Store the user selection in a variable class called userSelectionSide2, with name and prize
	- Create a function called waitressCommentSide2, takes userSelectionSide2 as a parameter, prints a comment based on the userSelectionSide2. Prints prize of the dish. When done prints message "please, select a second side". and outputs the input option message "side 2: ?". If the side is not in the list print "that is not in the menu, please select a side from the menu"
	- Create a function called totalCost, takes userSelection, userSelectionSide1 and userSelectionSide2 as parameters, prints the total cost of the order
	- Integrate all the functions in the Bottega_Diner function

*/

// Define the menu options for lunch, dinner, and breakfast
const lunchEntreeMenu = [
  { name: 'Rice', price: 6 },
  { name: 'Pasta', price: 12 },
  { name: 'Salad', price: 8 },
  { name: 'Burger', price: 10 },
  { name: 'Sandwich', price: 9 },
  { name: 'Pizza', price: 14 },
];

const lunchSidesMenu = [
  { name: 'Mashrooms', price: 4 },
  { name: 'Chicken', price: 5 },
  { name: 'French Fries', price: 3 },
  { name: 'Soup', price: 4 },
  { name: 'Onion Rings', price: 4 },
  { name: 'Caesar Salad', price: 5 },
];

const dinnerEntreeMenu = [
  { name: 'Rice', price: 8 },
  { name: 'Pasta', price: 14 },
  { name: 'Salad', price: 10 },
  { name: 'Burger', price: 12 },
  { name: 'Sandwich', price: 11 },
  { name: 'Pizza', price: 16 },
];

const dinnerSidesMenu = [
  { name: 'Mashrooms', price: 6 },
  { name: 'Chicken', price: 7 },
  { name: 'French Fries', price: 5 },
  { name: 'Soup', price: 6 },
  { name: 'Onion Rings', price: 6 },
  { name: 'Caesar Salad', price: 7 },
];

const breakfastEntreeMenu = [
  { name: 'Pancakes', price: 8 },
  { name: 'Eggs Benedict', price: 12 },
  { name: 'French Toast', price: 9 },
  { name: 'Omelette', price: 10 },
  { name: 'Breakfast Burrito', price: 11 },
  { name: 'Avocado Toast', price: 9 },
];

const breakfastSidesMenu = [
  { name: 'Bacon', price: 3 },
  { name: 'Sausage', price: 3 },
  { name: 'Fresh Fruit', price: 4 },
  { name: 'Hash Browns', price: 4 },
  { name: 'Yogurt Parfait', price: 5 },
  { name: 'Bagel with Cream Cheese', price: 3 },
];

const waitressComments = {
  "Rice": "Rice is a classic choice! It pairs well with many sides on our menu.",
  "Pasta": "Our pasta is a customer favorite. It comes with your choice of sauce - Alfredo, Marinara, or Pesto.",
  "Salad": "The salad is a healthy and refreshing option. You can add chicken or shrimp for extra protein.",
  "Burger": "Our burgers are handcrafted and juicy. They come with your choice of toppings and cheese.",
  "Sandwich": "Our sandwiches are made with fresh ingredients. Try the Club Sandwich for a satisfying meal.",
  "Pizza": "Our pizzas are freshly baked with a variety of toppings to choose from. Perfect for sharing!",
  "Mashrooms": "The mashed mushrooms have a rich and savory flavor that complements many dishes.",
  "Chicken": "Our chicken is grilled to perfection. You can choose from various marinades.",
  "French Fries": "Crispy and golden, our french fries are a classic side that goes well with any entree.",
  "Soup": "The soup of the day is a delicious choice. It comes with freshly baked bread.",
  "Onion Rings": "Our onion rings are crunchy and flavorful. They are a great choice for a side.",
  "Caesar Salad": "The Caesar salad is a timeless option. It's topped with our house-made dressing and croutons.",
  "Pancakes": "Our fluffy pancakes are a breakfast favorite. Enjoy them with maple syrup and fresh berries.",
  "Eggs Benedict": "Eggs Benedict is a classic breakfast dish. It comes with hollandaise sauce and your choice of ham or spinach.",
  "French Toast": "Our French toast is made with thick slices of brioche bread, served with powdered sugar and warm maple syrup.",
  "Omelette": "Create your own omelette with your favorite ingredients - cheese, vegetables, and meats.",
  "Breakfast Burrito": "Our breakfast burrito is packed with eggs, bacon, sausage, and cheese. It's a hearty morning option.",
  "Avocado Toast": "Avocado toast is a healthy and delicious choice. It comes with a sprinkle of chili flakes and lemon zest.",
  "Bacon": "Crispy and savory, our bacon is the perfect addition to any breakfast.",
  "Sausage": "Our sausage links are made from a special blend of spices. They are a popular side choice.",
  "Fresh Fruit": "Start your day with a refreshing bowl of fresh fruit. It's a light and nutritious option.",
  "Hash Browns": "Our hash browns are crispy on the outside and tender on the inside. They pair well with any breakfast entree.",
  "Yogurt Parfait": "Our yogurt parfait is a delightful mix of yogurt, granola, and fresh berries.",
  "Bagel with Cream Cheese": "Enjoy a classic bagel with cream cheese - a timeless breakfast choice."
};



// Define functions to display menus, get user selection, and calculate the total cost
function selectMenu() {
  // Display the list of menus
  console.log("Please choose a menu:");
  console.log("1. Lunch Menu");
  console.log("2. Dinner Menu");
  console.log("3. Breakfast Menu");

  // ¡¡¡ Get user selection using prompt !!!
  const userInput = prompt("Enter the number of your choice (1, 2, or 3):");

  // Process the user input
  if (userInput === "1") {
    console.log("You selected the Lunch Menu!");
	return "Lunch Menu";
  } else if (userInput === "2") {
    console.log("You selected the Dinner Menu!");
	return "Dinner Menu";
  } else if (userInput === "3") {
    console.log("You selected the Breakfast Menu!");
	return "Breakfast Menu";
  } else {
    // Invalid input
    console.log("Invalid choice. Please enter 1, 2, or 3.");
	console.log("1. Lunch Menu");
  	console.log("2. Dinner Menu");
  	console.log("3. Breakfast Menu");
	const userInput = prompt("Enter the number of your choice (1, 2, or 3):");
  }
}

function showEntreeMenu(menu) {
	  // Display the menu
  console.log("Here is the " + menu + ":");
  console.log("Entrees:");
  for (let i = 0; i < entreeMenu.length; i++) {
	console.log(entreeMenu[i].name + " - $" + entreeMenu[i].price);
  }

  // Get user selection
  const userInput = prompt("Enter the name of your entree choice:");
  	// check if correct input
	for (let i = 0; i < entreeMenu.length; i++) {
		if (userInput === entreeMenu[i].name) {
			console.log("You selected " + userInput + ".");
			console.log("That will be $" + entreeMenu[i].price + ".");
			console.log("waitressComment(userInput)");
			return userInput;
	  	}
	}
	// Invalid input
	console.log("Invalid choice. Please enter a valid entree from the menu.");
	showEntreeMenu(menu);
}

function showSidesMenu(menu) {
	  // Display the menu
  console.log("Here is the " + menu + ":");
  console.log("Sides:");
  for (let i = 0; i < entreeMenu.length; i++) {
	console.log(entreeMenu[i].name + " - $" + entreeMenu[i].price);
  }

  // Get user selection
  const userInput = prompt("Enter the name of your entree choice:");
  	// check if correct input
	for (let i = 0; i < sidesMenu.length; i++) {
		if (userInput === entreeMenu[i].name) {
			console.log("You selected " + userInput + ".");
			console.log("That will be $" + entreeMenu[i].price + ".");
			console.log("waitressComment(userInput)");
			return userInput;
	  	}
	}
	// Invalid input
	console.log("Invalid choice. Please enter a valid entree from the menu.");
	showEntreeMenu(menu);
}

function waitressComment(selection) {
  // Implement the logic to generate a comment based on the selection
}

function waitressCommentSide1(selection) {
  // Implement the logic to generate a comment for the first side selection
}

function waitressCommentSide2(selection) {
  // Implement the logic to generate a comment for the second side selection
}

function totalCost(entree, side1, side2) {
  // Implement the logic to calculate the total cost
}

function Bottega_Diner() {
  // Implement the logic to integrate all the functions
}

// Call the main function to start the Diner program
Bottega_Diner();
