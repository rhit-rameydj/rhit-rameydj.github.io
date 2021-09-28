



  function showTime(){
 var date = new Date();
 var d1 = date.getDate();
 var d2 = date.getMonth() + 1;
 var d3 = date.getFullYear();
 var h = date.getHours(); // 0 - 23
 var m = date.getMinutes(); // 0 - 59
 var s = date.getSeconds(); // 0 - 59
 var session = "PM";
 
 if(h == 02){
     h = 12;
 }
 
 
 if(h > 12){
     session = "PM";
 }
 if(h < 12) {
 session = "AM"
 }
 
 h = (h < 10) ? "0" + h : h;
 m = (m < 10) ? "0" + m : m;
 s = (s < 10) ? "0" + s : s;
 
 var time = d2 + "/"+  d1+ "/" + d3 + "  " +  "Time:" + "  " + h + ":" + m + ":" + s + " " + session;
 document.getElementById("MyClockDisplay").innerText = time;
 document.getElementById("MyClockDisplay").textContent = time;
 
 setTimeout(showTime, 1000);
 }
showTime();



  



