import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';//allows for *ngFor in components
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { CardOutputComponent } from './card-output/card-output.component';




@NgModule({
    declarations: [
      CardOutputComponent
    ],
    imports: [IonicModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule],
    exports: [
      CardOutputComponent
    ],
    entryComponents: [],
})

export class CustomComponentsModule{}
