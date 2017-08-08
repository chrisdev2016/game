$(document).ready(function () {

    var mC = 0;
    var cC = 0;
    var seconds = 0;
    document.getElementById("myCounter").innerHTML = mC;
    document.getElementById("computerCounter").innerHTML = cC;

    var computerSpeed = Math.random() * 2000;
    var mySpeed = Math.random() * 1000;
    var block = false;



    $("#start").click(function () {
        // var computerSpeed = Math.random() * 1000;
        // var mySpeed = Math.random() * 1000;
        if (!block) {
            if (mC != 0 || cC != 0) {
                // $("#box1").animate({ "bottom": "-=420px" }, 0)
                $("#box2").animate({ "bottom": "-=420px" }, 0)
            }

            // $("#box1").animate({ "bottom": "+=420px" }, computerSpeed-100)
            $("#box2").animate({ "bottom": "+=420px" }, mySpeed - 100)
            console.log(mC);
            mC++
            document.getElementById("myCounter").innerHTML = mC;
            block= true;
            
            setTimeout(()=> {block = false;}, mySpeed-100)
            mySpeed = Math.random() * 1000;
        }

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
  $('#start').css('display', 'block');

        playFunction();


    })






    function playFunction() {
        var x = setInterval(countDown, 1000)
        // var y = setInterval(startRobot, 1000)
        // computerSpeed = Math.random() * 1000 +500 ;
        seconds = 10;
        var y = setTimeout(startRobot, computerSpeed);
        document.getElementById("countdown").innerHTML = seconds

        function countDown() {
            console.log('coundown')
            seconds--;
            document.getElementById("countdown").innerHTML = seconds;

            if (seconds < 1) {
                console.log('countdown stopped')
                clearInterval(x);
                clearInterval(y);
                $("#start").attr("disabled", "true")
                announceWinner();
            }
        }

    }


    function startRobot() {




        let cC = document.getElementById("computerCounter").innerHTML;


        if (mC != 0 || cC != 0) {
            $("#box1").animate({ "bottom": "-=420px" }, 0)
            // $("#box2").animate({ "bottom": "-=420px" }, 0)
        }

        $("#box1").animate({ "bottom": "+=420px" }, computerSpeed - 100)
        // $("#box2").animate({ "bottom": "+=420px" }, mySpeed-100)

        cC++
        document.getElementById("computerCounter").innerHTML = cC;
        if (seconds > 0) {
            computerSpeed = Math.random() * 2000;
            console.log(computerSpeed);
            setTimeout(startRobot, computerSpeed);
        }

    }

    // function compareSpeed() {

    //     if (mySpeed > computerSpeed) {
    //         mC++
    //         document.getElementById("myCounter").innerHTML = mC;

    //     }

    //     else if (computerSpeed > mySpeed) {
    //         cC++
    //         document.getElementById("computerCounter").innerHTML = cC;
    //     }
    //     else {
    //         mC++
    //         cC++
    //         document.getElementById("myCounter").innerHTML = mC;
    //         document.getElementById("computerCounter").innerHTML = cC;

    //     }

    // }

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


    $('#reset').click(function(){

 location.reload();

    })




})

