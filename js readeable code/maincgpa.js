function fn2(){
    let credit1 = document.getElementById("credit1").value;
    let gpa1 = document.getElementById("gpa1").value;
  
    let credit2 = document.getElementById("credit2").value;
    let gpa2 = document.getElementById("gpa2").value;
  
    let credit3 = document.getElementById("credit3").value;
    let gpa3 = document.getElementById("gpa3").value;
  
    let credit4 = document.getElementById("credit4").value;
    let gpa4 = document.getElementById("gpa4").value;
  
    let credit5 = document.getElementById("credit5").value;
    let gpa5 = document.getElementById("gpa5").value;
  
    let credit6 = document.getElementById("credit6").value;
    let gpa6 = document.getElementById("gpa6").value;
  
    let credit7 = document.getElementById("credit7").value;
    let gpa7 = document.getElementById("gpa7").value;
  
    let credit8 = document.getElementById("credit8").value;
    let gpa8 = document.getElementById("gpa8").value;

    
let x1 = Number(credit1);
let y1 = Number(gpa1);

let x2 = Number(credit2);
let y2 = Number(gpa2);

let x3 = Number(credit3);
let y3 = Number(gpa3);

let x4 = Number(credit4);
let y4 = Number(gpa4);

let x5 = Number(credit5);
let y5 = Number(gpa5);

let x6 = Number(credit6);
let y6 = Number(gpa6);

let x7 = Number(credit7);
let y7 = Number(gpa7);
    
let x8 = Number(credit8);
let y8 = Number(gpa8);

let totalgrade = (x1*y1)+(x2*y2)+(x3*y3)+(x4*y4)+(x5*y5)+(x6*y6)+(x7*y7)+(x8*y8) ;
let totalcredit = x1 + x2 + x3 + x4 + x5 + x6 + x7 + x8; 
let cgpaf = totalgrade / totalcredit;
let cgpa = cgpaf.toFixed(2);

document.getElementById("results").innerHTML = "Your CGPA is = " + cgpa;


}