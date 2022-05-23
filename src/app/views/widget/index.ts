import { Type } from '@angular/core';
import { ButtonSettingComponent } from './button-setting/button-setting.component';
import { ButtonComponent } from './button/button.component';

export class Widget {
  constructor(
    public type: string,
    public Widget: Type<any>,
    public setting: Type<any>
  ) {}
}

export const WidgetList: Widget[] = [
  new Widget('按钮', ButtonComponent, ButtonSettingComponent),
  new Widget('按钮2', ButtonComponent, ButtonSettingComponent),
];
