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
  (score && course && slope) ? alert("Your handicap is " + handicap) : alert("Please fill in all fields");
}
document.getElementById("submit").addEventListener("click", handicapCalc, false);
