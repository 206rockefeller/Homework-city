$(document).ready(function() {
	console.log("ready!");


			// when input in search bar trigger event listener 

			$("form").submit(function(){
				event.preventDefault();
				
				// capture the city the user inputs 
				
				var userCity = $("#city-type").val(); 

				// If a user enters "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
				
				if (userCity == "New York" || userCity == "New York City" || userCity == "NYC") {
					$("body").css("background-image", "url(images/nyc.jpg");
				}
				
				// If a user enters "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
				
				else if (userCity == "San Francisco" || userCity == "SF" || userCity == "Bay Area") {
					$("body").css("background-image", "url(images/sf.jpg");
				}
				
				// If a user enters "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
				
				else if (userCity == "Los Angeles" || userCity == "LA" || userCity == "LAX") {
					$("body").css("background-image", "url(images/la.jpg"));
				}

				// If a user enters "Austin" or "ATX" make the background of the page austin.jpg
				
				else if (userCity == "Austin" || userCity == "ATX") {
					$("body").css("background-image", "url(images/austin.jpg");
				}

				// If a user enters "Sydney" or "SYD" make the background of the page sydney.jpg

				else if (userCity == "Sydney" || userCity == "SYD") {
					$("body").css("background-image", "url(images/sydney.jpg");
				}

				// If user enters an invalid city display error msg 
			}) 

			


});
