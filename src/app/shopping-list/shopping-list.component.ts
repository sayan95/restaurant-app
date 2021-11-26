import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingridient } from '../shared/models/ingridient.model';
import { ShoppingListService } from './shoppinglist.service';

@Component({
  selector: 'coffeco-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export default class ShoppingListComponent implements OnInit, OnDestroy {
  ingridients: Ingridient[] = [];
  private ingridientChangedSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    console.log('ngOnInit called')
    this.ingridients = this.shoppingListService.getIngridients();
    this.ingridientChangedSubscription = this.shoppingListService.ingridientChanged.subscribe(
      (ingridients: Ingridient[]) => {
        this.ingridients = ingridients;
      }
    );
  }

  onEditItem(index: number){
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.ingridientChangedSubscription.unsubscribe();
  }
}
