import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, DebugElement, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HomePage } from 'src/app/home/home.page';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-reject-order-modal',
  templateUrl: './reject-order-modal.component.html',
  styleUrls: ['./reject-order-modal.component.scss'],
})
export class RejectOrderModalComponent implements OnInit {
  @Input() homePage: HomePage;

  constructor(public modalCtrl: ModalController) { 
  }

  ngOnInit() {
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }
}
