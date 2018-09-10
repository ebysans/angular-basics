import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

import { Observable, pipe, of} from 'rxjs';
import { delay } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Observable<Dish[]>{
    //this would give the result immediately cos DISHES is ready
    //return Promise.resolve(DISHES);
    //the code below uses javascript to simulate a delay of 2 seconds so that we can see how a promise works when there is a delay
    //return new Promise(resolve => {
      //simulate server latency with 2 seconds delay
      //setTimeout(() => {resolve(DISHES)}, 2000);});
    return of(DISHES).pipe(delay(2000));
  }

  getDish(id:number): Observable<Dish> {
    //return Promise.resolve(DISHES.filter((dish) =>(dish.id===id))[0]);
    //return new Promise(resolve => {
      //simulate server latency with 2 seconds delay
      //setTimeout(() => {resolve(DISHES.filter((dish) =>(dish.id===id))[0])}, 2000);});
    return of(DISHES.filter((dish) =>(dish.id===id))[0]).pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish>{
    //return Promise.resolve(DISHES.filter((dish)=>(dish.featured))[0]);
    //return new Promise(resolve => {
      //simulate server latency with 2 seconds delay
      //setTimeout(() => {resolve(DISHES.filter((dish)=>(dish.featured))[0])}, 2000);
    //});
    return of(DISHES.filter((dish)=>(dish.featured))[0]).pipe(delay(2000));
  }
}
