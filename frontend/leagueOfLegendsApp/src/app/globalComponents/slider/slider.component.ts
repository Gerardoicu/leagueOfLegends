import {Component, OnInit} from '@angular/core';
import {LeagueOfLegendsService} from "../../league-of-legends.service";
import {LanguageCodeEnum} from "@shared/LanguageCodeEnum";
import {ChampionsDataDTO} from "@shared/models/dtos/ChampionsDataDTO";
import {ChampionSkin} from "@shared/models/dtos/ChampionInfoDTO";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    CommonModule, HttpClientModule
  ],
  providers: [LeagueOfLegendsService],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements OnInit {
  champions: ChampionsDataDTO[] = [];
  currentSkin: ChampionSkin[] = [];
  currentChampionIndex: number = 0;
  currentSkinIndex: number = 0;

  constructor(private lolService: LeagueOfLegendsService) {
  }

  ngOnInit(): void {
    console.log('etst')
    this.lolService.getChampions(LanguageCodeEnum.EN_US).subscribe({
      next: (data: ChampionsDataDTO[]) => {
        this.champions = data;
        console.log('test')
      },
      error: (error) => {
        console.log('error', error);
      },
      complete: () => {
      }
    });
  }

  changeSkin(offset: number): void {
   /** let newSkinIndex = this.currentSkinIndex + offset;
    const skins = this.champions[this.currentChampionIndex].skins;

    if (newSkinIndex >= 0 && newSkinIndex < skins.length) {
      this.currentSkinIndex = newSkinIndex;
      this.currentSkin = skins[newSkinIndex];
    }
    */
  }
}
