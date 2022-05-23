import { Injectable } from '@angular/core';
import Area from '../model/area';
import Block from '../model/block';
import Box from '../model/box';
import Page from '../model/page';
import Row from '../model/row';

@Injectable({
  providedIn: 'root',
})
export class DataSourceService {
  private data: Page;

  constructor() {
    this.data = new Page(
      '页面',
      new Array(
        new Area(
          '区域',
          new Array(
            new Block(
              '区块',
              new Array(
                new Row(
                  '行',
                  'horizontal',
                  new Array(
                    new Box('盒子', 'Widget组件'),
                    new Box('盒子', 'Widget组件'),
                    new Box('盒子', 'Widget组件')
                  )
                )
              )
            )
          )
        ),
        new Area(
          '区域',
          new Array(
            new Block(
              '区块',
              new Array(
                new Row(
                  '行',
                  'vertical',
                  new Array(new Box('盒子', 'Widget组件'))
                ),
                new Row(
                  '行',
                  'horizontal',
                  new Array(
                    new Box('盒子', 'Widget组件'),
                    new Box('盒子2', 'Widget组件')
                  )
                )
              )
            )
          )
        )
      )
    );
  }

  get getEditorInitData() {
    return this.data;
  }

  push() {
    this.data.child.push(
      new Area(
        '区域',
        new Array(
          new Block(
            '区块',
            new Array(
              new Row(
                '行',
                'horizontal',
                new Array(new Box('盒子', 'Widget组件'))
              )
            )
          )
        )
      )
    );
  }
}
