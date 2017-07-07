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
    // this.value = (Math.floor(Math.random() * 6) + 1);
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

function sums(){
//    var sumString = sumArray.toString();
    var total = sumArray.reduce(function(sum, value) {
        return sum + value;
    }, 0);
   alert(total);
}
// var total = [0, 1, 2, 3].reduce(function(sum, value) {
//   return sum + value;
// }, 0);