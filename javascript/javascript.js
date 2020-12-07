"use strict";
/*
Original Author: Jeffrey Kuhn
Date Created: 9-27-19
Version: 1
Date Last Modified: 9-27-19
Modified by: Jeffrey Kuhn
Modification log: File Created
 
*/

runClock();
setInterval("runClock()", 1000);

function runClock() {

    var currentDay = new Date();
    var currentDate = currentDay.toDateString();
    var currentTime = currentDay.toLocaleTimeString();

    document.getElementById("time").innerHTML = currentDate;
    document.getElementById("time").innerHTML += "<br/>";
    document.getElementById("time").innerHTML += currentTime;
}