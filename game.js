$(document).ready(function () {

    var mC = 0;
    var cC = 0;
   document.getElementById("myCounter").innerHTML = mC;
   document.getElementById("computerCounter").innerHTML = cC;

    $("#start").click(function () {
     
        var computerSpeed = Math.random() * 1000;
        var mySpeed = Math.random() * 1000;

        if (mC != 0  || cC != 0)
        {
            // $("#box1").animate({ "bottom": "-=420px" }, 0)
            $("#box2").animate({ "bottom": "-=420px" }, 0)
        }

        // $("#box1").animate({ "bottom": "+=420px" }, computerSpeed-100)
        $("#box2").animate({ "bottom": "+=420px" }, mySpeed-100)

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
})

 

$("#play").click(function () {


playFunction();  
startRobot();

})






function playFunction(){
        var x = setInterval(countDown, 1000)

    var seconds = 5;
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

}

function startRobot(){
var computerSpeed = Math.random() * 1000;
        // var mySpeed = Math.random() * 1000;

        if (mC != 0  || cC != 0)
        {
            $("#box1").animate({ "bottom": "-=420px" }, 0)
            // $("#box2").animate({ "bottom": "-=420px" }, 0)
        }

        $("#box1").animate({ "bottom": "+=420px" }, computerSpeed-100)
        // $("#box2").animate({ "bottom": "+=420px" }, mySpeed-100)

    
compareSpeed();
    


}

function compareSpeed(){

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



// $('#reset').click(function(){
//     mC = 0;
//     cC = 0;
//     seconds = 5;
//     $('#start').attr("disabled", 'true')
// })

function announceWinner(){

   let mC =   document.getElementById("myCounter").innerHTML ;
   let cC =   document.getElementById("computerCounter").innerHTML ;
  
    if(mC>cC){
       alert("you won")
    }

    else if(cC>mC){
        alert("you lost")
    }

    else{
        alert("try again")
    }
}










