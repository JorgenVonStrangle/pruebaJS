/*This is JS */
//console.log('Hello World!');
//alert('Hello World');
//document.querySelector('body').innerHTML="Hello WOrld";

// 1. variables
//var name;
//name="aleks";
//var age;
//age=26;
//var price=12.5;

//Bad practice por palabra reservada
//lastname="Rojas";
//console.log(name);
//document.querySelector('body').innerHTML="Hello"+name;

/************************2. Number and Math****************/
/*
var age = 10;
age++; //add +1
var number=12.5;
console.log(age+number);
*/


/*
* Math
* Division = /
* Multiply = *
* addition = +
*Substract = -
*Mod       = %
*/

/*
var result = age + number;
console.log(result);

function isEvent(){
	if (number % 2 == 0){
 		return true;	
	}
	return false;
}
*/

/*
console.log(Math.pow(2,3));  	//Elevación de Potencia 
console.log(Math.round(0.9));
console.log(Math.ceil(0.1)); 	//Redondea a la unidad proxima mayor
console.log(Math.floor(0.9)); 	//Redondea a la unidad proxima menor
console.log(Math.PI); 			// Muestra el valor de PI
console.log(Math.random());		// Muestra un numero al azar
console.log(Math.sqrt(9));		// Raiz cuadrada de un numero
*/

/******************3. Strings ***********************/
/*
var newString =  "Hello World!";
var simpleString = 'Hello World';

var firstName = "Aleks";
var lastname = "Rojas";
var name = firstName;

console.log("El nombre es: "+name);
console.log('La Longitud de la cadena "name" es: '+ name.length);

//if inside
var result = name.indexOf("Aleks");
console.log("La posición donde inicia el nombre es: "+result);

//Example
if (name.indexOf("Aleks") != 0) {
	console.log("Welcome at your course");
}else{
	console.log("Who are you?");
}
*/


/*
var name="New Aleksandro";
console.log('Este es el valor de la variable "name" :'+name);
console.log('Aquí inicia "Aleks" '+name.indexOf("Aleks"));
console.log('Muestra el caracter en la posición "2" de name: '+name[2]);
console.log(name.length-1);
console.log(name[name.length-1]);
console.log('El caracter en la posición 1 es:' + name.charAt(1));
name=name.replace("A", "e");
console.log(name);
console.log(name.slice(1,6)); //muestra desde la posición 1 al 5
console.log(name.toUpperCase());
*/

//if(condition){}

/*
if(true){
	console.log("condition is true");
}
if(!false){
	console.log("Condition is true");
}

var numberOne=10;
var numberTwo=20;
if(numberOne>numberTwo){
	console.log('EL numero mayor es "numberOner" con valor:'+ numberOne);
}else{
	console.log('El numero mayor es "numberTwo" con valor:' + numberTwo);
}
*/

// El ciclo While
/*
var count= 0;
while(count<10){
	count++;
	console.log(count);
	if(count%2 ===0){
		console.log("Es par "+ count);
	}
}
*/

/*
var count=0;
do{
	count++;
	console.log(count);
	if(count>=10){
		break;
	}
}while(false);
*/

/*
//Ciclo For
//for (init; condition; increment){}

for(var i=0; i<10; i++){
	console.log(i);
}
var names=["Aleks", "Jorge", "Miguel"];
for(var i=0; i<names.length; i++){
	console.log(names[i]);
}
*/

//TypeOf - Null _ Undefinided
/*
var number=0;
console.log(typeof number);
if(typeof hello=="Undefinided"){
	console.log("Not Available");
}

// Null
var message="10";
var entero=parseInt(message);
console.log('El valor de "message" en entero mas "15" es: ' + (entero+15));
*/

//********************  5. DOM ************************
/*
var div=document.getElementById('myDiv');
div.classList.add("myNewClass");
// Array
var newDiv = document.getElementsByClassName("myNewClass");
console.log(newDiv);

document.getElementsByTagName("div");
//newDiv
//Return One

var myClass=document.querySelector(".myNewClass");
//return All
document.querySelectorAll("div");
//own query

var myClass=$("#myDiv");
function $(selector){
	return document.querySelector(selector);
}



// Events
function newClick(){
	alert(":3");
}
*/

/*
var newArray=[]; // Better
var newArray= new Array();
var newArray= new Array(20); // arreglo de 20 posiciones
var newArray= new Array(20, 10); // dos elementos 20 y 10

var newArray = [20, "Hola", {}, [] ];
console.log(newArray[0]);
console.log(newArray.length);

//How to add
newArray.push(7); //<-add last
newArray.unshift(7) // <- add first
newArray.pop();
console.log(newArray);

var otherArray = [20, 10, 15]; 
for(var i=0; i<newArray.length; i++){
	console.log(otherArray[i]);
}

for(var i=newArray.length; i>=0; i--){
	console.log(otherArray[i]);
}

//Optimized
var anotherArray = [20, 10, 15];
var i =anotherArray.length;

for (; i>=0; i--){
	console.log(anotherArray[i]);
}
*/

var suma=0;
do
	var ingreso = prompt('ingresa un número, si NO deseas seguir añadiendo numeros solo escribe "fin" ');
	
while (ingreso != "fin" || isNaN(ingreso)==false);
console.log(suma)














