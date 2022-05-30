import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FrameService } from './frame.service';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.less'],
})
export class FrameComponent implements OnInit {
  constructor(private frameService: FrameService) {}

  @Input('obj')
  obj: any;

  ngOnInit(): void {
    this.frameService.setTemplate(this.frameTemplate);
  }

  @ViewChild('frameTemplate', { static: true })
  frameTemplate: TemplateRef<any>;

  ngAfterViewInit(): void {
    // this.frameService.setTemplate(this.frameTemplate);
  }

  //
  handleConsole(event: MouseEvent, obj) {
    event.stopPropagation();
    // alert(JSON.stringify(obj));
    obj.self.component = Math.floor(Math.random() * 100);
  }

  // 复制功能
  handleCopy(event: MouseEvent, obj) {
    event.stopPropagation();
    let index = obj.parentNode.child.indexOf(obj.self);

    // let o = {
    //   o: undefined,
    // };
    // o.o = obj.self;
    // console.log(o.o === obj.self);

    if (obj.parentNode) {
      // 实现类的复制功能 - (数据一致，地址和原来不一致的。包含方法) - 有BUG,浅拷贝
      // let clone = Object.assign(
      //   Object.create(Object.getPrototypeOf(obj.self)),
      //   obj.self
      // );

      //深拷贝、
      let clone = JSON.parse(JSON.stringify(obj.self));
      obj.parentNode.child.splice(index, 0, clone);
    }
  }

  // 删除功能
  handleDelete(event: MouseEvent, obj) {
    event.stopPropagation();
    // console.log('删除功能', obj);
    let index = obj.parentNode.child.indexOf(obj.self);
    obj.parentNode.child.splice(index, 1);
  }
}
