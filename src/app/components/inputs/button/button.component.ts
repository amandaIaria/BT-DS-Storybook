import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'bt-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor(

  ) { }

  ngOnInit(): void {
  }
  

  @Input() type?: string;
  @Input() additionalClasses?: string[];
  @Input() size?: string = 'default';

  /**
   * Button contents
   *
   * @required
   */
  @Input() label?: string = 'label';

  /**
   * Optional click handler
   */
  @Output() onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    return ['btc-a-button', `btc-a-button--${this.size}`, 
    `btc-a-button--${this.type}`, `${this.additionalClasses}`];
  }
}
