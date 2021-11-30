import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuItem, Promotion } from 'src/app/models/menuItem';
import { MenuItemsService } from 'src/app/services/menu-items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public allItems: MenuItem[] = new Array();

  public search: string = "";

  public menuItem: MenuItem;

  constructor(public menuService: MenuItemsService, public modalController: ModalController) { }

  ngOnInit() {
    this.menuService.getAllItems().forEach(menuItem => {
      this.allItems.push(menuItem);
    });
    this.menuItem = this.allItems[0];
  }

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
    let b = new Blob([s], {type: "image/png, image/jpeg"});
    this.menuItem.image = URL.createObjectURL(b);
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

  updateSelectedItemType(s)
  {
    this.menuItem.type = s;
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
}

