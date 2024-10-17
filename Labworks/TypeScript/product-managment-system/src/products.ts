/**Purpose :export the Product interface
 The export keyword is used to export functions, objects or primitive values from a file(or module) so that they can be used by other programs with the import keywords.
 */
 export interface product{
    id: number;
    name: string;
    category: string;
    price: number;
    rating: number;
    reviewcost: number;
    brand: string;
    availability: string;
    //make the properties optional
    color: string;
    storage: string;
    //The releasedate property is mandatory.
    releasedate: string;
}

// export interface formm{
//     name:string;
//     age:number;
//     gender:string;
//     mobileNumber:number;
//     maritalStatus:string;
//     address:string;
// }