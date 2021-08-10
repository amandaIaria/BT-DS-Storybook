import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'bt-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {

  /**
   * Is this a dark or light version
   * Default to light
   */
   @Input()
   type = 'light';
 
   /**
    * Link url
    *
    * @required
    */
      @Input()
      URL = '';
   
   /**
    * Link url
    *
    * @required
    */
     @Input()
     target = '_self';
 
 
   /**
    * Link contents
    *
    * @required
    */
   @Input()
   label = 'Link';
 
   public get classes(): string[] {
     const mode = this.type ? 'bt-button--primary' : 'bt-button--secondary';
 
     return ['bt-button', mode];
   }

  constructor() { }

  ngOnInit(): void {
  }

}
