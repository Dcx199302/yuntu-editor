import Row from './row';

// 区块
export default class Block {
  constructor(
    public title: string, //区块标题
    public child: Array<Row> //区块数据
  ) {}
}
