import { Component, Input, OnInit } from '@angular/core';
import Describe from 'src/app/core/directive/describe';
import Area from 'src/app/core/model/area';
import Page from 'src/app/core/model/page';

@Component({
  selector: 'app-yun-area',
  templateUrl: './yun-area.component.html',
  styleUrls: ['./yun-area.component.less'],
})
export class YunAreaComponent implements OnInit {
  @Input('area')
  area: Area;

  @Input('page')
  page: Page;

  Describe: Describe = new Describe('张三', '李四');

  constructor() {}

  ngOnInit(): void {}

  handle(event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
  }
}
