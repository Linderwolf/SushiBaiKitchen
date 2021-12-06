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
      orderItems: OrderItems[1] = [{ recipes: Recipe[1] = [{ recipeID: 4, recipeName: "Chiraishi", recipeEnglishName: "Chiraishi", recipeImage: "", recipeQuantity: 1, recipeDescription: "", recipePrice: 12.99, recipeIsAvailable: true, recipeIsPopular: true, recipeCalories: 1000 }], orderQuantity: 1 }],
      orderDate: "2021-11-30T19:20-05:00",
      orderNotes: "Could I get 2 sets of chopsticks?"
    }]

  constructor() { }

  getAllOrders(): Order[]{
    return this.allOrders;
  }
}
