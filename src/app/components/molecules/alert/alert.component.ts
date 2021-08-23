import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bt-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Type of alert Error | Success | Info | Caution
   */
  @Input() type?: string = 'error';

  /**
   * Extra classes
   */
  @Input() additionalClasses?: string[];

  /**
   * content of the alert
   */
  @Input() content?: string = 'label';

  public get classes(): string[] {
    return ['btc-o-alerts btc-o-alerts__container', `btc-o-alerts--${this.type}`, `${this.additionalClasses}`];
  }

}
