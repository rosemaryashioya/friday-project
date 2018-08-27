var person1="";
var person2="";

var throwdice = function () {
  return Math.floor(6*Math.random())+1;
}

function Person(turn) {
  this.roll = 0;
  this.score = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.personName;
}

Person.prototype.rollone = function() {
  if (this.roll === 1) {
  this.score = 0;
  alert("Sorry " + this.personName + ", you rolled a 1!turn is over!")
  } else {
  this.score += this.roll;
  }
}

Person.prototype.hold = function () {
  this.totalscore += this.score;
  this.score = 0;
  alert(this.personName + ", total")
}
Person.prototype.winnerCheck = function () {
  if (this.totalscore >= 100) {
    alert(this.personName + " You are the winner!");
  }
}

Person.prototype.newGame = function () {
  this.roll = 0;
  this.score = 0;
  this.totalscore = 0;
  this.personName ="";
}

var clearValues = function(){
  $(".person1Name").val("");
  $(".person2Name").val("");
}

$(document).ready(function() {

  $("button#start").click(function(){
    person1 = new Person(true);
    person2 =  new Person(false);
    $(".person").show();
    $(".start").hide();

    var person1Name = $(".person1Name").val();
    $("#person1Name").text(person1Name);

    var person2Name = $(".person2Name").val();
    $("#person2Name").text(person2Name);

    person1.personName=person1Name;
    person2.personName=person2Name;

  });
  $("button#reload").click(function(){
    $(".person").hide();
    clearValues();
    person1.newGame();
    person2.newGame();
    $("#round-total-1").empty();
    $("#total-score-1").empty();
    $("#dice-roll-1").empty();
    $("#round-total-2").empty();
    $("#total-score-2").empty();
    $("#dice-roll-2").empty();
    $(".start").show();
  });

  $("button#person1-roll").click(function(){
    person1.roll = throwdice();
    $("#dice-roll-1").text(person1.roll);
    person1.rollone();
    $("#round-total-1").text(person1.score);
  });

  $("button#person2-roll").click(function(){
    person2.roll = throwdice();
    $("#dice-roll-2").text(person2.roll);
    person2.rollone();
    $("#round-total-2").text(person2.score);
  });

  $("button#person1-hold").click(function(){
    person1.hold();
    $("#total-score-1").text(person1.totalscore);
    $("#round-total-1").empty();
    $("#dice-roll-1").empty();
    person1.winnerCheck();
  });

  $("button#person2-hold").click(function(){
    person2.hold();
    $("#total-score-2").text(person2.totalscore);
    $("#round-total-2").empty();
    $("#dice-roll-2").empty();
    person2.winnerCheck();
  });

});
