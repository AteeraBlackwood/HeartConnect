//Homepage stuff
let happyCouples = [
  "HC1.jpg", "HC2.jpg", "HC3.jpg","HC4.jpg","HC5.jpg","HC6.jpg","HC7.jpg","HC8.jpg","HC9.jpg"
]

// new Glide('.glide').mount();
//Get help fixing the slideshow

for (var i = 0; i < happyCouples.length; i++) {
  createElementProper(happyCouples[i]);
}

function createElementProper(happyCouples){
  let newContentListItem = document.createElement("LI");
  newContentListItem.classList.add("glide__slide");
  let newImage = document.createElement("IMG");
  newImage.classList.add("albumImage");
  newImage.src = happyCouples['Couples'];
  newContentListItem.appendChild(newImage);
}

//Questionnaire stuff
let questions = [
  "Have you ever been arrested? And if so, did you go to prison?",
  "Cats or dogs?",
  "Are you a virgin? If not, how did you lose your virginity?",
  "Could you date someone who wouldn’t vote for a woman?",
  "How do you spend your money? Would you say you're frugal, a spendthrift, or in between?",
  "How often do you speak to your parents?",
  "Do you own your own home, rent, or live with family?",
  "Do you meditate?",
  "Would you date someone outside of your race/ethnicity/nationality",
  "Would you be open to a long-distance relationship?",
  "How much money do you make each year?(Don't lie, we can check your files)",
  "Are you friends with mostly men or mostly women?",
  "Your family dog/cat is diagnosed with an illness, and the vet bill will be $2,000. What do you do?",
  "Would you ideally like to be married within the next 3 years?",
  "Are you ready to settle down and get married right now?",
  "Are you upset when your partner flirts with someone else?",
  "When possible, DIY or buy?",
  "If the movie you want to watch is not free on Amazon Prime, Netflix, Hulu, etc, do you pay for it, find another movie, or pirate it?",
  "Are you 420 friendly?",
  "What type of phone do you use?",
  "Do you like videogames? If so, what type do you prefer?",
  "Were you born in the country you currently live in?",
  "Are you politically active? If so, have you ever participated in any protests?",
  "If there was a union for your current career, would you join it?",
  "Would you be open to a relationship with more than one person?",
  "How much do you usually tip a server who did a fine job?",
  "When you go out for dinner, do you prefer fast food, casual dining, or fine dining?",
  "What do you think of the prospect of having sexual intercourse while wearing some type of costume(fur-suit, sci-fi costume, clown suit, maid outfit, whatever)?",
  "What would you prefer your ideal match to be more into?",
  "Are you religious? If so, what religion are you?",
  "How would someone be able to ruin your life?"
]

function createElementProper(incomingArray){
  let qs = document.createElement("LI");
}

// var lists = document.getElementById('qs');
// lists.innerHTML = questions[Math.floor(Math.random() * questions.length)];

// let pageName ="questionnaire"
// if (pageName == "questionnaire"){
//   let lists.innerHTML = questions[Math.floor(Math.random() * questions.length)];
// }



//Make an account stuff
function myFunction() {
  document.getElementById("myFunction").classList.toggle("show");
}

function adsStay() {
  alert("Blocking the ads isn't allowed! Because of this, we've also disabled your adblock as soon as you came on the website!");
}
//Need to make a pop up for the footer about the ads and for submission



//Profile stuff
//Use grid or slid.js for Gallery
var outputParagraph;

var age = ['18','28','52','943','20','33','75','60','45','91']
var occupation = ['Actor', 'Onlyfans Contributor','Stripper','Lawyer','Professional Fool','Hitman','Detective','Romance Novelist','Grape Farmer','Teacher','Executioner','Army Pilot','Runescape Player','Artist(Starving)','Cashier','Professional Poker Player']
var creditscore = ['280','750','810','420','666','696','517','312','12']
var location = ['San Francisco -California', 'New York - New York','Owasso - Oklahoma','London - England','Dublin - Ireland', 'Flint - Michigan', 'Denver - Colorado', 'Toronto - Ontario', 'Sleepy Hollow - New York', 'Whynot - Mississippi']
var likes = ['cougars','dancing','toes','long walks on the beach','cars','animals','drinking','reality tv','homespun clothing','The Spanish Inquisition','collecting teeth','shoplifting','The Office','spending time with family','home improvement','competitive eating','duck hunting']
var dislikes = ['milfs', 'my mother who failed me', 'children', 'fitness', 'country music', 'long walks on the beach', 'the British', 'the Irish','cetaceans','homes with popcorn ceilings', 'raffles','American Revisionism']
var preferences = ["a Male", "a Female", " a Transman", "a Transman", "a Nonbinary person", "any and everything"]

// document.addEventListener("DOMContentLoaded", function(){
d1 = document.getElementById("age");
d1.innerHTML = age[Math.floor(Math.random() * age.length)];

function gender(){
  var genderIndex = Math.floor(Math.random()*preferences.length);
  outputParagraph.innerHTML = preferences[genderIndex];
}
