import { Component, ComponentRef, Input, OnInit } from '@angular/core';
import SettingAbstract from '../setting';

@Component({
  selector: 'app-table-setting',
  templateUrl: './table-setting.component.html',
  styleUrls: ['./table-setting.component.less'],
})
export class TableSettingComponent extends SettingAbstract implements OnInit {
  // @Input('instance')
  // instance: ComponentRef<any>;
  id = Math.random();
  data: any;
  constructor() {
    super();
  }

  // json = JSON.stringify(this.instance);

  ngOnInit(): void {}
  ngAfterViewInit(): void {}
  handleClick() {
    console.log(this.instance);
    this.data = this.instance.instance.dataSource;
  }

  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
}
