/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Cynthia Brown
   Date:   3/9/25

*/
'use strict'; 

// Call showClock() once immediately when the script loads
showClock();

// Update the countdown every second
setInterval(showClock, 1000);

function showClock() {
    // Create a Date object for May 19, 2021, at 9:31:27 AM
    var thisDay = new Date(2021, 4, 19, 9, 31, 27); // Months are 0-based, so May is 4

    // Convert the date and time to local formats
    var localDate = thisDay.toLocaleDateString();
    var localTime = thisDay.toLocaleTimeString();

    // Insert the date and time into the page
    document.getElementById("currentTime").innerHTML = `<span>${localDate}</span><span>${localTime}</span>`;

    // Call nextJuly4() with thisDay as the argument and store the result
    var j4Date = nextJuly4(thisDay);

    // Set the countdown target time to 9 PM (21:00 in 24-hour format)
    j4Date.setHours(21, 0, 0, 0); // Set hours to 21:00, and minutes, seconds, milliseconds to 0

    // Calculate the difference between j4Date and thisDay in milliseconds
    var timeDiff = j4Date - thisDay;

    // Convert the time difference into days, hours, minutes, and seconds
    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    var hrs = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var secs = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Display countdown values in their respective elements
    document.getElementById("dLeft").textContent = days;
    document.getElementById("hLeft").textContent = hrs;
    document.getElementById("mLeft").textContent = mins;
    document.getElementById("sLeft").textContent = secs;
}

function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2021");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}