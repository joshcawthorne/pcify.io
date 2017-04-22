//File to setup global var values, and make the changelog popup window work.

var modal = document.getElementById('changeLogWindow');
var btn = document.getElementById("openChangeLog");
var span = document.getElementsByClassName("close")[0];
var budget = "unknown";
var budgetText = "unknown";
var budgetShortCode = "UK";
var price = "800";
var priceComment = " ";
var usage = "unknown";
var usageText = "unknown";
var usageShortCode = "UK";
var rigSentence = "If you can see this, somethings terribly wrong. Run. Or, reload and try again. Your choice."
var userName = "Unknown";
var name = "Unknown";
var gamingSelection = 0;
var helloComment = " ";

//Vars for user answers on usage
var gamingPriority = 5;
var videoPriority = 5;
var musicPriority = 5;
var photoPriority = 5;
var webPriority = 5;
var officePriority = 5;

var gamingScore = 5;
var videoScore = 5;
var musicScore = 5;
var photoScore = 5;
var webScore = 5;
var officeScore = 5;

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Return buttons

function returnBudget() {
  document.getElementById('BudgetSection').style.display = "none";
  document.getElementById('nameCollection').style.display = "absolute";
}

function returnGaming() {
  document.getElementById('BudgetSection').style.display = "absolute";
  document.getElementById('activityWrapper').style.display = "none";
}

function returnVideo() {
  document.getElementById('gaming').style.display = "absolute";
  document.getElementById('video').style.display = "none";
}
