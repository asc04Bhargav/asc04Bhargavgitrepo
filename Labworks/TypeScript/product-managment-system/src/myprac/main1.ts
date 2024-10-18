import { FormManager } from "./formManager";
import { formm } from "./forminstance";

console.log("Welcome to registration form.");

const formManager=new FormManager();

const form1:formm={
    id:1,
    name: "Bhargav",
    age: 22,
    gender: "Male",
    mobileNumber: 854367864,
    maritalStatus: "UnMarried",
    address: "Rompicherla, chittoor,AP."
}

const form2:formm={
    id: 2,
    name: "Mani",
    age: 22,
    gender: "Male",
    mobileNumber: 815367282,
    maritalStatus: "UnMarried",
    address: "Rompicherla"
}

const form3:formm={
    id: 3,
    name: "Sagar",
    age: 21,
    gender: "Male",
    mobileNumber: 875453,
    maritalStatus: "UnMarried",
    address: "Rompicherla"
}

formManager.addData(form1);
formManager.addData(form2);
formManager.addData(form3);

let form:formm[]=formManager.listData();

console.log(form);

formManager.searchData(2);