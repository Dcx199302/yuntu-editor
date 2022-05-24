import { Type } from '@angular/core';

// 每一个小格子
export default class Box {
  constructor(
    public title: string, //标题
    public type: string,
    public Data: Object = undefined //容器的数据-小组件 // public name: string
  ) {}
}
