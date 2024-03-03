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
    [Directions.LEFT]: () => this.animateSquare(this.squares[0]?.nativeElement, {x: -800}, 1),
    [Directions.TOP]: () => this.animateSquare(this.squares[1]?.nativeElement, {y: -510}, 1),
    [Directions.RIGHT]: () => this.animateSquare(this.squares[2]?.nativeElement, {x: 800}, 1),
    [Directions.BOTTOM]: () => this.animateSquare(this.squares[3]?.nativeElement, {y: 700}, 1),
  };
  Directions = Directions;

  ngAfterViewInit() {

  }

  images: string[] = [
    'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_39.jpg',
    'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_38.jpg',
    'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_42.jpg'
  ];


  ngOnInit(): void {
    // this.setupCarousel();
    this.squares = [this.squareLeft, this.squareTop, this.squareRight, this.squareBottom];
    this.initialize();
  }

  public initialize(): void {
    this.animateSquare(this.squares[0]?.nativeElement,
      {ease: "elastic.out(1, 0.1)", x: window.innerWidth / 2,}, 3);
    this.animateSquare(this.squares[1]?.nativeElement,
      {ease: "elastic.out(1, 0.1)", y: window.innerHeight / 2}, 3);
    this.animateSquare(this.squares[2]?.nativeElement,
      {ease: "elastic.out(1, 0.1)", x: -window.innerWidth / 2}, 3)
    this.animateSquare(this.squares[3]?.nativeElement,
      {
        ease: "elastic.out(1, 0.1)",
        y: (-window.innerHeight + 200) / 2
      }, 3)

  }

  setupCarousel(): void {
    gsap.to(this.carousel.nativeElement, {
      xPercent: 50 * (this.images.length - 1),
      ease: "elastic.out",
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
