import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Promise<Dish[]>{
    //this would give the result immediately cos DISHES is ready
    //return Promise.resolve(DISHES);
    //the code below uses javascript to simulate a delay of 2 seconds so that we can see how a promise works when there is a delay
    return new Promise(resolve => {
      //simulate server latency with 2 seconds delay
      setTimeout(() => {resolve(DISHES)}, 2000);
    });
  }

  getDish(id:number): Promise<Dish> {
    //return Promise.resolve(DISHES.filter((dish) =>(dish.id===id))[0]);
    return new Promise(resolve => {
      //simulate server latency with 2 seconds delay
      setTimeout(() => {resolve(DISHES.filter((dish) =>(dish.id===id))[0])}, 2000);
    });
  }

  getFeaturedDish(): Promise<Dish>{
    //return Promise.resolve(DISHES.filter((dish)=>(dish.featured))[0]);
    return new Promise(resolve => {
      //simulate server latency with 2 seconds delay
      setTimeout(() => {resolve(DISHES.filter((dish)=>(dish.featured))[0])}, 2000);
    });
  }
}
