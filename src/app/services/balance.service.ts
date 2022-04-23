import { Injectable } from '@angular/core';
import {BehaviorSubject, last} from "rxjs";
import {StateService} from "./state.service";
import {MultiplierService} from "./multiplier.service";
import {ItemService} from "./item.service";

@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  private readonly _balance$ = new BehaviorSubject(BalanceService.STARTING_BALANCE)
  public readonly balance$ = this._balance$.asObservable()
  public get balance() { return this._balance$.getValue() }
  public set balance(balance) { this._balance$.next(balance) }

  private readonly _shoppingMultiplier$ = new BehaviorSubject(1)
  public readonly shoppingMultiplier$ = this._shoppingMultiplier$.asObservable()
  public get shoppingMultiplier() { return this._shoppingMultiplier$.getValue() }
  public set shoppingMultiplier(shoppingMultiplier) { this._shoppingMultiplier$.next(shoppingMultiplier) }


  private static readonly  GAME_TICK_PER_SECOND = 1
  private static readonly STARTING_BALANCE = 100

  private gameIntervalId: ReturnType<typeof setInterval> | null = null;

  constructor(private stateService: StateService, private multiplierService: MultiplierService, private itemService: ItemService) { }

  startCounting() {
    this.stopCounting()
    this.gameIntervalId = setInterval(() => this.increaseMoney(), 1000 / BalanceService.GAME_TICK_PER_SECOND)
  }

  stopCounting() {
    if (this.gameIntervalId !== null) {
      clearInterval(this.gameIntervalId)
      this.gameIntervalId = null;
    }
  }

  increaseMoney() {
    console.log(this.stateService.incomePerSecond)
    this.balance += this.stateService.incomePerSecond / BalanceService.GAME_TICK_PER_SECOND
  }

  loadBalance(balance: number, totalIncomePerSecond: number, lastLogin: string) {
    const lastLoginDate = new Date(lastLogin)
    const currentDate = new Date()
    this.balance = balance + totalIncomePerSecond * (currentDate.getTime() - lastLoginDate.getTime()) / 1000
  }

  progressToNextStage() {
    this.stopCounting()
    this.multiplierService.increaseMultiplier()
    this.balance = BalanceService.STARTING_BALANCE
    this.shoppingMultiplier = 1
    this.itemService.items = this.itemService.getStartingItems()
    this.startCounting()
  }

}
