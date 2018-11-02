$(document).ready(function () {

    //mathematics

    $("#btn1").click(function () {

        var num1 = $("#num1").val();
        var num2 = $("#num2").val();
        var num3 = $("#num3").val();
        var num4 = $("#num4").val();
        var num5 = $("#num5").val();

        if (num1 !== "" && num2 !== "" && num3 !== "" && num4 !== "" && num5 !== "") {
            var sum = +num1 + +num2 + +num3 + +num4 + +num5;
            var product = +num1 * +num2 * +num3 * +num4 * +num5;
            var mean = sum / 5;
            var min = Math.min(num1, num2, num3, num4, num5);
            var max = Math.max(num1, num2, num3, num4, num5);

            $("#output1").html("The <b>sum</b> of the numbers is <b>" + sum + "</b>");
            $("#output2").html("The <b>product</b> of the numbers is <b>" + product + "</b>");
            $("#output3").html("The <b>mean</b> of the numbers is <b>" + mean + "</b>");
            $("#output4").html("The <b>minimum</b> number entered is <b>" + min + "</b>");
            $("#output5").html("The <b>maximum</b> number entered is <b>" + max + "</b>");

            $('#myModal2').modal('show');
        }
        else {
            swal("Whoopsy!", "Please provide a numerical value for each field.");

        }
    });

    $("#btn2").click(function () {
        $("#num1, #num2, #num3, #num4, #num5").val("");
        $("#output1, #output2, #output3, #output4, #output5").html("");
    });

    //palindrome

    $("#btnpal").click(function () {
        var word1 = $("#word1").val();

        var revWord = "";
        if (word1 !== "")
        {
            for (var loop = word1.length - 1; loop >= 0; loop--)
            {
                revWord += word1.substr(loop, 1);
            }
            if (word1.toUpperCase() === revWord.toUpperCase())
            {
                $("#palout").text(word1 + " is a palindrome!");
            }
            else
            {
                $("#palout").text(word1 + " is not a palindrome...");
            }
            $('#myModal3').modal('show');
        }
        else
        {
            swal("Whoopsy!", "Please enter a word before running.");
        }
    });

    $("#btnpalcl").click(function () {
        $("#word1").val("");
        $("#palout").html("");
    });

    //factorial

    $("#btnfac").click(function () {
        //Step 1: Get the user input
        var fac1 = $("#fac1").val();
        var facNum = 1;

        //Step 2: Do something with the data
        if (fac1 === "") {
            swal("Whoopsy!", "Please enter a number before before fac-checking.");
        }
        else {
            for (var loop = Number(fac1); loop > 1; loop--) {
                facNum *= loop;
            }
            $("#facout").html("The <b>factorial</b> of <b>" + fac1 + "</b> is <b>" + facNum + "</b>");
            $('#myModal4').modal('show');        
        }
      
    });

    $("#btnfaccl").click(function () {
        $("#fac1").val("");
        $("#facout").html("");
    });

    //fizzbuzz

    $("#btnfb").click(function () {
        var numfiz = Number($("#numfiz").val());
        var numbuz = Number($("#numbuz").val());
        var outputarray = [];

        if (numfiz !== 0 && numfiz >= 0 && numbuz !== 0 && numbuz >= 0) {
            for (var loop = 1; loop <= 100; loop++)
                if (loop % numfiz === 0 && loop % numbuz === 0) {
                    outputarray.push("<span class='boldItalicPurple'>Fizzbuzz</span>");
                }
                else if (loop % numfiz === 0) {
                    outputarray.push("<span class='boldItalicGreen'>Fizz</span>");
                }
                else if (loop % numbuz === 0) {
                    outputarray.push("<span class='boldItalicOrange'>Buzz</span>");
                }
                else {
                    outputarray.push(loop);
                }
                $("#fzbzout").html(outputarray.join(", "));
                $('#myModal5').modal('show');
        }
        else {
            swal("Whoopsy!", "Please enter a valid number for both fields before fizzing the buzz.");
        }
    });

    $("#btnfbcl").click(function () {
        $("#numfiz").val("");
        $("#numbuz").val("");
        $("#fzbzout").html("");
    });

    $("#imgclick").click(function () {
        $('#myModal6').modal('show');
    });

    $("#imgclick1").click(function () {
        $('#myModal7').modal('show');
    });

    $("#imgclick2").click(function () {
        $('#myModal8').modal('show');
    });

    $("#imgclick3").click(function () {
        $('#myModal9').modal('show');
    });
});

$("#myCarousel").carousel({
    pause: true,
    interval: false
});

//customization 

