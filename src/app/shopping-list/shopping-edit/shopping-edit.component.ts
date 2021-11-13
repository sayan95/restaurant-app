import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingridient } from 'src/app/shared/ingridient.model';

@Component({
  selector: 'coffeco-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredientNameInput', {static: false}) ingridientName:ElementRef;
  @ViewChild('ingredientAmountInput', {static: false}) ingridientAmount:ElementRef;


  @Output() ingridientAdded = new EventEmitter<Ingridient>();


  constructor() { }

  ngOnInit(): void {
  }

  AddNewIngridient(){
    const name: string = this.ingridientName.nativeElement.value;
    const amount: number = this.ingridientAmount.nativeElement.value;
    const newIngridient = new Ingridient(name, amount);
    this.ingridientAdded.emit(newIngridient);
  }
}
