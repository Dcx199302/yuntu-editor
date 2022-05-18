import { Component, Input, OnInit } from '@angular/core';
import Row from 'src/app/core/model/row';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.less'],
})
export class RowComponent implements OnInit {
  @Input('row')
  row: Row;

  constructor() {}

  ngOnInit(): void {}
}
