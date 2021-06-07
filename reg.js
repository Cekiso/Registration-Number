

function Reg(existingNamesAlready){

    var regList = existingNamesAlready || [];
    
    
    
//it filters based on the town 
    function number(code){
        var allList =[];
        var i;
        for (i = 0; i < regList.length; i++) {
          if(regList[i].includes(code) && !allList.includes(regList[i])){
            allList.push(regList[i])  
            //return regList[i];
          }else if(code == 'ShowAll'){
              return regList;
          }
        }return allList;
        
    }
    function setReg(regNumber) {
        
        if (!regList.includes(regNumber.toUpperCase()) && regNumber!="") {
            regList.push(regNumber.toUpperCase());
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