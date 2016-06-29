'use strict';

window.onload = function () {

    /* your script goes here */

    // console.log("Wait for it...");
    // window.setTimeout(function() {
    //     console.log("Toast is done!!");
    // }, 5000);

    // function doRepeatedly() { console.log("Are we there yet?"); }

    // //run every 1 second
    // var timerId = window.setInterval(doRepeatedly, 1000);

    function blink() {
        var header = document.querySelector('header');
        header.classList.toggle('red');
        // header.classList.toggle('white');
    }

    //window.setInterval(blink, 500);

    var img = document.querySelector('img');
    var clickCount = 0;

    function handleClick(event) {
        console.log('clicky clicky');

        var elem = event.target;
        console.log(elem);

        clickCount++;
        if (clickCount > 10) {
            elem.setAttribute('src', 'img/husky.jpg');
        }
        else {
            console.log(clickCount);
        }
    }


    img.addEventListener('click', handleClick);

    //Select the circle, and when it's clicked, 
    //turn it red!
    var circle = document.querySelector('circle');
    circle.addEventListener('click', function (event) {
        circle.setAttribute('fill', 'red');
    })


}







