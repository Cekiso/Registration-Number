var RegNo = document.querySelector(".regNumber");
var Regbutton = document.querySelector(".bttn");
var capetown = document.querySelector(".capeTown");
var paarl = document.querySelector(".Paarl");
var gauteng = document.querySelector(".gauteng");
var radioBttn = document.querySelector(".radio");
var display = document.querySelector(".ShowAll");
var regMsg = document.querySelector(".message");




var Reginstance = Reg()

function regNumber(){
    var addButton = document.querySelector("input[name='place']:checked");
    
    if (addButton) {
        Reginstance.setReg(RegNo.value);
        regMsg.innerHTML = Reginstance.number(addButton.value)
        
    }
    
    
}
Regbutton.addEventListener("click", regNumber);
