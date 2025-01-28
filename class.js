class Laptop{
    constructor(modelname ,laptopPrice , laptopcolour){
        this.model=modelname;
        this.price=laptopPrice;
        this.colour=laptopcolour;
    }

    lapTools(){
     console.log(`you have purchased ${this.model} for ${this.price} in ${this.colour}`);
    }   
    
}


let r = new Laptop("DELL" , 45000 , "BLUE");
r.lapTools();