$(document).ready(function() {

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
        $(".thirdPage").show();
        var totalCorrect = 0;
        var totalWrong = 0;
        var noGuess = 0;
        var radioValue
        for(var i = 1; i <= $('.myCol').length; i++) {
        radioValue = $("input[name='" + i + "q']:checked").val();
            if(radioValue == 1){
                totalCorrect++;
            } else if (radioValue ==0) {
                totalWrong++;           
            } else {
                noGuess++;
            }
        }
        console.log("Correct answers: " + totalCorrect);
        console.log("Wrong answers: " + totalWrong);
        console.log("No guesses: " + noGuess);
    });

    function atEnd() {
        console.log(totalCorrect);
    }

    function everySecond() {
        time--;
        $(".time").html(time);
        console.log(time);
    }

});