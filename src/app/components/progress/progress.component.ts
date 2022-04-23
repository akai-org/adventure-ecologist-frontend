import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {StateService} from "../../services/state.service";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressComponent implements OnInit {

  public totalCO2EmissionReduction$ = this.stateService.totalCO2EmissionReduction$

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
  }

  public calculateProgress(value: number, precision: number): number {
    return +(Math.min( value, StateService.CURRENT_CO2_EMISSION)
      /StateService.CURRENT_CO2_EMISSION *100).toFixed(precision)
  }

}
