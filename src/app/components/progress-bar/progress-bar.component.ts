import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {StateService} from "../../services/state.service";

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarComponent implements OnInit {

  @Input() progress!: number

  constructor() { }

  ngOnInit(): void {
  }

  getWasteLeft(): string {
    return (StateService.CURRENT_CO2_EMISSION * this.progress/100).toFixed(2)
  }
}
