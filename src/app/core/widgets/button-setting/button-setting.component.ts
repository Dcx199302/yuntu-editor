import { Component, ComponentRef, Input, OnInit } from '@angular/core';
import SettingAbstract from '../setting';

@Component({
  selector: 'app-button-setting',
  templateUrl: './button-setting.component.html',
  styleUrls: ['./button-setting.component.less'],
})
export class ButtonSettingComponent extends SettingAbstract implements OnInit {
  // @Input('instance')
  // instance: ComponentRef<any>;

  constructor() {
    super();
  }

  ngOnInit(): void {}
  handleClick() {
    console.log(this.instance);
  }
}
