import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bt-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() type: string = 'one';
  @Input() additionalClasses: string[] = [];

  public get classes(): string[] {
    return [`btc-a-dividers--${this.type}`, `${this.additionalClasses}`];
  }

}
