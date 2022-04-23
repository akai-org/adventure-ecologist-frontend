import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {BalanceService} from "../../services/balance.service";

@Component({
  selector: 'app-shopping-balance',
  templateUrl: './shopping-balance.component.html',
  styleUrls: ['./shopping-balance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingBalanceComponent implements OnInit {
  public readonly balance$ = this.balanceService.balance$

  constructor(private balanceService: BalanceService) { }

  ngOnInit(): void {
  }

}
