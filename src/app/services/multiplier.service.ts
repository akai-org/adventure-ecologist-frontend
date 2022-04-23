import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MultiplierService {
  private readonly _multiplier$ = new BehaviorSubject(1)
  public readonly multiplier$ = this._multiplier$.asObservable()
  public get multiplier() { return this._multiplier$.getValue() }
  public set multiplier(multiplier) { this._multiplier$.next(multiplier) }

  constructor() { }

  loadMultiplier(multiplier: number) {
    this.multiplier = multiplier
  }

  increaseMultiplier() {
    this.multiplier += 1
  }

}
