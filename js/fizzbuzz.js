$(document).ready(function() {
    for (i=1; i<=100; i++) {
        //logic here for fizz buzz (divided by 3 AND 5)
        if ((i%3 == 0) && (i%5 ==0)) {
            $('.output').append("<p>fizz buzz</p>");
        }
        //logic here for fizz (divided by 3)
        else if (i%3 == 0) {
            $('.output').append("<p>fizz</p>");
        }
        //logic here for fizz (divided by 5)
        else if (i%5 == 0) {
            $('.output').append("<p>buzz</p>");
        }
        //if none of the above apply, output number to web page
        else {
            //output number to web page
            $('.output').append("<p>"+ i + "</p>");
        }
    }
});

