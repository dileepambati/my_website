function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toLocaleString();
  document.getElementById("currentTime").style.color = "red";
}
showTime();
setInterval(function () {

	showTime();
}, 1000);
