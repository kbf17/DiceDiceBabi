$(document).ready(
    $('#create').on('click', newDie),
    $('#rolls').on('click', newRoll)
);
var dieArray = [];

function Die(){
    value = (Math.floor(Math.random() * 6) + 1);
    this.value = value;
    this.div = $("<div></div>");
    this.div.addClass('dice');
    this.div.text(value);
    $('body').append(this.div);
}

Die.prototype.roll = function(){
    value = (Math.floor(Math.random() * 6) + 1);
    this.div.text(value);
    console.log(value);
    console.log(this);
}

function newDie(){
    this.value = (Math.floor(Math.random() * 6) + 1);
    var myDie = new Die;
    dieArray.push(myDie);
}

function newRoll(){
    dieArray.forEach(function(myDie){
    myDie.roll();
    })
}
