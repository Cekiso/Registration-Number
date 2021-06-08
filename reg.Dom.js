var RegNo = document.querySelector(".regNo");
var Regbutton = document.querySelector(".bttn");
var RegTown = document.querySelector(".town");
var radioBttn = document.querySelector(".radio");
var display = document.querySelector(".ShowAll");
var regMsg = document.querySelector(".message");



//style
document.querySelector(".message").style.border = "1px solid blue ";
document.querySelector(".message").style.fontFamily = "Arial";
//document.querySelector(".message").style.fontSize = "larger";
document.querySelector(".message").style.display = "inline";
//style

//for loop for the RegNo
var div = document.getElementsByClassName("regNo");
for (var i = 0; i < div.length; i++) {

}

//declaring the variable to store existing names from the localstorage.
var existingNames;

//checking if the names are existing from the local storage
if (localStorage['regNo']) {
    //if names exist retrive them from the localstorage
    existingNames = JSON.parse(localStorage['regNo'])
}

var Reginstance = Reg(existingNames)

function regNumber() {
    //var addButton = document.querySelector("input[name='place']:checked");
    var addButton = document.createElement("BUTTON");
    if (addButton) {
        Reginstance.setReg(RegNo.value);
        regMsg.innerHTML = Reginstance.Names(RegNo.value)
        localStorage['regNo'] = JSON.stringify(Reginstance.Names(RegNo.value, Regbutton.value));

        // document.body.appendChild(addButton);
        //console.log(number)
    }
}

//gonna pull/ show the RegNo that are added
function pullRegNo() {
    var addRadio = document.querySelector('input[type=radio][name=place]:checked').value;
    if (addRadio) {
        regMsg.innerHTML = Reginstance.number(addRadio)
    }

}
Regbutton.addEventListener("click", regNumber);
radioBttn.addEventListener("click", pullRegNo)