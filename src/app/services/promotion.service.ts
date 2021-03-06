import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

import { Observable, of, pipe} from 'rxjs';
import { delay } from "rxjs/operators";;

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions():Observable<Promotion[]>{
   // return Promise.resolve(PROMOTIONS);
   return of(PROMOTIONS).pipe(delay(2000));
  }

  getPromotion(id:number): Observable<Promotion> {
    //return Promise.resolve(PROMOTIONS.filter((promotion) =>(promotion.id===id))[0]);
    return of(PROMOTIONS.filter((promotion) =>(promotion.id===id))[0]).pipe(delay(2000));
  }

  getFeaturedPromotion(): Observable<Promotion>{
    //return Promise.resolve(PROMOTIONS.filter((promotion)=>(promotion.featured))[0]);
    return of(PROMOTIONS.filter((promotion)=>(promotion.featured))[0]).pipe(delay(2000));
  }
}
