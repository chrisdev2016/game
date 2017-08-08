$(document).ready(function () {

    var mC = 0;
    var cC = 0;
    document.getElementById("myCounter").innerHTML = mC;
    document.getElementById("computerCounter").innerHTML = cC;

    $("#start").click(function () {

        var computerSpeed = Math.random() * 1000;
        var mySpeed = Math.random() * 1000;

        if (mC != 0 || cC != 0) {
            $("#box1").animate({ "bottom": "-=420px" }, 0)
            $("#box2").animate({ "bottom": "-=420px" }, 0)
        }

        $("#box1").animate({ "bottom": "+=420px" }, computerSpeed - 100)
        $("#box2").animate({ "bottom": "+=420px" }, mySpeed - 100)

        if (mySpeed > computerSpeed) {
            mC++
            document.getElementById("myCounter").innerHTML = mC;

        }

        else if (computerSpeed > mySpeed) {
            cC++
            document.getElementById("computerCounter").innerHTML = cC;
        }
        else {
            mC++
            cC++
            document.getElementById("myCounter").innerHTML = mC;
            document.getElementById("computerCounter").innerHTML = cC;

        }

    })
})



$("#play").click(function () {


    var x = setInterval(countDown, 1000)

    var seconds = 3;
    document.getElementById("countdown").innerHTML = seconds

    function countDown() {
        seconds--;
        document.getElementById("countdown").innerHTML = seconds;

        if (seconds < 0) {
            clearInterval(x);
            $("#start").attr("disabled", "true")
            announceWinner();
        }
    }

})

function announceWinner() {

    let mC = document.getElementById("myCounter").innerHTML;
    let cC = document.getElementById("computerCounter").innerHTML;

    if (mC > cC) {
        // alert("you won")
        $('.boundries').append("<div class='messageWon'> <h1>You Won</h1> </div>");

    }

    else if (cC > mC) {
        // alert("you lost")
        $('.boundries').append("<div class='messageLost'> <h1>You lost to a robot</h1> </div>");

    }

    else {
        // alert("try again")
        $('.boundries').append("<div class='messageTry'> <h1>You didn't even try</h1> </div>");
    }
}










