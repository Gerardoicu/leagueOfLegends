import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit{
  title = 'leagueOfLegends';

  ngOnInit(): void {
  }
}
