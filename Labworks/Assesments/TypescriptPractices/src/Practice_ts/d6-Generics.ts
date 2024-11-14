//Generics alloes you to create reusable components that work with data type.

function identit<T>(arg: T):T{
    return arg;
}

const num1=identit<number>(132);
const num2=identit<string>("USN");

console.log(num1);
console.log(num2);
