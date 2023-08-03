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

		function waitressComment(item) {
			 const comment = waitressComments[item];
        if (comment) {
          console.log("Waitress Comment: " + comment);
        }
      }

		function showSidesMenu(menu) {
			// Display the menu
			console.log("Here are the sides options for " + menu + ":");
			console.log("Sides:");
			const sidesMenu = menu === "Lunch Menu" ? lunchSidesMenu : dinnerSidesMenu;

			for (let i = 0; i < sidesMenu.length; i++) {
				console.log(sidesMenu[i].name + " - $" + sidesMenu[i].price);
			}

			// Get user selection
			const userInput1 = prompt("Enter the name of your first side choice:");
			const userInput2 = prompt("Enter the name of your second side choice:");

			// check if correct input
			const side1 = sidesMenu.find((side) => side.name === userInput1);
			const side2 = sidesMenu.find((side) => side.name === userInput2);

			if (!side1 || !side2) {
				// Invalid input
				console.log("Invalid choice. Please enter valid sides from the menu.");
				showSidesMenu(menu);
			} else {
				console.log("You selected " + side1.name + " and " + side2.name + ".");
				console.log("That will be $" + (side1.price + side2.price) + ".");
				waitressComment(side1.name);
        waitressComment(side2.name);
				return [side1, side2];
			}
		}

		function totalCost(entree, side1, side2) {
			// Implement the logic to calculate the total cost
			const entreePrice = entree.price;
			const side1Price = side1.price;
			const side2Price = side2.price;
			const totalCost = entreePrice + side1Price + side2Price;

			return totalCost;
		}

		function selectMenu() {
			// Display the list of menus
			console.log("Please choose a menu:");
			console.log("1. Lunch Menu");
			console.log("2. Dinner Menu");
			console.log("3. Breakfast Menu");

			// Get user selection using prompt
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
				return selectMenu();
			}
		}

		function Bottega_Diner() {
			// Get user menu selection
			const selectedMenu = selectMenu();

			// Get user entree selection
			let entreeMenu;
			if (selectedMenu === "Lunch Menu") {
				entreeMenu = lunchEntreeMenu;
			} else if (selectedMenu === "Dinner Menu") {
				entreeMenu = dinnerEntreeMenu;
			} else if (selectedMenu === "Breakfast Menu") {
				entreeMenu = breakfastEntreeMenu;
			}

			const userInputEntree = prompt("Enter the name of your entree choice:");

			// check if correct input
			const entree = entreeMenu.find((item) => item.name === userInputEntree);

			if (!entree) {
				// Invalid input
				console.log("Invalid choice. Please enter a valid entree from the menu.");
				Bottega_Diner();
			} else {
				console.log("You selected " + entree.name + ".");
				console.log("That will be $" + entree.price + ".");
				waitressComment(side1.name);
        waitressComment(side2.name);

				// Get user sides selection
				const [side1, side2] = showSidesMenu(selectedMenu);

				// Calculate and display the total cost
				const total = totalCost(entree, side1, side2);
				const resultDiv = document.getElementById('result');
				resultDiv.innerHTML = `<h1>Total Cost: ${total} $</h1>`;
			}
		}

		// Call the main function to start the Diner program
		Bottega_Diner();
