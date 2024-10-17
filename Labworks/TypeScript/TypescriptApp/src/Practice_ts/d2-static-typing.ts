console.log("TypeScriot Features");
/* 1.Static Typing
Ts introduces ststic typing to JS, allowing you to define the types of variables, funtion parameters, and return values.
This helps you to catch the errors at complile time rather than at run time. */

function addd(a:number, b:number):number{
    return a+b;
}

const res=addd(10,5);
console.log(res);
