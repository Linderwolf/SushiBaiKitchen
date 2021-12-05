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
      user: User[1] = [{userID: 1, firstName: "Ada", lastName: "Lovelace", address: "22 Front Street", phone: 9054335865, email: "a.lovelace@gmail.com", password: "somepassword", isActive: true}],
      orderItems: Recipe[1] = [{recipeID: 4, recipeName: "Chiraishi", recipeEnglishName: "Chiraishi", recipeImage: "", recipeQuantity: "1", recipeDescription: "", recipePrice: 12.99, recipeIsAvailable: true, recipeIsPopular: true, recipeCalories: 1000, orderQuantity: 1}],
      orderDate: "2021-11-30T19:20-05:00",
      orderNotes: "Could I get 2 sets of chopsticks?"
    },
    { 
      orderID: 2,
      user: User[1] = [{userID: 2, firstName: "Grace", lastName: "Hopper", address: "22 Front Street", phone: 9052325447, email: "G.Hops@gmail.com", password: "somepassword", isActive: true}],
      orderItems: Recipe[3] = [{recipeID: 1, recipeName: "California Roll", recipeEnglishName: "California Roll", recipeImage: "", recipeQuantity: "12", recipeDescription: "", recipePrice: 7.99, recipeIsAvailable: true, recipeIsPopular: true, recipeCalories: 1000, orderQuantity: 1},
                               {recipeID: 2, recipeName: "Croquettes", recipeEnglishName: "Croquettes", recipeImage: "", recipeQuantity: "4", recipeDescription: "", recipePrice: 4.99, recipeIsAvailable: true, recipeIsPopular: true, recipeCalories: 1000, orderQuantity: 2},
                               {recipeID: 3, recipeName: "Miso", recipeEnglishName: "Miso Soup", recipeImage: "", recipeQuantity: "1", recipeDescription: "", recipePrice: 2.99, recipeIsAvailable: true, recipeIsPopular: true, recipeCalories: 1000, orderQuantity: 2}],
      orderDate: "2021-11-30T19:21-05:00"
      orderNotes: "No wasabi, please!"
    }]

  constructor() { }

  getAllOrders(): Order[]{
    return this.allOrders;
  }
}
