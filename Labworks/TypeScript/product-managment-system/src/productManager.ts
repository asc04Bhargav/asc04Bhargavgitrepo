import{product} from './products';
/**
 define private and public.
 public keyword is used to define a class property or method that can be accessed from outside the class,
 wheras private will not be accessed outside the class.
 */


export class ProductManager{
    private products:product[] =[];

    addProduct(product:product):void{
        this.products.push(product);
    }

    listProducts():product[]{
        return this.products;
    }

    removeProduct(id:number):void{
        this.products = this.products.filter(product => product.id !== id);
    }

    //
}