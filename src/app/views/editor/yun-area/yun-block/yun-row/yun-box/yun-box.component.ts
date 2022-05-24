import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import Box from 'src/app/core/model/box';
import Row from 'src/app/core/model/row';
import { DataSourceService } from 'src/app/core/services/data-source.service';
import { Widgets } from 'src/app/core/widgets';

@Component({
  selector: 'app-yun-box',
  templateUrl: './yun-box.component.html',
  styleUrls: ['./yun-box.component.less'],
})
export class YunBoxComponent implements OnInit {
  @Input('box') //自身数据
  box: Box;

  @Input('row') //父节点的数据
  row: Row;

  expression: boolean = true;

  instance: ComponentRef<any>;

  constructor(
    private cfr: ComponentFactoryResolver,
    private sourceData: DataSourceService
  ) {}

  ngOnInit(): void {
    if (this.box.Data) {
      this.expression = false;
    }
  }

  @ViewChild('WidgetContainer', { read: ViewContainerRef, static: false })
  WidgetContainer: ViewContainerRef;

  ngAfterViewInit() {
    if (this.box.Data) {
      this.recoverComponent();
    }
  }

  // 获取Widget
  get getWidget() {
    return Widgets.find((i) => i.type == this.box.type);
  }

  allowDrop(event: MouseEvent) {
    event.preventDefault();
  }
  // 挂载新的组件
  DragDropMountComponent(event: DragEvent) {
    const typeStr = event.dataTransfer.getData('text/plain');
    const widget = Widgets.find((i) => i.type == typeStr);
    const { type, setting, component } = widget;

    // 挂载新的组件
    let Ins = this.WidgetContainer.createComponent(
      this.cfr.resolveComponentFactory(component)
    );
    Ins.changeDetectorRef.detectChanges();
    this.instance = Ins;

    const { __ngContext__, ...params } = Ins.instance;
    let obj = {};
    for (const key in params) {
      if (Object.prototype.hasOwnProperty.call(params, key)) {
        obj[key] = params[key];
      }
    }

    this.box.type = type;
    this.box.title = '新组件';
    this.box.Data = obj;
    this.expression = false;
  }

  // 恢复组件数据
  recoverComponent() {
    let Ins = this.WidgetContainer.createComponent(
      this.cfr.resolveComponentFactory(this.getWidget.component)
    );
    const { Data } = this.box;

    for (const key in Data) {
      if (Object.prototype.hasOwnProperty.call(Data, key)) {
        Ins.instance[key] = Data[key];
      }
    }
    Ins.changeDetectorRef.detectChanges();
    this.instance = Ins;
  }

  // 点击改变设置页面的视图
  changeSettingView() {
    this.sourceData.notificationSettings(this.box.type, this.instance);
  }
}
