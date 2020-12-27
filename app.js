var star = "✨"; 

var btnTrans = document.querySelector("#btnPressed");
var outputDiv = document.querySelector("#OutputStr");
         
function clickHandler() {
   
    var a = outputDiv.innerText;
a = document.createTextNode(star);

document.body.appendChild(a);


};


btnTrans.addEventListener("click", clickHandler);
