import { Component, Input, OnInit } from '@angular/core';
import Block from 'src/app/core/model/block';

@Component({
  selector: 'app-yun-block',
  templateUrl: './yun-block.component.html',
  styleUrls: ['./yun-block.component.less'],
})
export class YunBlockComponent implements OnInit {
  @Input('block')
  block: Block;

  constructor() {}

  ngOnInit(): void {}
}
