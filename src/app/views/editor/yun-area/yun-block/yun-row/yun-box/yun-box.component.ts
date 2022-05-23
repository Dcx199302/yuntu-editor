import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import Box from 'src/app/core/model/box';
import Row from 'src/app/core/model/row';

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

  constructor() {}

  ngOnInit(): void {}

  @ViewChild('WidgetContainer')
  WidgetContainer: TemplateRef<any>;

  ngAfterViewInit() {
    // this.row.child.length
    console.log(this.WidgetContainer);
  }
}
