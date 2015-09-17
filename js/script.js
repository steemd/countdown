var timerEl = document.querySelector("#text-11 .timer-date");

if (timerEl !== null) {
	var timerData = timerEl.getAttribute("data-start-date");
	var lastDate = new Date(timerData);
	
	var DateTimer = setInterval(function() {
		var nowDate = new Date();
		var lastDays = parseInt((lastDate - nowDate)/(24*60*60*1000))-1;
		var lastHrs = 23 - nowDate.getHours();
		var lastMin = 60 - nowDate.getMinutes();
		var lastSec = 60 - nowDate.getSeconds();
			  
		timerEl.innerHTML = "<div>" + lastDays + " дней</div><div>" + lastHrs + " часов</div><div>" + lastMin + " минут</div><div>" + lastSec + " секунд</div>";
		
		if (lastDays == 0) {clearInterval(DateTimer); }
	}, 1000);
}