import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer-info',
  templateUrl: './footer-info.component.html',
  styleUrls: ['./footer-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
