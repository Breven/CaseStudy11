// The Golfers Guide Javascript Page

// Global Variables
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var Images = ["images/Driver.png", "images/Wood.png", "images/Hybrid.png", "images/iron.png", "images/Wedge.png", "images/Putter.png"];
var instructorCost = 0;
var totalCost = 0;

// In case someone clicks on the first carousel image which is essentially for the home page.
function firstCaro() {
  window.alert("Welcome to The Golfers Guide, hopefully we can help you.");
}

// Javascript for handicap calculator on the home page. Watch your use of id="submit" if you plan to use this external js page on your page.
function handicapCalc() {
  var score = document.getElementById("scoreValue").value;
  var course = document.getElementById("courseValue").value;
  var slope = document.getElementById("slopeValue").value;
  var handicap = (score - course) * 113 / slope;
  if (score && course && slope) {
    alert("Your handicap is " + handicap.toFixed(2));
  }
  else {
    alert("Please fill in all fields");
  }
}

// Function for adding data to weekly schedule table on contact page
function addDays() {
  var i = 0;
  while (i < 7) {
    document.getElementsByTagName("th")[i].innerHTML += daysOfWeek[i];
    i++;
  }
}

// Javascript for imageswapper on tips page.
function changeImage(BigImage) {
  document.getElementById('BigImage').src = Images[BigImage];
}

// Run functions on page load
var looked = document.getElementById("look");
if (looked) {
  if (window.addEventListener) {
    window.addEventListener("load", addDays, false);
  } else if (window.attachEvent) {
    window.attachEvent("onload", addDays);
  }
}

// So the function will work on out of date web browsers
var handicapButton = document.getElementById("submit");
if (handicapButton) {
  if (handicapButton.addEventListener) {
    handicapButton.addEventListener("click", handicapCalc, false);
  }
  else if (handicapButton.attachEvent) {
    handicapButton.attachEvent("onclick", handicapCalc);
  }
}

// Call function when someone clicks on the first carousel image
var firstCaroButton = document.getElementById("welcomeImage");
if (firstCaroButton) {
  if (firstCaroButton.addEventListener) {
    firstCaroButton.addEventListener("click", firstCaro, false);
  }
  else if (firstCaroButton.attachEvent) {
    firstCaroButton.attachEvent("onclick", firstCaro);
  }
}
