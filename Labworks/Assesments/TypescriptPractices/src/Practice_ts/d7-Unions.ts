/*
Union Types
It allows you to specify that a variable can have multiple types.
This is useful when a function can accept different types of input.
For example, you can define a function takes a string or a number as an argument. */

/*Difference b/w literals ans string types?
    A literal type is a type that represents a specific value, while a string type represents any string value.
*/

function printId(id:string|number){
    console.log(id);
}

printId(101);
printId("101");

//you can also use union types with interfaces to define objects that can have different property types.

interface Circle{
    kind:"circle";  //kind property is literal type that specifies the shape of the object.
    radius:number;  //This property is number type that specifies radius of the circle.

}

interface Square{
    kind:"square";
    sideLength:number;
}

//Usage
function getArea(shape:Circle|Square):number{
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2;

        case "square":
            return shape.sideLength**2;
    }
}


const circle: Circle={kind: "circle", radius: 12};
const square: Square={kind: "square",sideLength:10};

console.log(getArea(circle));
console.log(getArea(square));

