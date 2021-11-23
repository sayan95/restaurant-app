import { Ingridient } from "src/app/shared/models/ingridient.model";

// Recipe model
export class Recipe{
    id: number;
    public name: string;
    public description: string;
    public imagePath: string;
    public ingridients: Ingridient[];

    constructor(id:number, name:string, description: string, imagePath:string, ingridients: Ingridient[]){
        this.id = id;
        this.name = name;
        this.description = description;
        this.imagePath = imagePath; 
        this.ingridients = ingridients;
    }
}