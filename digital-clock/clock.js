// setInterval(function(){
// 	var currentTime=new Date();
// 	var  hours=currentTime.getHours();
// 	var minutes=currentTime.getMinutes();
// 	var second=currentTime.getSeconds();
// 	// var milisecond=currentTime.getMilliseconds();
// 	var period="AM";

// 	if (hours >= 12){
// 		period="PM"
// 		}

// 		if (hours >12) {
// 			hours=hours-12;
// 		}
// 		else{
// 			hours="0"+hours;
// 		}

// 		if (second< 10) {
// 			second="0"+second;
// 		}
// 		if (minutes <10){
// 			minutes="0"+minutes;
// 		}

// 		var clocktime=hours + ":" + minutes + ":" + second + "  " + period;
// 		var clock =document.getElementById('clock');
// 		clock.innerText=clocktime;
// },1000);

var divs = document.getElementsByTagName("div");

	for ( var i = 0; i<divs.length; i++ ) {
		divs[i].appendChild(document.createElement("div"));
	}