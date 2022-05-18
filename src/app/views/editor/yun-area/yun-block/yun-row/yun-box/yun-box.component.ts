import { Component, Input, OnInit } from '@angular/core';
import Box from 'src/app/core/model/box';

@Component({
  selector: 'app-yun-box',
  templateUrl: './yun-box.component.html',
  styleUrls: ['./yun-box.component.less'],
})
export class YunBoxComponent implements OnInit {
  @Input('box')
  box: Box;

  constructor() {}

  ngOnInit(): void {}
}
