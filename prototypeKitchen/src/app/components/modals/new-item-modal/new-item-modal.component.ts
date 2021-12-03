import { Component, DebugElement, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Console } from 'console';
import { logWarnings } from 'protractor/built/driverProviders';
import { HomePage } from 'src/app/home/home.page';
import { Ingredients, MenuItem } from 'src/app/models/menuItem';

@Component({
  selector: 'app-new-item-modal',
  templateUrl: './new-item-modal.component.html',
  styleUrls: ['./new-item-modal.component.scss'],
})
export class NewItemModalComponent implements OnInit {
  @Input() homePage: HomePage;
  public newItem = new MenuItem();

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}

  roundValue(value: number): number{
    return Math.round(value * 100) / 100;
  }

  updateJapaneseName(s)
  {
    this.newItem.name = s;
  }

  updateEnglishName(s)
  {
    this.newItem.englishName = s;
  }

  updateImage(s)
  {
    this.newItem.image = s;
  }

  updatePrice(n)
  {
    this.newItem.price = n;
  }

  updateCalories(n)
  {
    this.newItem.calories = n;
  }

  updateQuantity(n)
  {
    this.newItem.quantity = n;
  }

  updateType(s)
  {
    this.newItem.type = s;
  }

  updatePrepTime(s)
  {
    this.newItem.prepTime = s;
  }

  updateRecipeDescription(s)
  {
    this.newItem.recipeDescription = s;
  }

  confirmItem()
  {
    this.newItem.id = this.homePage.allItems[this.homePage.allItems.length - 1].id + 1;
    this.homePage.allItems.push(this.newItem);
    console.log(this.homePage.allItems.length);
    this.modalCtrl.dismiss();
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }
}
