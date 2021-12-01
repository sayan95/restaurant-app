import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingridient } from 'src/app/shared/models/ingridient.model';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
  selector: 'coffeco-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('shoppingListEditForm', {static: false}) shoppingListForm: NgForm; 

  private ingridientEditingSubscription: Subscription;
  public editMode: boolean = false;
  public editedItemIndex: number;
  editedItem: Ingridient;

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingridientEditingSubscription = this.shoppinglistService.startedEditing.subscribe(
      (id: number) => {
        this.editedItemIndex = id;
        this.editMode = true;   
        this.editedItem = this.shoppinglistService.getIngridient(id);
        
        this.shoppingListForm.setValue({
          name: this.editedItem.ingridientName,
          amount: this.editedItem.ingridientAmount
        });
      }
    );
  }

  OnSubmit(form: NgForm): void{
    const value: any = form.value;
    const newIngridient = new Ingridient(value.name, value.amount);
    this.editMode 
    ? this.shoppinglistService.updateIngridient(this.editedItemIndex, newIngridient) 
    : this.shoppinglistService.addIngridient(newIngridient);
    this.shoppingListForm.resetForm();
    this.editMode = false;
  }
  
  onClear(): void{
    this.shoppingListForm.resetForm();
    this.editMode = false;
  }

  onDelete(): void{
    this.shoppinglistService.deleteIngridient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy(): void{
    this.ingridientEditingSubscription.unsubscribe();
  }

}
