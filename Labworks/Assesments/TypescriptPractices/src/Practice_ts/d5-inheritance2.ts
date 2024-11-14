class phone{
    phoneFeature :string;
    constructor(feature :string){
        console.log("phone constructor is called and feature is initialized");
        this.phoneFeature=feature;
    }

    displayDetails():void{
        console.log("phone feature are "+ this.phoneFeature);
    }
}

class Smartphone extends phone{
    constructor(public feature:string, public cameraSpaces:String){
        super(feature);

        console.log("smartphone constructor completed");
    }

    displayDetails(): void {
        console.log("smartPhones features are " + this.phoneFeature +"and camera specifications are"+ this.cameraSpaces);
    }
}

//instantialize the phone.
const phone1=new Smartphone("Phone with touch screen,calling, messaging, camera, music player, and internet browsng features","108 mega pixel camera");

phone1.displayDetails();
