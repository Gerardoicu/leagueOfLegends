import { NgModule } from '@angular/core';
import {SliderComponent} from "./globalComponents/slider/slider.component";
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";



@NgModule({

  declarations: [SliderComponent],
  exports: [SliderComponent],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class GlobalComponentsModule {}
