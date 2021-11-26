import { EventEmitter, Injectable } from "@angular/core";
import { Ingridient } from "../shared/models/ingridient.model";
import { Subject } from "rxjs";

@Injectable({providedIn: "root"})
export class ShoppingListService {
    private ingridients: Ingridient[] = [];

    ingridientChanged = new Subject<Ingridient[]>();
    startedEditing = new Subject<number>();
    
    getIngridients(): Ingridient[]{
        return this.ingridients.slice();
    }

    getIngridient(id: number): Ingridient{
        return this.ingridients[id];
    }

    addIngridient(ingridient: Ingridient): void{
        this.ingridients.push(ingridient);
        this.ingridientChanged.next(this.getIngridients());
    }    

    addIngridients(ingridients: Ingridient[]): void{
        this.ingridients.push(...ingridients);
        this.ingridientChanged.next(this.getIngridients());
    }
    
    updateIngridient(id: number, updatedIngridient: Ingridient): void{
        this.ingridients[id] = updatedIngridient;
        this.ingridientChanged.next(this.getIngridients());
    }

    deleteIngridient(id: number): void{
        this.ingridients.splice(id, 1);
        this.ingridientChanged.next(this.getIngridients());
    }
}