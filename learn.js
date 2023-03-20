var lastName="basker";
var no=12;
var bl=30.45;


console.log("lastName"+no);

let tamil={
    fName:"sathish",
    lName:"kumar",
    age:29,
    gender:"male",
    dead:false,
    address:"xxx,yyy,zzz."
}


let namee=tamil.fName;
console.log(tamil);
console.log(tamil['lName']);

console.log("name - "+namee);
let concat="jflsahfdkl - "+tamil.gender+" - fjlkjfdlksjf - "+lastName+" - "+tamil.lName

console.log(concat);


let arys=["sathish",29,"male","xxx yyy zzz"];

console.log(arys[2]);

// ==============================================================================================


let num=10;
let num1=15;
let a=num+num1;
let b=num-num1;
let c=num*num1;

console.log("a - " +a);

console.log("b - " +b);
console.log(c);

let zzz=50;

zzz+=10;
zzz--;

console.log(zzz);

let tik=10;
let gender="male";

let connn=3;


switch(connn){

    case 1:
        if(tik>=10 || gender=="male")
            alert("allowed");
    case 2:
     alert("not");

    default:
        alert("not fun");

}

for(let number=1;number<=10;number++){
    console.log(number);
   // alert(number);
}



function add(x,y)
{
    alert(x+y);
}





