// Author: Shiyen Yang
// Date: 11/27/2023
// Lab 13: Loops

$("#submit").click(function() {
    let num0 = $("#num0").val();
    let num1 = $("#num1").val();
    let num2 = $("#num2").val();
    let num3 = $("#num3").val();

    let word0 = $("#word0").val();
    let word1 = $("#word1").val();
    let word2 = $("#word2").val();
    let word3 = $("#word3").val();

    $("#output").empty();

    for (let i = 1; i <= 23; ++i) {
        let val = "";
        if (i % num0 == 0) {
            val += word0;
        }
        if (i % num1 == 0) {
            val += word1;
        }
        if (i % num2 == 0) {
            val += word2;
        }
        if (i % num3 == 0) {
            val += word3;
        }
        if (val == "") {
            val = i;
        } else {
            val += "!";
        }
        $("#output").append("<p>" + val + "</p>");
    }
    });