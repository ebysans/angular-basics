// we import the 'Input' module which helps supply information from a component to another component
//import { Component, OnInit, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
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

  //selectedDish: Dish = DISHES[0];

  constructor(private dishservice:DishService, 
    private route: ActivatedRoute,
    private location: Location ) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.dish= this.dishservice.getDish(id);
  }
  goBack(): void {
    this.location.back();
  }

}
