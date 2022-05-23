import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  ViewContainerRef,
} from '@angular/core';
// import Describe from './describe';
import { FrameService } from './frame/frame.service';

@Directive({
  selector: '[appFrame]',
})
export class FrameDirective {
  constructor(
    private frameService: FrameService,
    private vc: ViewContainerRef,
    private el: ElementRef
  ) {}

  @Input('appFrame')
  describe: any; //将每个节点的数据传入给指令 的  frameTemplate

  @Input('parentNode')
  parentNode: any;

  @HostListener('mouseover', ['$event']) onMouseEnter(event: MouseEvent) {
    event.stopPropagation(); //冒泡
    event.stopImmediatePropagation(); //捕获
    if (event.target == this.el.nativeElement) {
      if (this.el.nativeElement.style.border != '1px solid blue') {
        this.el.nativeElement.style.position = 'relative';
        this.el.nativeElement.style.border = '1px dashed blue';
      }
    }
  }

  @HostListener('mouseout', ['$event']) onMouseLeave(event: MouseEvent) {
    // console.log('鼠标离开mouseover', event.target);
    event.stopPropagation(); //冒泡
    event.stopImmediatePropagation(); //捕获

    if (event.target == this.el.nativeElement) {
      if (this.el.nativeElement.style.border != '1px solid blue') {
        this.el.nativeElement.style.border = '1px dashed Transparent';
      }
    }
  }

  @HostListener('click', ['$event']) handleClick(event: PointerEvent) {
    // console.log('hello world', event);
    // console.log('单击 - 需要使用Rxjs的防抖节流实现 ·区分· 单双击的操作');
    // 这里的Click 事件有些小Bug~ 建议使用鼠标的位置检查是否在容器内部 + 禁用冒泡进行处理。--应该也有BUG
    // 太恶心了
    event.stopPropagation(); //冒泡
    event.stopImmediatePropagation(); //捕获
    this.frameService.selected(); //通知所有指令不显示弹框

    // if (event.target == this.el.nativeElement) {  //去掉好像又可以了
    this.vc.createEmbeddedView(this.frameService.frameTemplate, {
      $implicit:
        {
          self: this.describe,
          parentNode: this.parentNode,
        } || '未传值', //后面的不对 - 未传值
    });
    this.el.nativeElement.style.border = '1px solid blue';
    // }
  }

  // ev$: any;

  ngOnInit() {
    // 防止页面切换边框时抖动
    this.el.nativeElement.style.border = '1px dashed Transparent';

    this.frameService.subject$.subscribe(() => {
      // console.log('这里会根据页面的数据执行很多次');
      this.el.nativeElement.style.border = '1px dashed Transparent';

      this.vc.clear(); //清除
    });
  }

  ngOnDestroy() {
    // 取消订阅
    // this.ev$.unsubscribe();
  }
}
