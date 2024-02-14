import {Component, OnInit} from '@angular/core';
import {CarouselComponent} from "./globalComponents/carousel/carousel.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    CarouselComponent
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit{
  title = 'leagueOfLegends';

  ngOnInit(): void {
  }
}
