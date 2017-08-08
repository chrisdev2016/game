$(document).ready(function () {

    var mC = 0;
    var cC = 0;

    document.getElementById("myCounter").innerHTML = mC;
    document.getElementById("computerCounter").innerHTML = cC;

      var computerSpeed = Math.random() * 1000;
        var mySpeed = Math.random() * 1000;

    $("#start").click(function () {

        // var computerSpeed = Math.random() * 1000;
        // var mySpeed = Math.random() * 1000;

        if (mC != 0 || cC != 0) {
            // $("#box1").animate({ "bottom": "-=420px" }, 0)
            $("#box2").animate({ "bottom": "-=420px" }, 0)
        }

        // $("#box1").animate({ "bottom": "+=420px" }, computerSpeed-100)
        $("#box2").animate({ "bottom": "+=420px" }, mySpeed - 100)

        // if (mySpeed > computerSpeed) {
        //     mC++    
        //    document.getElementById("myCounter").innerHTML = mC;

        // }

        // else if (computerSpeed > mySpeed) {
        //     cC++
        //   document.getElementById("computerCounter").innerHTML = cC;
        //  }
        // else {
        //     mC++
        //     cC++
        //    document.getElementById("myCounter").innerHTML = mC;
        //     document.getElementById("computerCounter").innerHTML = cC;

        // }

    })




    $("#play").click(function () {


        playFunction();
        

    })






    function playFunction() {
        var x = setInterval(countDown, 1000)
        var y = setInterval(startRobot,1000)

        var seconds = 10;
        document.getElementById("countdown").innerHTML = seconds

        function countDown() {
            console.log('coundown')
            seconds--;
            document.getElementById("countdown").innerHTML = seconds;

            if (seconds < 0) {
                console.log('countdown stopped')
                clearInterval(x);
                clearInterval(y);
                $("#start").attr("disabled", "true")
                announceWinner();
            }
        }

    }


    function startRobot() {
        
        var computerSpeed = Math.random() * 1000;
       

        let cC = document.getElementById("computerCounter").innerHTML;
        

        if (mC != 0 || cC != 0) {
            $("#box1").animate({ "bottom": "-=420px" }, 0)
            // $("#box2").animate({ "bottom": "-=420px" }, 0)
        }

        $("#box1").animate({ "bottom": "+=420px" }, computerSpeed - 100)
        // $("#box2").animate({ "bottom": "+=420px" }, mySpeed-100)


       



    }

    function compareSpeed() {

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

    }

    function announceWinner() {

        let mC = document.getElementById("myCounter").innerHTML;
        let cC = document.getElementById("computerCounter").innerHTML;

        if (mC > cC) {
            
            $('.boundries').append("<div class='messageWon'> <h1>You Won</h1> </div>");

        }

        else if (cC > mC) {
            
            $('.boundries').append("<div class='messageLost'> <h1>You lost to a robot</h1> </div>");

        }

        else {
            
            $('.boundries').append("<div class='messageTry'> <h1>You didn't even try</h1> </div>");
        }
    }




})

