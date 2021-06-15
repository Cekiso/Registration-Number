var RegNo = document.querySelector(".regNo");
var Regbutton = document.querySelector(".bttn");
var RegTown = document.querySelector(".town");
var radioBttn = document.querySelector(".radio");
var display = document.querySelector(".ShowAll");
var regMsg = document.querySelector(".message");
var regError = document.querySelector(".errors");
var regClearBttn = document.querySelector(".clearBttn");

//style
function myFunction(regLists) {
    if (regLists) {
        for (var i = 0; i < regLists.length; i++) {
            var node = document.createElement("LI");
            var textnode = document.createTextNode(regLists[i]);
            node.appendChild(textnode);
            document.getElementById("lists").appendChild(node);
        }
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

var remove = document.getElementById("lists")
const container = document.querySelector('.message');

//declaring the variable to store existing names from the localstorage.
var existingNames;

//checking if the names are existing from the local storage
if (localStorage['regNo']) {
    //if names exist retrive them from the localstorage
    existingNames = JSON.parse(localStorage['regNo'])
}







var Reginstance = Reg(existingNames);
var test = Reginstance.Names(RegNo.value);
myFunction(test)

function regNumber() {
    //var addButton = document.querySelector("input[name='place']:checked");

    var addButton = document.createElement("BUTTON");

    if (addButton) {


        Reginstance.setReg(RegNo.value);
        regError.innerHTML = Reginstance.error(RegNo.value);
        localStorage['regNo'] = JSON.stringify(Reginstance.Names(RegNo.value, Regbutton.value));
        var test = Reginstance.Names(RegNo.value)

        removeAllChildNodes(container);
        myFunction(test)


    }
    RegNo.value = "";
    setTimeout(function() {
        regError.innerHTML = '';
    }, 3000);
}




//gonna pull/ show the RegNo that are added
function pullRegNo() {
    var addRadio = document.querySelector('input[type=radio][name=place]:checked').value;
    if (addRadio) {

        var test2 = Reginstance.number(addRadio)
        removeAllChildNodes(container);
        myFunction(test2)
        regError.innerHTML = Reginstance.errorhandling(addRadio);
    }
    RegNo.value = "";
    setTimeout(function() {
        regError.innerHTML = '';
    }, 3000);
}

function clearBttn() {
    localStorage.clear();
    location.reload();


}
Regbutton.addEventListener("click", regNumber);
radioBttn.addEventListener("click", pullRegNo);
regClearBttn.addEventListener("click", clearBttn);