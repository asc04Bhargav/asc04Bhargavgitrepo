//classes inheritance and constructors.
//TS supports object oriented programming with classes and inhertance.

class Animall{
    constructor(public name:string){
        console.log("base method called first")
    }
    makeSound():void{
        console.log(`${this.name} makes sound`);
            //`${this.name} makes sound` is an example of string interpolation in TypeScript. The ${} syntax allows you to embed expressions within a string literal.
            //` is used to define a template literal string, which allows you to embed expressions within a string literal.

    }
}
//inheritance
class Dogg extends Animall{
    constructor(name:string){
        super(name);
        console.log("Dog constructor called")
    }

    makeSound(): void {
        console.log(`${this.name} barks`);
    }
}

var animals= new Animall("Dog");
animals.makeSound();    //calling method 

var var2=new Dogg("bubby");
var2.makeSound();
