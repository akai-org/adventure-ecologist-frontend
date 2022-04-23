import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
