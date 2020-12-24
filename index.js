var btnPress = document.querySelector("#btn-pressed");
var textInput = document.querySelector("#txtarea");
var Outputtxt = document.querySelector("#output");



function eventHandler(){
    Outputtxt.innerText = "jjdj" + textInput.value;
    
}

btnPress.addEventListener("click",eventHandler);