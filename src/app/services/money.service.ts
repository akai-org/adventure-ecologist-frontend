import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MoneyService {

  private readonly _balance$ = new BehaviorSubject(10)
  public readonly balance$ = this._balance$.asObservable()
  public get balance() { return this._balance$.getValue() }
  public set balance(balance) { this._balance$.next(balance) }

  constructor() { }
}
