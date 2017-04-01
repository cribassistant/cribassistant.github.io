function playPause() { 
	var myVideo = document.getElementById("video"); 
	if (myVideo.paused) 
	  myVideo.play(); 
	else 
	  myVideo.pause(); 
}
