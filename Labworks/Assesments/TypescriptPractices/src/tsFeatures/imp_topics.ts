//Generics allows you to create reausable components that work with any data type.
function identity<T>(arg:T):T{
    return arg;
}

const num=identity<number>(2423);
const str=identity<string>("Hello World!");

console.log(num);
console.log(str);

//Enums allows you to define a set of named constants.
enum Direction{
    Up,
    Down,
    Left,
    Right
}

const move =Direction.Up;
console.log(move);  //O/p= 0.

//print the values of enum.
console.log(Direction[move]); //o/p Up
console.log(Direction[1]);//O/p Down.


enum Direction1{
    Up=1,
    Down,
    Left=50,
    Right
}

console.log(Direction1.Up);     //O/p=1
console.log(Direction1.Down);   //O/p=2
console.log(Direction1.Left);   //O/p=50
console.log(Direction1.Right);  //O/p=51

//Modules -It allows you to organize your code into reusable units.
//You can export modules, classes, and interfaces from a moduleusing export keyword.

