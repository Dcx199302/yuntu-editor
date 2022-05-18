import Block from './block';

// 区域
export default class Area {
  constructor(
    public title: string, //区域标题
    public child: Array<Block> //一个区域的数据
  ) {}
}
