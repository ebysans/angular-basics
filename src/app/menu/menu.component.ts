import { Component, OnInit } from '@angular/core';

//import the new class we created, Dish
import {Dish} from '../shared/dish';

//we create a constant Dishes
const DISHES: Dish[]= [
  {name: 'Uthappizza',
  image: '/assets/images/uthappizza.png',
  category: 'mains',
  label:'Hot',
  price: '4.99',
  description: 'A unique combination of indian Uthappam'}
,{
  name: 'Zucchipakoda',
  image: '/assets/images/zucchipakoda.jpg',
  category: 'appetizer',
  label:'',
  price: '1.99',
  description: 'Deep fried Zucchinu coated with mildly spe'}                   
,{
  name: 'Vadonut',
  image: '/assets/images/vadonut.png',
  category: 'appetizer',
  label:'New ',
  price: '1.99',
  description: 'A quintessential conFusion appetizer with mildly spe'}                   
,{
  name: 'ElaiCheese Cake',
  image: '/assets/images/elaiCheesecake.png',
  category: 'desert',
  label:'',
  price: '1.99',
  description: 'Deep fried Zucchinu coated with mildly spe'}                      
]

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  //create the variable dishes
  dishes: Dish[] = DISHES;

  selectedDish: Dish = DISHES[0];

  constructor() { }

  ngOnInit() {
  }

}
