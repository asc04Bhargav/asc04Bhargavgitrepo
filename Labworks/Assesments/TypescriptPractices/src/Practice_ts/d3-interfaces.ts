/*classes and inferences
TS supports classes and inferences, which allow you to define blueprint for objects and enforce the structure of your code. 

interfaces define the shape of an object, specifying the types of its properties.*/

interface User{
    name:string;
    age:number;
    email:string;
}

const user:User={
    name:"Bhargav",
    age:22,
    email:"abcd@gmail.com",
};

console.log(user);




