import { Component, Input, OnInit } from '@angular/core';
import Row from 'src/app/core/model/row';

@Component({
  selector: 'app-yun-row',
  templateUrl: './yun-row.component.html',
  styleUrls: ['./yun-row.component.less'],
})
export class YunRowComponent implements OnInit {
  @Input('row')
  row: Row;

  constructor() {}

  ngOnInit(): void {}
}
