import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/models/ingridient.model';

@Component({
  selector: 'coffeco-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingridients: Ingridient[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onIngridientAdd(addedIngridient: Ingridient){
    this.ingridients.push(addedIngridient);
  }
}
