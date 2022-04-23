import {Component, OnInit, ChangeDetectionStrategy, OnDestroy} from '@angular/core';
import {BalanceService} from "../../services/balance.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent implements OnInit, OnDestroy {

  constructor(private balanceService: BalanceService) { }

  ngOnInit(): void {
    this.balanceService.startCounting()
  }

  ngOnDestroy(): void {
    this.balanceService.stopCounting()
  }

}
