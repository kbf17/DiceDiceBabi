$(document).ready(
    $('#create').on('click', newDie),
    $('#rolls').on('click', newRoll),
    $("#sums").on('click', sums)
);
var dieArray = [];
var sumArray = [];

function Die(){
    value = (Math.floor(Math.random() * 6) + 1);
    this.value = value;
    this.div = $("<div></div>");
    this.div.addClass('dice');
    this.div.text(value);
    $('body').append(this.div);
    sumArray.push(this.value)
}

Die.prototype.roll = function(){
    value = (Math.floor(Math.random() * 6) + 1);
    this.div.text(value);
    console.log(value);
    console.log(this);
    sumArray.push(value);
}

function newDie(){
    var myDie = new Die;
    dieArray.push(myDie);
    console.log(sumArray);
}

function newRoll(){
    sumArray = [];
    dieArray.forEach(function(myDie){
    myDie.roll();
    })
    console.log(sumArray);
}
//extra credit functions
function sums(){
    var total = sumArray.reduce(function(sum, value) {
        return sum + value;
    }, 0);
   alert(total);
}

Die.prototype.rollAgain = function(){
    console.log('clicked');
}
function rollSingle(){
    myDie.rollAgain();
}

$('div').on('dblclick', rollSingle);