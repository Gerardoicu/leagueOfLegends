import {AfterViewInit, Component, OnInit} from '@angular/core';
import {LanguageCodeEnum} from "@shared/LanguageCodeEnum";
import {ChampionsDataDTO} from "@shared/models/dtos/ChampionsDataDTO";
import {LeagueOfLegendsService} from "../league-of-legends.service";
import {ChampionSkin} from "@shared/models/dtos/ChampionInfoDTO";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {


  champions: ChampionsDataDTO[] = [];

  public filtro = "";

  constructor(private lolService: LeagueOfLegendsService) {
  }

  ngOnInit(): void {
    this.lolService.getChampions(LanguageCodeEnum.EN_US).subscribe({
      next: (data: ChampionsDataDTO[]) => {
        this.champions = data;
      },
      error: (error) => {
        console.log('error', error);
      },
      complete: () => {
      }
    });
  }

  public moveRight() {
    if (this.lolService.getIndex() === this.champions.length - 1) {
      this.lolService.resetIndex();
      return;
    }
    this.lolService.changeIndex(this.lolService.getIndex() + 1);
  }

  public moveLeft() {
    if (this.lolService.getIndex() === 0) {
      this.lolService.changeIndex(this.champions.length - 1);
      return;
    }
    this.lolService.changeIndex(this.lolService.getIndex() - 1);
  }

  getChampName() {
    return Object.keys(this.champions[this.lolService.getIndex()])[0];
  }


  getChampInfo(): string {
    return JSON.stringify(this.champions[this.lolService.getIndex()]);
  }

  ngAfterViewInit(): void {


  }

  getSkins() {
    return Object.values(this.champions[this.lolService.getIndex()])[0].skins;
  }

  getChampLore() {
    return Object.values(this.champions[this.lolService.getIndex()])[0].lore;
  }

  getChampSkins(): ChampionSkin[] {
    return Object.values(this.champions[this.lolService.getIndex()])[0].skins;
  }

  public filterByChampName($event: KeyboardEvent) {
    console.log('event ', $event)
  }

  filterChampions() {
    if (!this.filtro) {
      return this.champions;
    }
    const filtroLowerCase = this.filtro.toLowerCase();
    return this.champions.filter(championObj => {
      const champName = Object.keys(championObj)[0].toLowerCase();
      return champName.includes(filtroLowerCase);
    });
  }

  showFilterName(item: any) {
    return Object.keys(item)[0];
  }

  selectChampion(i: ChampionsDataDTO) {
    const index = this.champions.findIndex(champ =>
      Object.keys(champ)[0] === Object.keys(i)[0]);
    this.lolService.changeIndex(index);
    this.filtro = Object.keys(i)[0];
  }
}
