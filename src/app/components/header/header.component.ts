import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'bt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  user: unknown = null;

  @Output()
  onLogin = new EventEmitter<Event>();

  @Output()
  onLogout = new EventEmitter<Event>();

  @Output()
  onCreateAccount = new EventEmitter<Event>();
}

