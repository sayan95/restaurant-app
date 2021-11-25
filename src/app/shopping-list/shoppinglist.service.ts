import { EventEmitter, Injectable } from "@angular/core";
import { Ingridient } from "../shared/models/ingridient.model";
import { Subject } from "rxjs";

@Injectable({providedIn: "root"})
export class ShoppingListService {
    private ingridients: Ingridient[] = [
        // new Ingridient("Apple", 5),
        // new Ingridient("Banana", 2),
        // new Ingridient("Chocolate", 1),
        // new Ingridient("Meat", 3),
    ];

    ingridientChanged = new Subject<Ingridient[]>();
    
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
        this.ingridientChanged.next(this.getIngridients());
    }    

    addIngridients(ingridients: Ingridient[]){
        this.ingridients.push(...ingridients);
        this.ingridientChanged.next(this.getIngridients());
    }
}