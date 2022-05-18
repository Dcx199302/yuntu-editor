import { Component, OnInit } from '@angular/core';
import Page from 'src/app/core/model/page';
import { DataSourceService } from 'src/app/core/services/data-source.service';

@Component({
  selector: 'app-demo-data-view',
  templateUrl: './demo-data-view.component.html',
  styleUrls: ['./demo-data-view.component.less'],
})
export class DemoDataViewComponent implements OnInit {
  constructor(public service: DataSourceService) {}

  Data: Page = this.service.getEditorInitData;

  ngOnInit(): void {
    console.log(this.service.getEditorInitData);
  }
}
