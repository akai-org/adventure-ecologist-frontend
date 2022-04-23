import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-navbar-title',
  templateUrl: './navbar-title.component.html',
  styleUrls: ['./navbar-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
