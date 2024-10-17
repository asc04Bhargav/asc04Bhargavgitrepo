console.log("Welcome to product Management System App");
//1-Import productManager
import { ProductManager } from "./productManager";
import { product} from "./products";
//2-create an instance of the productManager class
const productManager=new ProductManager();
//3-Create a product object

const product:product={
    id: 1,
    name: 'Samsung S21',
    category: 'mobile',
    price: 80000,
    rating: 4.5,
    reviewcost: 100,
    brand: "Samsung",
    availability: "yes",
    color: "Blue",
    storage: "256GB",
    releasedate: "jan2025"
}

productManager.addProduct(product);

let products :product[] =productManager.listProducts();
console.log(products);
