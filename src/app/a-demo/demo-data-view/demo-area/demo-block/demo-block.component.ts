import { Component, Input, OnInit } from '@angular/core';
import Block from 'src/app/core/model/block';

@Component({
  selector: 'app-demo-block',
  templateUrl: './demo-block.component.html',
  styleUrls: ['./demo-block.component.less'],
})
export class DemoBlockComponent implements OnInit {
  @Input('block')
  block: Block;

  constructor() {}

  ngOnInit(): void {}
}
