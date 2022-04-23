import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-item-grid',
  templateUrl: './item-grid.component.html',
  styleUrls: ['./item-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
