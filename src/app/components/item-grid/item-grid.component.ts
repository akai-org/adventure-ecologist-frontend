import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {ItemService} from "../../services/item.service";

@Component({
  selector: 'app-item-grid',
  templateUrl: './item-grid.component.html',
  styleUrls: ['./item-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemGridComponent implements OnInit {

  private readonly = this.itemService
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

}
