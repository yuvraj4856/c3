// Define the users and their corresponding data
const users = {
	"nikhil123": {
		name: "Nikhil verma",
		pass: "nikhil",
		src: "https://tesla-cdn.thron.com/delivery/public/image/tesla/03c34975-991c-45ee-a340-2b700bf7de01/bvlatuR/std/960x540/meet-your-tesla_model-s?20190221",
		car: {
			company: "Tesla",
			model: "Model S",
			year: 2021,
			color: "white"
		}
		
		
	},
	"litesh123": {
		name: "Litesh Grover",
		pass: "litesh",
		src: "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/CamryModelImage.jpg",
		car: {
		    company: "Toyota",
			model: "Camry",
			year: 2022,
			color: "white"
		}
	},
	"yuvraj123": {
		name: "Yuvraj Sekhon ",
		pass: "yuvraj",
		src: "https://cars.usnews.com/static/images/Auto/izmo/i159614768/2022_honda_civic_sedan_angularfront.jpg",
		car: {
			company: "Honda",
			model: "Civic",
			year: 2020,
			color: "black"
		}
	}
};

// Handle the form submission
$("#login-form").submit(function(event) {
	event.preventDefault();

	const username = $("#username").val();
	const password = $("#password").val();

	
	// Check if the user exists
	if (users.hasOwnProperty(username)) {

		// Check if the password is correct
		const user = users[username];
		console.log(username);
		if (password === user.pass) {
			
			// Display the user's data
			$(".card").html(`
			<button type="button" class="btn btn-primary" onclick="location.href ='main.html';">go back</button>
			
			
				<h1>Welcome, ${user.name}!</h1>
							
		 <img src= ${user.src}>

				<p>Here's information about your smart car:</p>
				<ul>
					<li>Make: ${user.car.make}</li>
					<li>Model: ${user.car.model}</li>
					<li>Year: ${user.car.year}</li>
					<li>Color: ${user.car.color}</li>
				</ul>
			`);
		} else {
			// Display an error message if the password is incorrect
			$(".error").text("Incorrect password");
		}
	} else {
		// Display an error message if the user doesn't exist
		$(".error").text("User not found");
	}
});
