import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-navbar-menu-item',
  templateUrl: './navbar-menu-item.component.html',
  styleUrls: ['./navbar-menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarMenuItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
