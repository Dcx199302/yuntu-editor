import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Widgets } from 'src/app/core/widgets';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.less'],
})
export class WidgetComponent implements OnInit {
  constructor() {}

  @ViewChild('widget')
  widget: TemplateRef<any>;

  ngOnInit(): void {
    // console.log(Widgets);
  }
  Widgets = Widgets;
}
