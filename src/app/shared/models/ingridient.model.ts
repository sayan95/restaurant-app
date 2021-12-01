// shared ingridient model
export class Ingridient{
    public ingridientName: string;
    public ingridientAmount: number;

    constructor(name:string, amount:number){
        this.ingridientName = name;
        this.ingridientAmount = amount;
    }
}