// The Golfers Guide Javascript Page

// Global Variables
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

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

    // Function for adding data to weekly schedule table on contact page
    function addDays() {
      var i = 0;
      while (i < 7) {
        document.getElementsByTagName("th")[i].innerHTML += daysOfWeek[i];
        i++;
      }
    }

    // Set up page function incase I want to add more functions that are called on load.
    function setUpPage() {
      addDays();
    }

    // Run functions on page load
    if (window.addEventListener) {
      window.addEventListener("load", setUpPage, false);
    } else if (window.attachEvent) {
      window.attachEvent("onload", setUpPage);
    }
