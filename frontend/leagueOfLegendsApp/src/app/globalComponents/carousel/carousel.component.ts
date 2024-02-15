import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {gsap, TweenMax, Power2} from 'gsap';
import {CommonModule} from "@angular/common";


type AnimationsMap = {
  [K in Directions]: () => void;
};
export enum Directions {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  TOP = "TOP",
  BOTTOM = "BOTTOM"
}

@Component({
  selector: 'app-carousel',
  imports: [
    CommonModule
  ],
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit, AfterViewInit {

  @ViewChild('carousel', {static: true}) carousel!: ElementRef<HTMLDivElement>;
  @ViewChild('test', {static: true}) test!: ElementRef<HTMLDivElement>;
  @ViewChild('squareLeft', {static: true}) squareLeft!: ElementRef<HTMLDivElement>;
  @ViewChild('squareTop', {static: true}) squareTop!: ElementRef<HTMLDivElement>;
  @ViewChild('squareRight', {static: true}) squareRight!: ElementRef<HTMLDivElement>;
  @ViewChild('squareBottom', {static: true}) squareBottom!: ElementRef<HTMLDivElement>;
  private squares: ElementRef[] = [];
  private animationsOuts: AnimationsMap = {
    [Directions.LEFT]: () => this.animateSquare(this.squares[0]?.nativeElement, {x: -100}, 5),
    [Directions.TOP]: () => this.animateSquare(this.squares[1]?.nativeElement, {y: -100}, 5),
    [Directions.RIGHT]: () => this.animateSquare(this.squares[2]?.nativeElement, {x: 1000},5),
    [Directions.BOTTOM]: () => this.animateSquare(this.squares[3]?.nativeElement, {y: 1000}, 5),
  };
  Directions = Directions;

  ngAfterViewInit() {
    this.squares = [this.squareLeft, this.squareTop, this.squareRight, this.squareBottom];
  }
  images: string[] = [
    'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_39.jpg',
    'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_38.jpg',
    'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_42.jpg'
  ];



  ngOnInit(): void {
    // this.setupCarousel();
    this.animateSquare(this.squares[0]?.nativeElement, {x: 0}, 1)

  }

  setupCarousel(): void {
    gsap.to(this.carousel.nativeElement, {
      xPercent: 50 * (this.images.length - 1),
      ease: Power2.easeInOut,
      repeat: -1,
      duration: 1,
    });

  }


  private animateSquare(element: any, animationProps: gsap.TweenVars, duration: number): void {
    gsap.to(element, {
      ...animationProps,
      duration: duration
    });
  }

  public movingTest(squareIndex: Directions): void {
    const animation = this.animationsOuts[squareIndex];
    if (animation) {
      animation();
    }
  }
}
