import Box from './box';

type DIRECTION = 'horizontal' | 'vertical';

/**
 * 根据方向不同
 * 代表一行或一列
 */
export default class Row {
  constructor(
    public title: string, //标题
    public direction: DIRECTION = 'horizontal', //方向-左右/上下
    public child: Array<Box> | Row //一行或一列的子元素
  ) {}
}
