import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingridient } from 'src/app/shared/models/ingridient.model';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
  selector: 'coffeco-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredientNameInput', {static: false}) ingridientName:ElementRef;
  @ViewChild('ingredientAmountInput', {static: false}) ingridientAmount:ElementRef;

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit(): void {
  }

  AddNewIngridient(){
    const name: string = this.ingridientName.nativeElement.value;
    const amount: number = this.ingridientAmount.nativeElement.value;
    const newIngridient = new Ingridient(name, amount);
    this.shoppinglistService.addIngridient(newIngridient);
  }
}
