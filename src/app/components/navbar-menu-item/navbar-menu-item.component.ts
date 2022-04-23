import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-menu-item',
  templateUrl: './navbar-menu-item.component.html',
  styleUrls: ['./navbar-menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarMenuItemComponent implements OnInit {

  @Input() learnMoreButton!: string;
  @Input() logoutButton!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
