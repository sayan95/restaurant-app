import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/models/ingridient.model';
import { ShoppingListService } from './shoppinglist.service';

@Component({
  selector: 'coffeco-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingridients: Ingridient[] = [];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingridients = this.shoppingListService.getIngridients();
    this.shoppingListService.ingridientChanged.subscribe(
      (ingridients: Ingridient[]) => {
        this.ingridients = ingridients;
      }
    );
  }
}
