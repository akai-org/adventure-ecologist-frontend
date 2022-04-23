import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ItemService} from "./item.service";
import {Item} from "../models/item";
import {MultiplierService} from "./multiplier.service";

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public static readonly CURRENT_CO2_EMISSION = 36600000000

  private readonly _incomePerSecond$ = new BehaviorSubject(0)
  public readonly incomePerSecond$ = this._incomePerSecond$.asObservable()
  public get incomePerSecond() { return this._incomePerSecond$.getValue() }
  public set incomePerSecond(incomePerSecond) { this._incomePerSecond$.next(incomePerSecond) }

  private readonly _totalCO2EmissionReduction$ = new BehaviorSubject(0)
  public readonly totalCO2EmissionReduction$ = this._totalCO2EmissionReduction$.asObservable()
  public get totalCO2EmissionReduction() { return this._totalCO2EmissionReduction$.getValue() }
  public set totalCO2EmissionReduction(totalCO2EmissionReduction) { this._totalCO2EmissionReduction$.next(totalCO2EmissionReduction) }

  constructor(private itemService: ItemService, private multiplierService: MultiplierService) {
    itemService.items$.subscribe((items) => this.calculateStageParameters(items))
  }

  calculateStageParameters(items: Item[]) {
    this.totalCO2EmissionReduction = items.map(item => item.quantity * item.co2Reduction).reduce((a, b) => a+b, 0)
    this.incomePerSecond = items.map(item => item.quantity * item.incomePerSecond).reduce((a, b) => a+b, 0) * this.multiplierService.multiplier
  }

}
