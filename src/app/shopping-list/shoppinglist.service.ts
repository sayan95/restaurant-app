import { EventEmitter, Injectable } from "@angular/core";
import { Ingridient } from "../shared/models/ingridient.model";

@Injectable({providedIn: "root"})
export class ShoppingListService {
    private ingridients: Ingridient[] = [
        new Ingridient("Apple", 5),
        new Ingridient("Banana", 2),
        new Ingridient("Chocolate", 1),
    ];

    ingridientChanged = new EventEmitter<Ingridient[]>();
    
    getIngridients(){
        return this.ingridients.slice().sort((a, b) => {
            if(a.amount < b. amount)
                return -1;
            if(a.amount > b. amount)
                return 1;
            else
                return 0;
        });
    }

    addIngridient(ingridient: Ingridient){
        this.ingridients.push(ingridient);
        this.ingridientChanged.emit(this.getIngridients());
    }    
}