import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ItemService} from "./item.service";
import {map, tap} from "rxjs";
import {ApiResponse} from "../models/api-response";
import {ApiRequest} from "../models/api-request";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public static readonly API_URL = 'https://b4c0-91-202-100-101.eu.ngrok.io'

  constructor(private http: HttpClient, private itemsService: ItemService) { }

  getGameState() {
    this.http.get<ApiResponse>(`${ApiService.API_URL}/api/state`).pipe(
      tap(response => this.itemsService.loadItemsState(response))
      //TODO
    );
  }

  postGameState() {
    const items = this.itemsService.items
    this.http.post(`${ApiService.API_URL}/api/state`, {
      balance: 0, //TODO
      multiplier: 0, //TODO
      treeCount: items[0],
      solarPanelCount: items[1],
      bicyclePathCount: items[2],
      secondHandCount: items[3],
      vegeBarCount: items[4],
      nuclearPowerPlantCount: items[5]
    }).pipe();
  }
}
