import { NgModule } from '@angular/core';
import {SliderComponent} from "./globalComponents/slider/slider.component";
import {NgForOf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";


@NgModule({

  declarations: [SliderComponent],
  exports: [SliderComponent],
    imports: [
        NgForOf,
        MatIcon
    ]
})
export class GlobalComponentsModule {}
