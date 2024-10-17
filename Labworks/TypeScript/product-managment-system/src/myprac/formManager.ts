import{formm} from './forminstance'

export class FormManager{
    private forminstance:formm[]=[];

    addData(formm:formm):void{
        this.forminstance.push(formm);
    }

    listData():formm[]{
        return this.forminstance;
    }

    removeData(mobileNumber:number):void{
        this.forminstance = this.forminstance.filter(formm => formm.mobileNumber !== mobileNumber);

    }
}

