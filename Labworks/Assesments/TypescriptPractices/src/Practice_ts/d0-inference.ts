/*
Type Inference.
-1. TS uses the type inference to determine the type of variable based on their values.
-2. This allow to write cleaner code without explicitly specifiying types.
-3. For example, TS can infer the type of a varaible based on value assigned to it.
*/ 
let x=10;   //TS infer the type of x as 'number'.
x=20; //valid
//x="hello" is not valid Error: Type 'string' is not assignable to type 'number'.

let y="Hello"; //this infers the type of y as 'string'.

//Types of variables in type script.

let a:number =10;                   //number
let b:string ="Hello World!";       //string
let c:boolean =true;                //boolean.
let d:any=10;                       //any 
//any is a special type in TS that allows you to assign any value to a variable, regardless of its type.
let e:any="Hello";                  //any

let f:number[] =[1,2,3];            //number array.
let g:string[] =["Hello","World"];  //string array.
let h:boolean[] =[true,false];      //boolean array.
let i:any[]=[1,"Hello",true];       //any array.
let j:[string,number]=["Hello",22]; //tuple
let k:object={
    name:"Bhargav",
    age:22,
    emailIds:{
        email:"abcd@gmail.com",
    },
    preferences:["sports","music"]
};

//object type is a generic type that represents any non-primitive type in TS.

//prine all the values and their data types in the format "value: datatype".
console.log(`a: ${typeof a}`);
console.log(`b: ${typeof b}`);
console.log(`c: ${typeof c}`);
console.log(`d: ${typeof d}`);
console.log(`e: ${typeof e}`);
console.log(`f: ${typeof f}`);
console.log(`g: ${typeof g}`);
console.log(`h: ${typeof h}`);
console.log(`i: ${typeof i}`);
console.log(`j: ${typeof j}`);
console.log(`k: ${typeof k}`);


