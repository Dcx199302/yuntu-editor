import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DataSourceService } from 'src/app/core/services/data-source.service';
import { Widgets } from 'src/app/core/widgets';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.less'],
})
export class SettingComponent implements OnInit {
  constructor(
    private dss: DataSourceService,
    private cfr: ComponentFactoryResolver
  ) {}

  settingInstance: ComponentRef<any>; //保存编辑中的实例，用于比对
  ngOnInit(): void {
    this.dss.notificationSettings$.subscribe((res) => {
      const { type, instance } = res;
      if (this.settingInstance != instance) {
        this.toggleSetting(type, instance);
      }
      this.settingInstance = instance;
    });
  }

  ngAfterViewInit() {}

  // 设置部分
  @ViewChild('settingContainer', { read: ViewContainerRef, static: false })
  settingContainer: ViewContainerRef;

  // instance: ComponentRef<any>;
  toggleSetting(type: string, instance: ComponentRef<any>) {
    Widgets.forEach((item) => {
      if (item.type == type) {
        // 清空
        this.settingContainer.clear();
        // 挂载
        const _settingInstance = this.settingContainer.createComponent(
          this.cfr.resolveComponentFactory(item.setting)
        );
        // 更新
        _settingInstance.changeDetectorRef.detectChanges();
        // 赋值
        _settingInstance.instance.instance = instance;
      }
    });
  }
}
