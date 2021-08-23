import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'bt-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() content?: string;
  @Input() size?: string;
  @Input() type?: string;
  @Input() padding?: string = '24';
  @Input() additionalClasses?: string[];

  public get classes(): string[] {
    return ['btc-o-card', `btu-spacing--p${this.padding}`, `btc-o-card--${this.size}`, `${this.additionalClasses}`];
  }

}
