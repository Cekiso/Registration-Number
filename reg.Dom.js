var RegNo = document.querySelector(".regNo");
var Regbutton = document.querySelector(".bttn");
var RegTown = document.querySelector(".town");
var radioBttn = document.querySelector(".radio");
var display = document.querySelector(".ShowAll");
var regMsg = document.querySelector(".message");



//style
// document.querySelector(".message").style.border = "1px solid blue ";
// document.querySelector(".message").style.fontFamily = "Arial";
// document.querySelector(".message").style.fontSize = "larger";
// document.querySelector(".message").style.display = "inline";
//style

//for loop for the RegNo

// var divs = document.getElementsByClassName("message");
// for (var i=0; i < divs.length; i++)
// {   var test = document.createElement("divs1") 
//     test.innerHTML = 'test'
//     divs[i].style.border = "1px solid blue"
// }
// var test = document.createElement("divs1") 
// test.innerHTML = 'test'

//declaring the variable to store existing names from the localstorage.
var existingNames;

//checking if the names are existing from the local storage
if (localStorage['regNo']) {
    //if names exist retrive them from the localstorage
    existingNames = JSON.parse(localStorage['regNo'])
}

var Reginstance = Reg(existingNames)
regMsg.innerHTML = Reginstance.Names(RegNo.value).join(" | ");

function regNumber() {
    //var addButton = document.querySelector("input[name='place']:checked");
    var addButton = document.createElement("BUTTON");
    
    if (addButton) {
        Reginstance.setReg(RegNo.value);
        regMsg.innerHTML = Reginstance.Names(RegNo.value).join(" | ");
        localStorage['regNo'] = JSON.stringify(Reginstance.Names(RegNo.value, Regbutton.value));

        // document.body.appendChild(addButton);
        //console.log(number)
    }
    RegNo.value = "";
}


//gonna pull/ show the RegNo that are added
function pullRegNo() {
    var addRadio = document.querySelector('input[type=radio][name=place]:checked').value;
    if (addRadio) {
        regMsg.innerHTML = Reginstance.number(addRadio).join(" | ");
    }

}
Regbutton.addEventListener("click", regNumber);
radioBttn.addEventListener("click", pullRegNo)