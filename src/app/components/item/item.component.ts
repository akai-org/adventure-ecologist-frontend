import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { BalanceService } from 'src/app/services/balance.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnInit {

  @Input()
  item!: Item

  constructor(private itemService: ItemService, private balanceService: BalanceService ) { }

  ngOnInit(): void {
  }

  buyItem() {
    let allItems = this.itemService.getStartingItems()
    let index = allItems.findIndex(elem => elem.name == this.item.name)
    this.itemService.buyItem(index, this.balanceService.shoppingMultiplier)
  }
}
