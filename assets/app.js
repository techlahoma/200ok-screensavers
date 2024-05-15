	(function() {
		// all your code here
		var countDownDate = new Date("May 17, 2024 9:00:00").getTime();
		var dateNow = new Date().getTime();
		var wellBeText = "We'll be starting&nbsp;in ";

		function addMinutes(date, minutes) {
			return new Date(date + minutes * 60000);
		}

		if (location.hash) {
			console.log(dateNow);
			var hash = location.hash.substr(1);
			countDownDate = addMinutes(dateNow, hash)
			wellBeText = `We'll be <br> back in `;
		}

		// Update the count down every 1 second
		var x = setInterval(function() {

			// Get today's date and time
			var now = new Date().getTime();

			// Find the distance between now and the count down date
			var distance = countDownDate - now;

			// Time calculations for days, hours, minutes and seconds
			// var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			// var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			// Leading Zero Fix
			if (seconds.toString().length < 2) {
				seconds = seconds.toString();
				seconds = 0 + seconds;
			}

			// Display the result in the element with id="demo"
			document.getElementById("text").innerHTML = wellBeText;
			document.getElementById("timer").innerHTML = minutes + ":" + seconds;

			// If the count down is finished, write some text
			if (distance < 0) {
				clearInterval(x);
				document.getElementById("text").innerHTML = "We're starting now!";
				document.getElementById("timer").style.display = "none";
			}
		}, 1000);

	})();
