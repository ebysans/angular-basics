// we import the 'Input' module which helps supply information from a component to another component
//import { Component, OnInit, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs/operators'
//import { DISHES } from '../shared/dishes';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
 // @Input()
  dish: Dish;
  dishIds: number[];
  prev: number;
  next: number;

  //selectedDish: Dish = DISHES[0];

  constructor(private dishservice:DishService, 
    private route: ActivatedRoute,
    private location: Location ) { }

  ngOnInit() {
    //we used the code commented below for routing
    //let id = +this.route.snapshot.params['id'];

    this.dishservice.getDishIds()
    .subscribe(dishIds => this.dishIds = dishIds);

    this.route.params
    .pipe(switchMap((params: Params)=> this.dishservice.getDish(+params['id'])))
     
    .subscribe(dish => {this.dish = dish; this.setPrevNext(dish.id)});
  }
  setPrevNext(dishId: number){
    let index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index -1)%this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index +1)%this.dishIds.length];
  }
  goBack(): void {
    this.location.back();
  }

}
