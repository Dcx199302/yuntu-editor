import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.less'],
})
export class ViewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // 根据拖放dataTransfer的数据选中 - 用于添加到编辑区的组件
  handleDrop(event: DragEvent) {
    // let index = WidgetGroup.findIndex(
    //   (item) => item.type == event.dataTransfer.getData('text/plain')
    // );
    // // this.createWidget(index);
    // this.useTemplateCreateWidget(WidgetGroup[index]);
  }

  allowDrop(event: MouseEvent) {
    event.preventDefault();
  }
}
