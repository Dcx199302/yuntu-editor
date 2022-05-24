import { Type } from '@angular/core';
import { ButtonSettingComponent } from './button-setting/button-setting.component';
import { ButtonComponent } from './button/button.component';
import { TableSettingComponent } from './table-setting/table-setting.component';
import { TableComponent } from './table/table.component';

export class Widget {
  constructor(
    public type: string,
    public component: Type<any>,
    public setting: Type<any>
  ) {}
}
export const Widgets = [
  new Widget('button', ButtonComponent, ButtonSettingComponent),
  new Widget('table', TableComponent, TableSettingComponent),
];
