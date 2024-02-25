import {Component, OnInit} from '@angular/core';
import {CarouselComponent} from "./globalComponents/carousel/carousel.component";
import {SliderComponent} from "./globalComponents/slider/slider.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    CarouselComponent, SliderComponent
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit{
  title = 'leagueOfLegends';

  ngOnInit(): void {
  }
}
