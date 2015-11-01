$(document).ready(function() {
	console.log("ready!");


	// when input in search bar trigger event listener 

	$("form").submit(function(e){
		e.preventDefault();
		
		// capture the city the user inputs 
		
		var userCity = $("#city-type").val().toLowerCase();

		var brickWall;

		// If a user enters "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
		
		if (userCity === "new york" || userCity === "new york city" || userCity === "nyc") {
			brickWall = "nyc";
		}

		
		// If a user enters "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
		
		else if (userCity === "san francisco" || userCity === "sf" || userCity === "bay area") {
			brickWall = "sf";
		}
		
		// If a user enters "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
		
		else if (userCity === "los angeles" || userCity === "la" || userCity === "lax") {
			brickWall = "la";
		}

		// If a user enters "Austin" or "ATX" make the background of the page austin.jpg
		
		else if (userCity === "austin" || userCity === "atx") {
			brickWall = "austin";
		}

		// If a user enters "Sydney" or "SYD" make the background of the page sydney.jpg

		else if (userCity === "sydney" || userCity === "syd") {
			brickWall = "sydney";
		}
		// If user enters an invalid city display error msg 

		if (brickWall) {
			$("body").css("background-image", "url(images/" + brickWall +".jpg)");
		} else {
			alert('HEY STUPID!');
		}

		
		$(this).trigger("reset");

	});
});
