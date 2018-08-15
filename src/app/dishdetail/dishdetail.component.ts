// we import the 'Input' module which helps supply information from a component to another component
import { Component, OnInit, Input } from '@angular/core';
import {Dish} from '../shared/dish';
//import { DISHES } from '../shared/dishes';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  @Input()
  dish: Dish;

  //selectedDish: Dish = DISHES[0];

  constructor() { }

  ngOnInit() {
  }

}
