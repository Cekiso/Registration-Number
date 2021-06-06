

function Reg(){

    var regList = [];
    var CAList = [];
    var CJList =[];
    var GPList =[];
    var allList =[];
    allList.push(CAList);
    allList.push(CJList);
    allList.push(GPList);

    function number(code){
        var i;
        for (i = 0; i < regList.length; i++) {
          if(regList[i].includes(code) && !CAList.includes(regList[i])){
            CAList.push(regList[i])  
            //return regList[i];
          }
        }return CAList;
    }
    function setReg(regNumber) {
        
        if (!regList.includes(regNumber)) {
            regList.push(regNumber);
        } else {
            return;

        }

    }

    function Names() {
        //console.log(regList);
        return regList;

    }
    return{
        number,
        setReg,
        Names
    }
}