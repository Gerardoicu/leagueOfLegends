import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap, TweenMax, Power2 } from 'gsap';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-carousel',
  imports: [
    CommonModule
  ],
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {
  @ViewChild('carousel', { static: true }) carousel!: ElementRef<HTMLDivElement>;

  images: string[] = [
    'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_39.jpg',
    'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_38.jpg',
    'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_42.jpg'
  ];

  ngOnInit(): void {
    this.setupCarousel();
  }

  setupCarousel(): void {
    gsap.to(this.carousel.nativeElement, {
      xPercent:50 * (this.images.length - 1),
      ease: Power2.easeInOut,
      repeat: -1,
      duration: 5,
    });

  }
}
