$(document).ready(
   
);
var dieArray = [];

function Die(value){
    this.value = value;
    var value = (Math.floor(Math.random() * 6) + 1);
    var div = $("<div></div>");
    div.addClass('dice');
    div.text(value);
    $('body').append(div);
    dieArray.push(Die);
}

Die.prototype.roll = function(){
   var value = Math.floor(Math.random() * 6) + 1
    this.text(this.value);
    console.log(value);
}


 $('#create').on('click', function(){
    var myDie = new Die();
    console.log(myDie.roll);
    console.log(dieArray);
    myDie.roll();
 })

//  $('#rolls').on('click', myDie.roll)