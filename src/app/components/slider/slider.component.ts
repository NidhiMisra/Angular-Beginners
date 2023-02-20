import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { Movie } from '../../models/movie';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [trigger('fade', [state('void', style({ opacity: 0 })), transition('void<=>*', [animate('1s')])])]
})
export class SliderComponent implements OnInit {
  @Input() items: Movie[] = [];
  @Input() isbanner: boolean = false;
  currentSlideIndex: number = 0;
  readonly imagesSizes = IMAGES_SIZES;
  constructor() {}
  ngOnInit(): void {
    if (!this.isbanner) {
      setInterval(() => {
        if (this.currentSlideIndex == this.items.length) {
          this.currentSlideIndex = -1;
        }
        this.currentSlideIndex++;

        //this.currentSlideIndex=++currentSlideIndex%items.length;
      }, 5000);
    }
  }
}
