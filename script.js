function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toLocaleString();
  document.getElementById("currentTime").style.color = "black";
}
showTime();
setInterval(function () {

	showTime();
}, 1000);
