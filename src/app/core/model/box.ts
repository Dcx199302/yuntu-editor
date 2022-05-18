import { Type } from '@angular/core';

// 每一个小格子
export default class Box {
  constructor(
    public title: string, //标题
    public component: Type<any> | any //容器的数据-小组件 // public name: string
  ) {}
}
