import Area from './area';

// 整个页面数据
export default class Page {
  constructor(
    public title: string, //整个页面
    public child: Array<Area> //页面所有的数据
  ) {}
}
