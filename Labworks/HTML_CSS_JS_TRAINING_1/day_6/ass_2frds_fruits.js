const friends=[
    {name:"Bhargav", favFruit:"Mango"},
    {name:"Uday",favFruit:"Orange"},
    {name:"Rohit",favFruit:"Apple"},
    {name:"Sandeep",favFruit:"Banana"}
];

const favouriteFruit = friends.map(friend => {return `${friend.name} : ${friend.favFruit}`;});

console.log(favouriteFruit);