var btnPress = document.querySelector("#btn-pressed");
var Outputtxt = document.querySelector("#output");
var Datetxt = document.querySelector("#myDate");
var option = document.querySelector("#selectBox");




function eventHandler() {
    var day = Datetxt.value[8] + Datetxt.value[9];
    var year = Datetxt.value[0] + Datetxt.value[1] + Datetxt.value[2] + Datetxt.value[3];

    if (option.value == "leap") {

        if (year % 4 == 0) {
            Outputtxt.innerText = Datetxt.value + " : Your birthyear is a leap year ";
        } else {
            Outputtxt.innerText = Datetxt.value + " : Your birthyear is not a leap year ";
        }
    } else {

        var cnt = false;
        for (var i = 2; i < 20; i++) {
            if (i != day) {
                if (day % i == 0) {
                    cnt = true;
                }
                if (day == 1) {
                    cnt = true;
                }
            }

        }
        if (cnt == true) {
            Outputtxt.innerText = Datetxt.value + " : Your birthday is not prime number";
        } else {
            Outputtxt.innerText = Datetxt.value + " : Your birthday is a prime number";
        }
    }


};

btnPress.addEventListener("click", eventHandler);