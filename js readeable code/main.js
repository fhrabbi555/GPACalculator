
function fn1(){
  let credit1 = document.getElementById("credit1").value;
  let grade1 = document.getElementById("grade1").value;

  let credit2 = document.getElementById("credit2").value;
  let grade2 = document.getElementById("grade2").value;

  let credit3 = document.getElementById("credit3").value;
  let grade3 = document.getElementById("grade3").value;

  let credit4 = document.getElementById("credit4").value;
  let grade4 = document.getElementById("grade4").value;

  let credit5 = document.getElementById("credit5").value;
  let grade5 = document.getElementById("grade5").value;

  let credit6 = document.getElementById("credit6").value;
  let grade6 = document.getElementById("grade6").value;

  let credit7 = document.getElementById("credit7").value;
  let grade7 = document.getElementById("grade7").value;

  let credit8 = document.getElementById("credit8").value;
  let grade8 = document.getElementById("grade8").value;

  let credit9 = document.getElementById("credit9").value;
  let grade9 = document.getElementById("grade9").value;
  

let x1 = Number(credit1);
let y1 = Number(grade1);

let x2 = Number(credit2);
let y2 = Number(grade2);

let x3 = Number(credit3);
let y3 = Number(grade3);

let x4 = Number(credit4);
let y4 = Number(grade4);

let x5 = Number(credit5);
let y5 = Number(grade5);

let x6 = Number(credit6);
let y6 = Number(grade6);

let x7 = Number(credit7);
let y7 = Number(grade7);

let x8 = Number(credit8);
let y8 = Number(grade8);

let x9 = Number(credit9);
let y9 = Number(grade9);

let totalgrade = (x1*y1)+(x2*y2)+(x3*y3)+(x4*y4)+(x5*y5)+(x6*y6)+(x7*y7)+(x8*y8)+(x9*y9) ;
let totalcredit = x1 + x2 + x3 + x4 + x5 + x6 + x7 + x8 + x9; 
let gpaf = totalgrade / totalcredit;
let gpa = gpaf.toFixed(2);

document.getElementById("result").innerHTML = "Your GPA is = " + gpa;



}