import { Component, Input, OnInit } from '@angular/core';
import Area from 'src/app/core/model/area';

@Component({
  selector: 'app-demo-area',
  templateUrl: './demo-area.component.html',
  styleUrls: ['./demo-area.component.less'],
})
export class DemoAreaComponent implements OnInit {
  @Input('area')
  area: Area;

  constructor() {}

  ngOnInit(): void {
    console.log(this.area);
  }
}
