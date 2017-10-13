$(document).ready(function () {

    var mC = 0;
    var cC = 0;
    var seconds = 0;
    document.getElementById("myCounter").innerHTML = mC;
    document.getElementById("computerCounter").innerHTML = cC;

    var computerSpeed = Math.random() * 1500;
    var mySpeed = Math.random() * 1000;
    var block = false;



    $("#start").click(function () {
     
        if (!block) {
            if (mC != 0 || cC != 0) {
            
                $("#box2").animate({ "bottom": "-=420px" }, 0)
            }

            
            $("#box2").animate({ "bottom": "+=420px" }, mySpeed - 100)
            console.log(mC);
            mC++
            document.getElementById("myCounter").innerHTML = mC;
            block = true;

            setTimeout(() => { block = false; }, mySpeed - 100)
            let newLocation = Math.random() * 80 + "%"
            $('#start').css('bottom', newLocation);
            mySpeed = Math.random() * 1000;
        }


    })




    $("#play").click(function () {
        $('#start').css('display', 'block');
        playFunction();
    })




    function playFunction() {
        var x = setInterval(countDown, 1000)

        seconds = 10;
        startRobot();

        document.getElementById("countdown").innerHTML = seconds

        function countDown() {
            console.log('coundown')
            seconds--;
            document.getElementById("countdown").innerHTML = seconds;

            if (seconds < 1) {
                console.log('countdown stopped')
                clearInterval(x);

                $("#start").attr("disabled", "true")
                announceWinner();
            }
        }

    }



    function startRobot() {
        let cC = document.getElementById("computerCounter").innerHTML;
        if (mC != 0 || cC != 0) {
            $("#box1").animate({ "bottom": "-=420px" }, 0)
        }

        $("#box1").animate({ "bottom": "+=420px" }, computerSpeed - 100)

        cC++;
        document.getElementById("computerCounter").innerHTML = cC;
        if (seconds > 0) {
            computerSpeed = Math.random() * 1500;
            console.log(computerSpeed);
            setTimeout(startRobot, computerSpeed);
        }

    }




    function announceWinner() {

        let mC = parseInt(document.getElementById("myCounter").innerHTML);
        let cC = parseInt(document.getElementById("computerCounter").innerHTML);

        if (mC > cC) {
            $('.boundries').append("<div class='messageWon'> <h1>You Won</h1> </div>");
        }

        else if (cC > mC) {
            $('.boundries').append("<div class='messageLost'> <h1>You lost to a robot</h1> </div>");
        }

        else {
            $('.boundries').append("<div class='messageTry'> <h1>It's a Tie!!</h1> </div>");
        }
    }





    $('#reset').click(function () {
        location.reload();
    })
})

