import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Order, OrderItems, Recipe, User } from 'src/app/models/order';
import { OrdersService } from 'src/app/services/orders.service';
import { MenuItem, Promotion } from 'src/app/models/menuItem';
import { MenuItemsService } from 'src/app/services/menu-items.service';
import { NewItemModalComponent } from '../components/modals/new-item-modal/new-item-modal.component';
import { NewIngredientModalComponent } from '../components/modals/new-ingredient-modal/new-ingredient-modal.component';
import { NewPromotionModalComponent } from '../components/modals/new-promotion-modal/new-promotion-modal.component';
import { CompleteOrderModalComponent } from '../components/modals/complete-order-modal/complete-order-modal.component'
import { modalController } from '@ionic/core';
import { RejectOrderModalComponent } from '../components/modals/reject-order-modal/reject-order-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public allItems: MenuItem[] = new Array();

  public allOrders: Order[] = new Array();

  public search: string = "";

  public menuItem: MenuItem;

  public order: Order;

  constructor(public orderService: OrdersService, public menuService: MenuItemsService, public modalController: ModalController) { }

  ngOnInit() {
    this.menuService.getAllItems().forEach(menuItem => {
      this.allItems.push(menuItem);
    });
    this.menuItem = this.allItems[0];

    this.orderService.getAllOrders().forEach(order => {
      this.allOrders.push(order);
    });
    this.order = this.allOrders[0];
  }
  //
  // #region menuItems - Ahmed
  //
  onSearchChange(event){
    console.log(event);
    this.search=event;
  }

  changeSelectedItem(menuItem)
  {
    this.menuItem = menuItem;
  }

  currentSelectedItem()
  {
    if (this.menuItem == null) return this.menuService.getAllItems()[0];
    return this.menuItem;
  }

  updateSelectedItemName(s)
  {
    this.menuItem.name = s;
  }

  updateSelectedItemEnglishName(s)
  {
    this.menuItem.englishName = s;
  }

  updateSelectedItemImage(s)
  {
    var i = s.lastIndexOf("\\");
    if (i >= 0) s = s.substring(i, s.length);
    console.log(s);
    this.menuItem.image = "assets/images/" + s;  
  }

  updateSelectedItemPrice(n)
  {
    this.menuItem.price = n;
  }

  updateSelectedItemCalories(n)
  {
    this.menuItem.calories = n;
  }

  updateSelectedItemQuantity(n)
  {
    this.menuItem.quantity = n;
  }

  updateSelectedItemStatus(s)
  {
    this.menuItem.status = s;
  }

  updateSelectedItemPrepTime(n)
  {
    this.menuItem.prepTime = n;
  }

  updateSelectedItemRecipeDescription(s)
  {
    this.menuItem.recipeDescription = s;
  }

  updateItemPromotionEnabled(p, b)
  {
    p.enabled = b;
  }

  removeLastIngredient()
  {
    this.menuItem.ingredients.splice(this.menuItem.ingredients.length - 1, 1);
  }

  removeLastPromotion()
  {
    this.menuItem.promotions.splice(this.menuItem.promotions.length - 1, 1);
  }

  async newItemCreator()
  {
    const modal = await this.modalController.create
    ({
      component: NewItemModalComponent,
      cssClass: 'NewItemModal',
      componentProps:
      {
        homePage: this
      }
    });
    return await modal.present();
  }

  async newIngredientCreator()
  {
    const modal = await this.modalController.create
    ({
      component: NewIngredientModalComponent,
      cssClass: 'NewIngredentModal',
      componentProps:
      {
        homePage: this
      }
    });
    return await modal.present();
  }

  async newSupplyCreator()
  {
    const modal = await this.modalController.create
    ({
      component: NewIngredientModalComponent,
      cssClass: 'NewIngrediantModal',
      componentProps:
      {
        homePage: this
      }
    });
    return await modal.present();
  }

  async newPromotionCreator()
  {
    const modal = await this.modalController.create
    ({
      component: NewPromotionModalComponent,
      cssClass: 'NewPromotionModal',
      componentProps:
      {
        item: this.menuItem
      }
    });
    return await modal.present();
  }

  filtered(item: MenuItem): boolean{
    if(item.name.toLowerCase().includes(this.search.toLowerCase())
    ||item.englishName.toLowerCase().includes(this.search.toLowerCase())){
      //console.log(item.name.toLowerCase() + " - " + this.search.toLowerCase())
      //console.log(item.englishName.toLowerCase() + " - " + this.search.toLowerCase())
      return true;
    }else{
      return false;
    }
  }
  //#endregion
  //
  //  #region Orders  - Peter
  //
  changeSelectedOrder(order)
  {
    this.order = order;
  }
  currentSelectedOrder()
  {
    if (this.order == null) return this.orderService.getAllOrders()[0];
    return this.order;
  }

  rejectOrder()
  {
    this.allOrders.splice(this.allOrders.length - 1, this.allOrders.indexOf(this.order))
    
    this.currentSelectedOrder().orderFulfilledDate = this.currentDateTime().toString()
  }

  completeOrder()
  {
    this.allOrders.splice(this.allOrders.length - 1, this.allOrders.indexOf(this.order) )

    this.currentSelectedOrder().orderFulfilledDate = this.currentDateTime().toString()
  }


  rejectButtonPressed()
  {
    this.rejectOrderCreator();
  }

  completeButtonPressed()
  {
    this.completeOrderCreator();
  }

  // Creates a Modal to ask for confirmation of an Order's Rejection
  async rejectOrderCreator()
  {
    const modal = await this.modalController.create
    ({
      component: RejectOrderModalComponent,
      componentProps:
      {
        homePage: this
      }
    });
    return await modal.present();
  }
  
  // Creates a Modal to ask for confirmation of an Order's Completion
  async completeOrderCreator()
  {
    const modal = await this.modalController.create
    ({
      component: CompleteOrderModalComponent,
      componentProps:
      {
        homePage: this
      }
    });
    return await modal.present();
  }

  // Failed attempt at refactoring into 1 modal...
  //
  //
  // // Creates a Modal to ask for confirmation of a button press
  // async rejectConfirmationCreator()
  // {
  //   const modal = await this.modalController.create
  //   ({
  //     component: RejectConfirmationModalComponent,
  //     componentProps:
  //     {
  //       homePage: this
  //     }
  //   });
  //   return await modal.present();
  // }

  // Calculates the subtotal of an order
  sumSubTotal()
  {
    let subTotal:number = 0

    for (let i = 0; i < this.currentSelectedOrder().orderItems.length; i++){
    
      subTotal += (this.currentSelectedOrder().orderItems[i].orderQuantity * this.currentSelectedOrder().orderItems[i].recipe.recipePrice);
    }
    return subTotal;
  }

  // Returns an order's Additional Notes
  additionalNotes()
  {
    if (this.currentSelectedOrder().orderNotes == null || this.currentSelectedOrder().orderNotes == "")
    {
      return "None";
    }
    else
    {
      return this.currentSelectedOrder().orderNotes;
    }
  }

  // Returns the current DateTime
  currentDateTime()
  {
    let dateTimeNow = Date.now();
    return dateTimeNow;

    // {{ currentDateTime() | date: 'hh:mm dd MMM, yyyy' }}
  }


  //#endregion
}
