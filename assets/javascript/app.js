$(document).ready(function() {

    var takenQuiz = false;
    var SIZE = 1000
    var time = 60;
    $(".secondPage").hide();
    $(".thirdPage").hide();


    function hideFirst() {
        $(".firstButton").hide();
    }

    $(".firstButton").on("click", function() {
        hideFirst();
        $("div.container").addClass("container2");
        $("div.container").removeClass(".container");
        $(".secondPage").show();
        setInterval(everySecond, SIZE);
        setTimeout(atEnd, SIZE * 60);
    });
    
    $("input[type='submit']").on("click", function(){
        atEnd();
    });

    function atEnd() {
        $(".secondPage").hide();
        $("div.container").removeClass("container2");
        $(".thirdPage").show();
        var totalCorrect = 0;
        var totalWrong = 0;
        var noGuess = 0;
        var radioValue
        for(var i = 1; i <= $('.myCol').length; i++) {
        radioValue = $("input[name='" + i + "q']:checked").val();
            if(radioValue == 1){
                totalCorrect++;
                takenQuiz = true;
            } else if (radioValue ==0) {
                totalWrong++;  
                takenQuiz = true;         
            } else {
                noGuess++;
                takenQuiz = true;
            }
        }
        $(".totalCorrect").html(totalCorrect);
        $(".totalWrong").html(totalWrong);
        $(".noGuess").html(noGuess);
        console.log("Correct answers: " + totalCorrect);
        console.log("Wrong answers: " + totalWrong);
        console.log("No guesses: " + noGuess);
    }

    function everySecond() {
        if((time > 0) && (takenQuiz == false)) {
            time--;
            $(".time").html(time);
            console.log(time);
        } 
    }

});