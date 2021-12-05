export class Order {
  orderID: number;
  user: User[];
  orderItems: OrderItems[];
  orderDate: string;
  orderNotes: string;
}

export class User{
  userID: number;
  firstName: string;
  lastName: string;
  address: string;
  phone: number;
  email: string;
  password: string;
  isActive: boolean;
  //dateRegistered:
  //lastActiveDate:
}

export class Recipe{
  recipeID: number;
  recipeName: string;
  recipeEnglishName: string;
  recipeImage: string;
  recipeQuantity: number;
  recipeDescription: string;
  recipePrice: number;
  recipeIsAvailable: boolean;
  recipeIsPopular: boolean;
  recipeCalories: number;
}

export class OrderItems{
  //orderItemID: number;
  //orderID: number;
  recipeID: Recipe[];
  orderQuantity: number;
}