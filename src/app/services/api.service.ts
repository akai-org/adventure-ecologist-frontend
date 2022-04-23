import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ItemService} from "./item.service";
import {map, tap} from "rxjs";
import {ApiResponse} from "../models/api-response";
import {ApiRequest} from "../models/api-request";
import {BalanceService} from "./balance.service";
import {MultiplierService} from "./multiplier.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public static readonly API_URL = 'https://b4c0-91-202-100-101.eu.ngrok.io'

  constructor(private http: HttpClient, private itemsService: ItemService, private balanceService: BalanceService, private multiplierService: MultiplierService) { }

  getGameState() {
    this.http.get<ApiResponse>(`${ApiService.API_URL}/api/state`).pipe(
      tap(response => this.itemsService.loadItemsState(response)),
      tap(response => this.balanceService.loadBalance(response.balance, response.totalIncomePerSecond, response.lastLogin)),
      tap(response => this.multiplierService.loadMultiplier(response.multiplier))
    );
  }

  postGameState() {
    const items = this.itemsService.items
    this.http.post(`${ApiService.API_URL}/api/state`, {
      balance: this.balanceService.balance,
      multiplier: this.multiplierService.multiplier,
      totalIncomePerSecond: items.map(item => item.quantity * item.incomePerSecond).reduce((a, b) => a + b, 0) * this.multiplierService.multiplier,
      treeCount: items[0],
      solarPanelCount: items[1],
      bicyclePathCount: items[2],
      secondHandCount: items[3],
      vegeBarCount: items[4],
      nuclearPowerPlantCount: items[5]
    }).pipe();
  }
}
