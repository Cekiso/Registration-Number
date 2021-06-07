var RegNo = document.querySelector(".regNo");
var Regbutton = document.querySelector(".bttn");
var RegTown = document.querySelector(".town");
var radioBttn = document.querySelector(".radio");
var display = document.querySelector(".ShowAll");
var regMsg = document.querySelector(".message");

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
        localStorage['regNo'] = JSON.stringify(Reginstance.Names(RegNo.value));
        
            // document.body.appendChild(addButton);
            //console.log(number)
    }
    //gonna pull/ show the MSG
    


}
function pullRegNo (){
    var addRadio = document.querySelector('input[type=radio][name=place]:checked').value;
    if(addRadio){
        regMsg.innerHTML = Reginstance.number(addRadio)
    }

}
Regbutton.addEventListener("click", regNumber);
radioBttn.addEventListener("click",pullRegNo)
