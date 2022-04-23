import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {Item} from "../models/item";
import {ApiResponse} from "../models/api-response";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private readonly _items$ = new BehaviorSubject(ItemService.getStartingItems())
  public readonly items$ = this._items$.asObservable()
  public get items() { return this._items$.getValue() }
  public set items(items) { this._items$.next(items) }

  constructor() { }

  private static getStartingItems(): Item[] {
    return [
      {
        name: 'Tree',
        description: 'Tree description',
        co2Reduction: 12,
        quantity: 0,
        costFunction: (quantity) => quantity * 2,
        incomePerSecond: 1,
        thumbnail: 'path/to/thumbnail/tree.png'
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
