import { Component, Input, OnInit } from '@angular/core';
import Box from 'src/app/core/model/box';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.less'],
})
export class BoxComponent implements OnInit {
  @Input('box')
  box: Box;

  constructor() {}

  ngOnInit(): void {}
}
