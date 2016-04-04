$(document).ready(function() {
    //read input from page
    $('.submit').click(function(){
        var x = $('.input').val();
        console.log(x);
        //validate input
        console.log(parseInt(x,10));
        //check if NaN
        if (isNaN(parseInt(x, 10))) {
            console.log("Is NaN");
            //reset input box until a valid number is input
            $('.input').val("");
        }
        else if (x%1 != 0) {
            console.log("Is a decimal");
            //reset input box until a valid number is input
            $('.input').val("");
        }
        else {
            console.log("Is a number");
            fizzbuzz(x);
        }
    });

});

function fizzbuzz(end) {
    for (var i = 1; i <= parseInt(end, 10); i++) {
        //logic here for fizz buzz (divided by 3 AND 5)
        if ((i % 3 == 0) && (i % 5 == 0)) {
            $('.output').append("<p>fizz buzz</p>");
        }
        //logic here for fizz (divided by 3)
        else if (i % 3 == 0) {
            $('.output').append("<p>fizz</p>");
        }
        //logic here for fizz (divided by 5)
        else if (i % 5 == 0) {
            $('.output').append("<p>buzz</p>");
        }
        //if none of the above apply, output number to web page
        else {
            //output number to web page
            $('.output').append("<p>" + i + "</p>");
        }
    }
}

