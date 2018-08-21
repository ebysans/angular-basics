import {Dish} from './dish';

export const DISHES: Dish[]= [
    {
    id:0,
    name: 'Uthappizza',
    image: '/assets/images/uthappizza.png',
    category: 'mains',
    label:'Hot',
    price: '4.99',
    featured: true,
    description: 'A unique combination of indian Uthappam',
    comments: [
      {
        rating:5,
        comment:"Imagine all the eatables living in conFusion",
        author: "John Lemon",
        date: "2012-10-16T17:57:28.556094Z"
      },
      {
        rating:5,
        comment:"Imagine all the eatables living in conFusion",
        author: "Paul McVites",
        date: "2014-1016T17:57:28.556094Z"
      }]
    },
    {
    id: 1,
    name: 'Zucchipakoda',
    image: '/assets/images/zucchipakoda.jpg',
    category: 'appetizer',
    label:'',
    price: '1.99',
    featured: false,
    description: 'Deep fried Zucchinu coated with mildly spe',
    comments: [
      {
        rating:5,
        comment:"Imagine all the eatables living in conFusion",
        author: "John Lemon",
        date: "2012-10-16T17:57:28.556094Z"
      },
      {
        rating:5,
        comment:"Imagine all the eatables living in conFusion",
        author: "Paul McVites",
        date: "2014-1016T17:57:28.556094Z"
      }]
    },                  
    {
    id: 2,
    name: 'Vadonut',
    image: '/assets/images/vadonut.png',
    category: 'appetizer',
    label:'New ',
    price: '1.99',
    featured: false,
    description: 'A quintessential conFusion appetizer with mildly spe',
    comments: [
      {
        rating:5,
        comment:"Imagine all the eatables living in conFusion",
        author: "John Lemon",
        date: "2012-10-16T17:57:28.556094Z"
      },
      {
        rating:5,
        comment:"Imagine all the eatables living in conFusion",
        author: "Paul McVites",
        date: "2014-1016T17:57:28.556094Z"
      }]
  }                   
  ,{
    id: 3,
    name: 'ElaiCheese Cake',
    image: '/assets/images/elaiCheesecake.png',
    category: 'desert',
    label:'',
    price: '1.99',
    featured: false,
    description: 'Deep fried Zucchinu coated with mildly spe',
    comments: [
      {
        rating:5,
        comment:"Imagine all the eatables living in conFusion",
        author: "John Lemon",
        date: "2012-10-16T17:57:28.556094Z"
      },
      {
        rating:5,
        comment:"Imagine all the eatables living in conFusion",
        author: "Paul McVites",
        date: "2014-1016T17:57:28.556094Z"
      }]
  }                      
]