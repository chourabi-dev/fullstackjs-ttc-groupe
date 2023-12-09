// IN JS DEV WE NEVER USE TYPES !!!!


//  DEBUG 
// console.log("hello world"); 


// window
// console.log( window );


// document
// console.log(window.document);

// var a is now accessible in the intire application !!!
var a = "js is cool !!";

// i can re-declare a js var
var a = "demo";

const pi = 3.14;


/////////////////////////////////////////////////// TYPES ////////////////////////////////////////////////////////

var email = "tchourabi@gmail.com";
var year = 2023;
var money = 150.50;
var errorNumber = NaN; //  10 / 5=> 2    10 / bonjour => NaN
var truth = false;
var employees = [ 'chourabi taher','chourabi taher','chourabi taher',10,true ]; // all arrays is js are dynamique arrays
var employee = { fullename:"chourabi taher", email:"tchourabi@gmail.com" }; // JSON object 
var today = new Date();

//////////////////////////////////////////////// TP1 /////////////////////////////////////////////////////////////

/*

all attributes in HTML balies can play the GET/SET roles

document.getElementById("somme").innerHTML   GET
'31'
document.getElementById("somme").innerHTML = "bonjour"   SET
'bonjour'

*/

/*

var x = 15;
var y = 16;

var s = x + y ;



document.getElementById("somme").innerHTML = s;
document.getElementById("x").innerHTML = x;
document.getElementById("y").innerHTML = y;
*/


function calculer(){
    const inputx = document.getElementById("inputx");
    const inputy = document.getElementById("inputy");
    const result = document.getElementById("result");
    

    let s = Number(inputx.value) + Number(inputy.value);

    result.innerHTML = "La somme de x + y = " + s
    
}




