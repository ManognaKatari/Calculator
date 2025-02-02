const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button");
const specialChars = ["%","*","/","-","+","="];
let output = "";

const calculate=(btnValue) => {
    if(btnValue==="=" && output!==" "){
        output=eval(output.replace("%","/100"));
    }else if(btnValue=== "AC"){
        output=""
    }else if(btnValue==="DEL"){
        output=output.toString().slice(0,-1);
    }else {
        if(output==="" && specialChars.includes(btnValue)) return;
        output+=btnValue;
    }
    display.value=output;
};

buttons.forEach((button) => {
    button.addEventListener("click",(e)=> {
        const btnValue = e.target.getAttribute("data-value");
        calculate(btnValue);
});
});