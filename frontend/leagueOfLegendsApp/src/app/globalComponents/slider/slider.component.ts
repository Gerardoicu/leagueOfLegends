import {Component, Input, OnInit} from '@angular/core';

import { ChampionSkin } from "@shared/models/dtos/ChampionInfoDTO";
import {Subscription} from "rxjs";
import {LeagueOfLegendsService} from "../../league-of-legends.service";

@Component({
  standalone: false,
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  // @ts-ignore
  private indexSubscription: Subscription;

  @Input() public skins: ChampionSkin[] = [];

  public index = 0;
  currentChampionIndex: number = 0;
  currentSkinIndex: number = 0;

  constructor(private lolService: LeagueOfLegendsService) {}

  ngOnInit(): void {
    this.indexSubscription = this.lolService.currentIndex.subscribe(index => {
      this.index = 0;
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

  public moveRight() {
    if (this.index === this.skins.length - 1) {
      this.index = 0;
      return;
    }

    this.index = this.index + 1;
  }

  public moveLeft() {
    if (this.index === 0) {
      this.index = this.skins.length - 1;
      return;
    }
    this.index = this.index - 1;
  }
}
