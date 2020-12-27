var star = "✨"; 

var btnTrans = document.querySelector("#btnPressed");
var outputDiv = document.querySelector("#OutputStr");
         
function clickHandler() {
   
    var a = outputDiv.innerText;
var b = document.createTextNode(star);

document.body.appendChild(b);


};


btnTrans.addEventListener("click", clickHandler);
