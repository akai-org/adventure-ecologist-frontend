import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from "../../services/item.service";

@Component({
  selector: 'app-item-grid',
  templateUrl: './item-grid.component.html',
  styleUrls: ['./item-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemGridComponent implements OnInit {

  private readonly = this.itemService
  items: Item[]
  constructor(private itemService: ItemService) {
    this.items = this.itemService.items
  }

  ngOnInit(): void {
  }

}
