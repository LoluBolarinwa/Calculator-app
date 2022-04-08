//add onclick event for all the table cells
// add event listener to td cells
// direct event listened to display on id=result
// console log the result of  display

//capture all innerHTML text in td tags into a variable
/* var allCalculation = document.querySelectorAll("td").length.innerHTML; */

let result = document.getElementById("result").innerHTML;
document.getElementById("result") = input_Number;

const input = document.querySelectorAll(".input").length;

for (let i = 0; i < input; i++) {
    document.querySelectorAll(".input")[i].addEventListener('click', function(){

        var input_Number = this.innerHTML;
        document.getElementById("result").innerHTML += (input_Number);
        // var jojo = eval(input_Number);
        // var kiki =eval( parseInt(input_Number));


        let evaluate = document.getElementById('result').innerHTML;
document.getElementById('equalto').addEventListener('click', function(){
    // alert(eval(jojo));
    // alert(eval(input_Number));
    // var des = Number(input_Number)
    // alert(eval(des));
   var koko = eval(document.getElementById('result').innerHTML);
// alert(koko)     ;
    document.getElementById('finalResult').innerHTML = koko;

});
        

    });
}

document.getElementById("clearEve").addEventListener('click', function(){
    document.getElementById("result").innerHTML = "";
    document.getElementById("finalResult").innerHTML = "";

});

let equal_To = document.getElementById('equalto');
    let evaluate = document.getElementById('result').innerHTML;
document.getElementById('equalto').addEventListener('click', function(){
    alert(evaluate);



var calculation = document.querySelectorAll("td").innerHTML;
document.getElementById("result").appendChild(calculation);
