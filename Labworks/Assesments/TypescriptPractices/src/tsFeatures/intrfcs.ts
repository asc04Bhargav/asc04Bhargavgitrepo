//classes and interfaces.
//class defines the structure of an object.
//interfaces specifies shape of an object, specifies types of its properties.

interface Form{
    F_name:string;
    email:string;
    age:number;
    mob_number:number;
}

//creating an object.
const reg_form:Form={
    F_name:"Bhargav",
    email:"bhargav@gmail.com",
    age:21,
    mob_number:76132731864,
}

console.log(reg_form);

class Animal{
    constructor(public name:string){}

    makeSound():void{
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal{
    makeSound(): void {
        console.log(`${this.name} barks.`);
        //`${this.name} barks.`
        //this is an example of interpolation.
        

    }
}

//new is a keyword used to create an instance of a class.
const animal= new Animal("Cat");
animal.makeSound();

const dog=new Dog("Dog");
dog.makeSound();