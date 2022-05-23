import { Component, Input, OnInit } from '@angular/core';
import Block from 'src/app/core/model/block';
import Row from 'src/app/core/model/row';

@Component({
  selector: 'app-yun-row',
  templateUrl: './yun-row.component.html',
  styleUrls: ['./yun-row.component.less'],
})
export class YunRowComponent implements OnInit {
  @Input('row') //自身的数据
  row: Row;

  @Input('block') //父节点的数据
  block: Block;

  constructor() {}

  flex: string = 'block';
  wrap: string = 'nowrap';
  ngOnInit(): void {
    if (this.row.direction == 'horizontal') {
      this.flex = 'flex';
      this.wrap = 'wrap'; //nowrap
    }
  }
}
