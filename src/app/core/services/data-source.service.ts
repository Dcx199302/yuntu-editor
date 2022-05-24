import { ComponentRef, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Area from '../model/area';
import Block from '../model/block';
import Box from '../model/box';
import Page from '../model/page';
import Row from '../model/row';

interface Setting {
  type: string;
  instance: ComponentRef<any>;
}

let obj = {
  displayedColumns: ['position', 'name', 'weight', 'symbol'],
  dataSource: [
    { position: 1, name: 'Hydrogen1', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium1', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium2', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium2', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron3', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon3', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen4', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen4', weight: 15.9994, symbol: 'O' },
  ],
};

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
                    new Box('盒子', 'button'),
                    new Box('盒子', 'button'),
                    new Box('盒子', 'button')
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
                  new Array(new Box('盒子', 'table', { ...obj }))
                ),
                new Row(
                  '行',
                  'horizontal',
                  new Array(
                    new Box('盒子', 'table', { ...obj }),
                    new Box('盒子2', 'table')
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
                new Array(new Box('盒子', 'Widget组件', {}))
              )
            )
          )
        )
      )
    );
  }

  // 用于通知setting切换编辑设置的实例 - 更新
  notificationSettings$ = new Subject<Setting>();

  notificationSettings(type: string, instance: ComponentRef<any>) {
    this.notificationSettings$.next({ type, instance });
  }
}
