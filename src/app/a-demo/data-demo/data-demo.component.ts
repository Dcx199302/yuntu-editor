import { Component, OnInit } from '@angular/core';
import { DataSourceService } from 'src/app/core/services/data-source.service';

@Component({
  selector: 'app-data-demo',
  templateUrl: './data-demo.component.html',
  styleUrls: ['./data-demo.component.less'],
})
export class DataDemoComponent implements OnInit {
  constructor(public service: DataSourceService) {}

  ngOnInit(): void {}
}
