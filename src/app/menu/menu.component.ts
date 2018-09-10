//a new component is created in the command prompt by typing ng generate component menu

import { Component, OnInit } from '@angular/core';

//import the new class we created, Dish
import {Dish} from '../shared/dish';

//we import DISHES from dishes.ts
import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  //create the variable dishes
  
  dishes: Dish[];

  selectedDish: Dish;

  constructor(private dishService:DishService) { }

  ngOnInit() {  
     this.dishService.getDishes()
    .subscribe(dishes => this.dishes = dishes);
  }
  onSelect(dish: Dish){
    this.selectedDish = dish;
  }

}
