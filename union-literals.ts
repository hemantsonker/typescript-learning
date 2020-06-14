//union types

function combine(input1:number|string,input2:number|string){

let result;

if(typeof input1==='number' && typeof input2==='number'){
    result=input1+input2;
}else{
    result=input1.toString()+input2.toString();
}
return result;


}


const addAges=combine(27,23);
console.log(addAges);


const addNames=combine("hemant","jaya");

console.log(addNames);


//literal types

function addLiterals(input1:number|string ,input2:number|string ,resultType:'as-number'|'as-text'){
    let result;
    if(typeof input1==='number' && typeof input2==='number' || resultType==='as-number'){
        result=+input1 + +input2;
        //+sign denotes it is using number otherwsie we can also use parseInt/parseFloat
    }else{
        result=input1.toString()+input2.toString()
    }

    if(resultType==='as-number'){
        return parseFloat(result);
    }else{
        return result.toString();
    }
}

const agesUsingLiterals=addLiterals(29,33,'as-number');
console.log(agesUsingLiterals);
const addingNameUsingLiterals=addLiterals('anu','vivek','as-text');
console.log(addingNameUsingLiterals);


//add alias which can be used via using type operator in typescript

type combine=number|string;
type combineDescriptor='as-number'|'as-text';



function addLiteralsUsingType(input1:combine ,input2:combine ,resultType:combineDescriptor){
    let result;
    if(typeof input1==='number' && typeof input2==='number' || resultType==='as-number'){
        result=+input1 + +input2;
        //+sign denotes it is using number otherwsie we can also use parseInt/parseFloat
    }else{
        result=input1.toString()+input2.toString()
    }

    if(resultType==='as-number'){
        return parseFloat(result);
    }else{
        return result.toString();
    }
}

const ageUsingType=addLiteralsUsingType(40,62,'as-number');

console.log(ageUsingType);


//Type Aliases & Object Types
type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 };
console.log(u1.name);



//

function greet(user: { name: string; age: number }) {
    console.log('Hi, I am ' + user.name);
  }
   
  function isOlder(user: { name: string; age: number }, checkAge: number) {
    return checkAge > user.age;
  }

  //above two snippets can be minfied 

  type User1 = { name: string; age: number };
 
function greet1(user: User1) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder1(user: User1, checkAge: number) {
  return checkAge > user.age;
}

const userName={
    name:'hemant',
    age:35
}

greet1(userName);

const isValid=isOlder(userName,40);

console.log(isValid);


