// The Golfers Guide Javascript Page

// In case someone clicks on the first carousel image which is essentially for the home page.
document.getElementById("welcomeImage").addEventListener("click", function() {
  alert("Welcome to The Golfers Guide, hopefully we can help you.");
}, false);

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

// So the function will work on out of date web browsers
var handicapButton = document.getElementById("submit");
if (handicapButton.addEventListener) {
  handicapButton.addEventListener("click", handicapCalc, false);
}
else if (handicapButton.attachEvent) {
  handicapButton.attachEvent("onclick", submitForm);
}
