//unknow is a type
var val1;
val1 = 'hello';
val1 = 23;
//above snippets will behave similar as type defined as any
//let val1:any
//problem will arise when we assign some variable with other type
var val2;
val2 = 'happy';
//val2=val1;
//Type 'unknown' is not assignable to type 'string'
//if we define lat val3:any
var val3;
val3 = 'hello';
val3 = val1; // snippet will pass.
//never type
//default this functions will be void.void is used where there is no data type
//if we use never, it will never return anything
function generateError(error, errorCode) {
    throw { msg: error, code: errorCode };
}
//generateError('An error occured',500);
var something = null;
//let nothing: never = null; // Error: Type 'null' is not assignable to type 'never'
function sayHi() {
    console.log('Hi!');
}
var speech = sayHi();
console.log(speech); // undefined
