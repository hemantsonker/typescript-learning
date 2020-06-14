/*const person:object={
   name:"hemant",
   age:"35" 
}*/


const person={
   name:"hemant",
   age:"35"  
}

console.log(person.name);

//tuple
//tells exact number of elements in array
//array
//string/number
//role:[string,number]

enum Role{
Admin=1,
Publisher=2,
Author=3,
Revier=4,
Editor=5
}

const product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
      title: 'Red Carpet',
      description: 'A great carpet - almost brand-new!'
    },
    role:1
  }

  if(product.role===Role.Admin){
      console.log("Role provided is Author", Role.Admin)
  }

  console.log(product.details.title);

  for (const tag of product.tags) {
      console.log(tag);
  }
