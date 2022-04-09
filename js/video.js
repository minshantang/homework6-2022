var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	// Initialize the video element and turn off autoplay and turn off looping.
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	// Play the video and update the volume information
	console.log("Video played");
	video.play();
	document.querySelector("#volume").innerHTML = "" + video.volume*100 + "%";
	console.log("Current volume: " + video.volume*100);
});

document.querySelector("#pause").addEventListener("click", function () {
	// Pause the video
	console.log("Video paused");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
	// Slow the current video speed by 5% each time the button is clicked 
	// and log the new speed to the console.
	video.playbackRate *= 0.95;
	console.log("Current speed: " + video.playbackRate.toFixed(5) + "x");
});

document.querySelector("#faster").addEventListener("click", function () {
	// Increase the current video speed each time the button is
	// clicked and log the new speed to the console.Change it
	// by an amount proportional to the slow down.
	// CHECK THIS!! If you slow down three times and then speed up
	// three times you should be within 5 digits of 100 % again.
	video.playbackRate /= 0.95;
	console.log("Current speed: " + video.playbackRate.toFixed(5) + "x");
});

document.querySelector("#skip").addEventListener("click", function () {
	// Advance the current video by 15 seconds. If the video length has been 
	// exceeded go back to the start of the video - no farther.
	// Log the current location of the video.
	var jump = 15;
	if (video.currentTime + jump >= video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += jump;
	}
	console.log("Current time location: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function () {
	// Mute/unmute the video and update the text in the button
	if (video.muted == true) {
		video.muted = false;
		this.innerHTML = "Mute";
	} else {
		video.muted = true;
		this.innerHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("click", function () {
	// Change the volume based on the slider and update the volume information
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = "" + video.volume * 100 + "%";
	console.log("Current volume: " + video.volume*100);
});

document.querySelector("#vintage").addEventListener("click", function () {
	// Utilize the existing oldSchool class on the video element
	video.setAttribute("class", "oldSchool");
	console.log("Current style: Old School")
});

document.querySelector("#orig").addEventListener("click", function () {
	// Remove the oldSchool class from the video
	video.setAttribute("class", "video");
	console.log("Current style: Original")
});