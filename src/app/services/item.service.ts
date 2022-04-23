import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { ApiResponse } from "../models/api-response";
import { Item } from "../models/item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private readonly _items$ = new BehaviorSubject(this.getStartingItems())
  public readonly items$ = this._items$.asObservable()
  public get items() { return this._items$.getValue() }
  public set items(items) { this._items$.next(items) }

  constructor() { }

  getStartingItems(): Item[] {
    return [
      {
        name: 'Tree',
        description: 'simple but effective!',
        co2Reduction: 1,
        quantity: 0,
        costFunction: (quantity: number) => quantity * 1.5 + 1,
        incomePerSecond: 95.45,
        thumbnail: '/assets/tree.png'
      },
      {
        name: 'Solar panel',
        description: 'prise the sun!',
        co2Reduction: 3,
        quantity: 0,
        costFunction: (quantity: number) => quantity * 2 + 3.2,
        incomePerSecond: 175.48,
        thumbnail: '/assets/solar-panel.png'
      },
      {
        name: 'Bicycle path',
        description: 'let\'s roll!',
        co2Reduction: 9.99,
        quantity: 0,
        costFunction: (quantity: number) => quantity * 3 + 4.7,
        incomePerSecond: 325.25,
        thumbnail: '/assets/bicycle-path.png'
      },
      {
        name: 'Second hand',
        description: 'eco seems trendy!',
        co2Reduction: 21.37,
        quantity: 0,
        costFunction: (quantity: number) => quantity * 4 + 5.4,
        incomePerSecond: 615.22,
        thumbnail: '/assets/second-hand.png'
      },
      {
        name: 'Vege bar',
        description: 'who\'s hungry?',
        co2Reduction: 52.49,
        quantity: 0,
        costFunction: (quantity: number) => quantity * 4.8 + 7.1,
        incomePerSecond: 789.99,
        thumbnail: '/assets/vege-bar.png'
      },
      {
        name: 'Nuclear power plant',
        description: 'atom power!',
        co2Reduction: 99.99,
        quantity: 0,
        costFunction: (quantity: number) => quantity * 6 + 10.3,
        incomePerSecond: 999.99,
        thumbnail: '/assets/nuclear-power-plant.png'
      }
    ]
  }

  loadItemsState(response: ApiResponse) {
    const items = this.items
    items[0].quantity = response.treeCount
    items[1].quantity = response.solarPanelCount
    items[2].quantity = response.bicyclePathCount
    items[3].quantity = response.secondHandCount
    items[4].quantity = response.vegeBarCount
    items[5].quantity = response.nuclearPowerPlantCount
    this.items = items
  }

  buyItem(index: number, quantity: number) {
    const items = this.items
    items[index].quantity += quantity
    this.items = items
  }
}
