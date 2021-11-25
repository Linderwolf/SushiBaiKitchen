import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';//allows for *ngFor in components
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { CardOutputComponent } from './card-output/card-output.component';
import { SimpleMenuItemComponent } from './modals/simple-menu-item/simple-menu-item.component';




@NgModule({
    declarations: [
      CardOutputComponent,
      SimpleMenuItemComponent
    ],
    imports: [IonicModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule],
    exports: [
      SimpleMenuItemComponent,
      CardOutputComponent
    ],
    entryComponents: [],
})

export class CustomComponentsModule{}
