import { Injectable } from '@angular/core';
import { Order, OrderItems, Recipe, User } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

/*

          export class Order {
            orderID: number;
            userID: User[];
            orderItems: OrderItems[];
            orderDate: DateTime;
}
*/

  private allOrders: Order[] = [
    {
      orderID: 1,
      user: {userID: 1, firstName: "Ada", lastName: "Lovelace", address: "22 Front Street", phone: 9054335865, email: "a.lovelace@gmail.com", password: "password", isActive: true},
      orderItems: OrderItems[1] = [{recipe: {recipeID: 4, recipeName: "Chiraishi", recipeEnglishName: "Chiraishi", recipeImage: "", recipeQuantity: 1, recipeDescription: "", recipePrice: 12.99, recipeIsAvailable: true, recipeIsPopular: true, recipeCalories: 1000}, orderQuantity: 1}],
      orderDate: "2021-11-30T19:20-05:00",
      orderNotes: "Could I get 2 sets of chopsticks?"
    },
    { 
      orderID: 2,
      user: {userID: 2, firstName: "Grace", lastName: "Hopper", address: "11 Joe Shuster Way", phone: 6477787724, email: "G.Hops@gmail.com", password: "somepassword", isActive: true},
      orderItems: OrderItems[3] = [
        {recipe: {recipeID: 1, recipeName: "California Roll", recipeEnglishName: "California Roll", recipeImage: "", recipeQuantity: 12, recipeDescription: "", recipePrice: 7.99, recipeIsAvailable: true, recipeIsPopular: true, recipeCalories: 1000}, orderQuantity: 1},
        {recipe: {recipeID: 2, recipeName: "Croquettes", recipeEnglishName: "Croquettes", recipeImage: "", recipeQuantity: 4, recipeDescription: "", recipePrice: 4.99, recipeIsAvailable: true, recipeIsPopular: true, recipeCalories: 1000}, orderQuantity: 2},
        {recipe: {recipeID: 3, recipeName: "Miso", recipeEnglishName: "Miso Soup", recipeImage: "", recipeQuantity: 1, recipeDescription: "", recipePrice: 2.99, recipeIsAvailable: true, recipeIsPopular: true, recipeCalories: 1000}, orderQuantity: 2}
      ],
      orderDate: "2021-11-30T19:21-05:00",
      orderNotes: "No wasabi, please!"
    },
    {
      orderID: 3,
      user: {userID: 3, firstName: "Margaret", lastName: "Hamilton", address: "1032 Dufferin St.", phone: 2895458463, email: "MaHam@hotmail.com", password: "123321", isActive: true},
      orderItems: OrderItems[1] = [{recipe: {recipeID: 5, recipeName: "Uramaki", recipeEnglishName: "Uramaki", recipeImage: "", recipeQuantity: 1, recipeDescription: "", recipePrice: 13.50, recipeIsAvailable: true, recipeIsPopular: true, recipeCalories: 1000}, orderQuantity: 1}],
      orderDate: "2021-11-30T19:21-05:00",
      orderNotes: ""
    },
    {
      orderID: 4,
      user: {userID: 4, firstName: "Joan", lastName: "Clarke", address: "103 Gwynne Ave.", phone: 6476685864, email: "JoanDClarke@live.ca", password: "fj3ldgn4ol69fkws", isActive: true},
      orderItems: OrderItems[1] = [{recipe: {recipeID: 4, recipeName: "Chiraishi", recipeEnglishName: "Chiraishi", recipeImage: "", recipeQuantity: 1, recipeDescription: "", recipePrice: 13.50, recipeIsAvailable: true, recipeIsPopular: true, recipeCalories: 1000}, orderQuantity: 1}],
      orderDate: "2021-11-30T19:22-05:00",
      orderNotes: ""
    },
    {
      orderID: 5,
      user: {userID: 5, firstName: "Jordan", lastName: "Mihael", address: "100 Macdonelle Ave.", phone: 6473105436, email: "JM35d@yahoo.com", password: "password", isActive: true},
      orderItems: OrderItems[1] = [{recipe: {recipeID: 6, recipeName: "Tamagoyaki", recipeEnglishName: "Fried Egg", recipeImage: "", recipeQuantity: 1, recipeDescription: "", recipePrice: 5.99, recipeIsAvailable: true, recipeIsPopular: true, recipeCalories: 1000}, orderQuantity: 1}],
      orderDate: "2021-11-30T19:23-05:00",
      orderNotes: ""
    },
  ]

  constructor() { }

  getAllOrders(): Order[]{
    return this.allOrders;
  }
}
