$(document).ready(
   
);

var Die = function(value){
    this.value = value;
    var div = $("<div></div>");
    div.addClass('dice');
    $('body').append(div);
}

Die.prototype.roll = function() {
   var value = Math.floor(Math.random() * 6) + 1
    $('div').innerText(value);
}
 $('button').on('click', new Die)