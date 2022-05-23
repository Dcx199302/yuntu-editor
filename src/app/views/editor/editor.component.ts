import { Component, OnInit } from '@angular/core';
import Describe from 'src/app/core/directive/describe';
import { DataSourceService } from 'src/app/core/services/data-source.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less'],
})
export class EditorComponent implements OnInit {
  constructor(public service: DataSourceService) {}

  ngOnInit(): void {}
}
