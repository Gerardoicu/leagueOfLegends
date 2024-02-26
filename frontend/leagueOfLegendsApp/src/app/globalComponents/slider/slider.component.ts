import { Component, OnInit } from '@angular/core';
import { LeagueOfLegendsService } from "../../league-of-legends.service";
import { LanguageCodeEnum } from "@shared/LanguageCodeEnum";
import { ChampionsDataDTO } from "@shared/models/dtos/ChampionsDataDTO";
import { ChampionSkin } from "@shared/models/dtos/ChampionInfoDTO";

@Component({
  standalone: false,
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  currentSkin: ChampionSkin[] = [];
  currentChampionIndex: number = 0;
  currentSkinIndex: number = 0;

  constructor() {}

  ngOnInit(): void {
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
