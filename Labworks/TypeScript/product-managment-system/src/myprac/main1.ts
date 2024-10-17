import { FormManager } from "./formManager";
import { formm } from "./forminstance";

console.log("Welcome to registration form.");

const formManager=new FormManager();

const form1:formm={
    name: "Bhargav",
    age: 22,
    gender: "Male",
    mobileNumber: 854367864,
    maritalStatus: "UnMarried",
    address: "Rompicherla, chittoor,AP."
}

formManager.addData(form1);

let form:formm[]=formManager.listData();

console.log(form);