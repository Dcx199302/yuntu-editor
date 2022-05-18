import { Component, Input, OnInit } from '@angular/core';
import Area from 'src/app/core/model/area';

@Component({
  selector: 'app-yun-area',
  templateUrl: './yun-area.component.html',
  styleUrls: ['./yun-area.component.less'],
})
export class YunAreaComponent implements OnInit {
  @Input('area')
  area: Area;

  constructor() {}

  ngOnInit(): void {}
}
