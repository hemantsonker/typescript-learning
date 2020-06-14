//undefined is valid type in typescript

let value=undefined;

function add(n1:number,n2:number){
    return n1 + n2;
}

function printResult(num:number):void{
    console.log('Result ' +num);
}



printResult(add(5,9));

//let combineValue:Function;
let combineValue:(a:number,b:number) => number;


//function as types

//right side of arrow defines return type 

//let combinedValues:()=>number;

combineValue=add;
//combineValue=printResult;

console.log(combineValue(8,9));



function addHandle(num1:number,num2:number,cb:(num:number)=>void){
    const result=num1 + num2;
    cb(result);
}

//callback fn
addHandle(40,30,(result)=>{
    console.log(result);
})



function sendRequest(data: string, cb: (response: any) => void) {
    // ... sending a request with "data"
    return cb({data: 'Hi there!'});
  }
  sendRequest('Send this!', (response) => { 
    console.log(response);
    return true;
   });