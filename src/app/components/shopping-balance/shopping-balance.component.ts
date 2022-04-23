import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-shopping-balance',
  templateUrl: './shopping-balance.component.html',
  styleUrls: ['./shopping-balance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingBalanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
