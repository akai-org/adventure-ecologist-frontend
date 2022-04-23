import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _token$ = new BehaviorSubject('')
  public readonly token$ = this._token$.asObservable()
  public get token() { return this._token$.getValue() }
  public set token(token) { this._token$.next(token) }

  constructor() { }
}
