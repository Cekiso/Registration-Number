function Reg(existingNamesAlready) {

    var regList = existingNamesAlready || [];



    //This function it filters based on the town selected
    function number(code) {
        var allList = [];
        var i;
        for (i = 0; i < regList.length; i++) {
            if (regList[i].includes(code) && !allList.includes(regList[i])) {
                allList.push(regList[i])
                    //return regList[i];
            } else if (code == 'ShowAll') {
                return regList;
            }
        }
        return allList;

    }




    //a function where by i set my RegNo in the input field
    function setReg(regNumber) {
        error(regNumber)
        if (/^((CA|CJ|GP)\ ([0-9]){3}\ ([0-9]){3})$/.test(regNumber.toUpperCase()) || /^((CA|CJ|GP)\ ([0-9]){6})$/.test(regNumber.toUpperCase()) || /^((CA|CJ|GP)\ ([0-9]){5})$/.test(regNumber.toUpperCase())) {
            if (!regList.includes(regNumber.toUpperCase()) && regNumber != "") {
                regList.push(regNumber.toUpperCase());
            } else {
                return;
            }


        } else {
            return
        }

    }

    function error(regNumber) {
        if (/^((CA|CJ|GP)\ ([0-9]){3}\ ([0-9]){3})$/.test(regNumber.toUpperCase()) || /^((CA|CJ|GP)\ ([0-9]){6})$/.test(regNumber.toUpperCase()) || /^((CA|CJ|GP)\ ([0-9]){5})$/.test(regNumber.toUpperCase())) {
            if (!regList.includes(regNumber.toUpperCase()) && regNumber != "") {}

            return null;
        } else {
            return "please enter a valid reg e.g CA XXX XXX";
        }
    }


    function Names() {
        //console.log(regList);
        return regList;

    }

    return {
        number,
        setReg,
        Names,
        error

    }
}