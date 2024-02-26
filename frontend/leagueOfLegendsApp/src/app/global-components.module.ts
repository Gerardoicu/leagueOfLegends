import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SliderComponent} from "./globalComponents/slider/slider.component";


@NgModule({

  declarations: [SliderComponent],
  exports: [SliderComponent],
  imports: [
    CommonModule
  ]
})
export class GlobalComponentsModule {}
