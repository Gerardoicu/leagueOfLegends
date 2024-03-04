import {Component, Input, OnInit} from '@angular/core';

import {ChampionSkin} from "@shared/models/dtos/ChampionInfoDTO";
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

  skinsVisible: ChampionSkin[] = [];
  public index = 0;
  public rotationAngle = 0;

  constructor(private lolService: LeagueOfLegendsService) {
  }

  ngOnInit(): void {
    this.indexSubscription = this.lolService.currentIndex.subscribe(index => {
      this.index = 0;
      setTimeout(() => {
        this.skinsVisible = this.adjustSkins(this.skins);
        this.calculateRotation();
      }, 100)
    });
  }

  adjustSkins(skins: any[]): any[] {
    let skinsVisible = skins.slice(0, 12);
    while (skinsVisible.length < 12) {
      skinsVisible = skinsVisible.concat(skins.slice(0, 12 - skinsVisible.length));
    }
    return skinsVisible.slice(0, 12);
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
  updateVisibleSkins(): void {

    let visible = [];
    for (let i = 0; i < 12; i++) {
      let idx = (this.index + i) % this.skins.length;
      visible.push(this.skins[idx]);
    }
    this.skinsVisible = visible;
  }

  public moveRight() {
    this.index = (this.index + 1) % this.skins.length;
    this.updateVisibleSkins();
  }

  public moveLeft() {
    this.index = (this.index - 1 + this.skins.length) % this.skins.length;
    this.updateVisibleSkins();
  }

  private calculateRotation(): void {
    const cellCount = this.skinsVisible.length;
    this.rotationAngle = 360 / cellCount;
  }
}

