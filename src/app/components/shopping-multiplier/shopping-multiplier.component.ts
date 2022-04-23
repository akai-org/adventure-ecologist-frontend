import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-shopping-multiplier',
  templateUrl: './shopping-multiplier.component.html',
  styleUrls: ['./shopping-multiplier.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingMultiplierComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
