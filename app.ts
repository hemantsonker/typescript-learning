//unknow is a type

let val1:unknown;

val1='hello'
val1=23


//above snippets will behave similar as type defined as any
//let val1:any
//problem will arise when we assign some variable with other type

let val2:string;

val2='happy';
//val2=val1;
//Type 'unknown' is not assignable to type 'string'

//if we define lat val3:any

let val3:any;
val3='hello';
val3=val1;// snippet will pass.


//never type

//default this functions will be void.void is used where there is no data type

//if we use never, it will never return anything

function generateError(error:string,errorCode:number):never{
    throw {msg:error,code:errorCode};
    
}

//generateError('An error occured',500);

let something: void = null;
//let nothing: never = null; // Error: Type 'null' is not assignable to type 'never'

function sayHi(): void { 
    console.log('Hi!')
}

let speech: void = sayHi();
console.log(speech); // undefined

//speech is undefined, because the sayHi 
//function internally returns undefined even if return type is void. 
//If you use never type, speech:never will give a compile time error, as void is not assignable to never.

