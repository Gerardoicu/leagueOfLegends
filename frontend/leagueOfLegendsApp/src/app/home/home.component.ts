import {AfterViewInit, Component, OnInit} from '@angular/core';
import {LanguageCodeEnum} from "@shared/LanguageCodeEnum";
import {ChampionsDataDTO} from "@shared/models/dtos/ChampionsDataDTO";
import {LeagueOfLegendsService} from "../league-of-legends.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {

  index = 0;
  champions: ChampionsDataDTO[] = [];

  constructor(private lolService: LeagueOfLegendsService) {
  }

  ngOnInit(): void {
    this.lolService.getChampions(LanguageCodeEnum.EN_US).subscribe({
      next: (data: ChampionsDataDTO[]) => {
        this.champions = data;
        console.log('champs', this.champions);
      },
      error: (error) => {
        console.log('error', error);
      },
      complete: () => {
      }
    });
  }

  public moveRight() {
    if (this.index === this.champions.length-1) {
      this.index = 0;
      return;
    }

    this.index = this.index +1;
  }

  public moveLeft() {
    if (this.index === 0) {
      this.index = this.champions.length - 1;
      return;
    }
    this.index = this.index - 1;
  }

  getChampName(champ: ChampionsDataDTO) {
    return Object.keys(champ)[0];
  }

  getChampInfo(champ: ChampionsDataDTO): string {
    let key = this.getChampName(champ);
    return JSON.stringify(champ[key]);
  }

  ngAfterViewInit(): void {


  }

}
