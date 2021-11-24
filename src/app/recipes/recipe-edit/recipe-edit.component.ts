import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'coffeco-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  id: number;
  isEditModeOn: boolean = false;
  routeParamSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeParamSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.id = params[+'id'];
        this.isEditModeOn = params['id'] != null;
      }
    );
  }

  ngOnDestroy(){
    this.routeParamSubscription.unsubscribe();
  }

}
