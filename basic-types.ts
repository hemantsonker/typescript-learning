function add(num1:number,num2:number,showResult:boolean,phrase:string){
    const result=num1+num2;
    if(showResult){
        console.log(phrase + result);
    }else{
        return result;
    }
}

const a=4;
const b=2.5;
const phrase="Result is : ";
const showResult=true;

const result=add(a,b,showResult,phrase);

let rname:string;
rname="hemant";
//rname=false;

console.log(rname);

//console.log("valid result" ,result);
