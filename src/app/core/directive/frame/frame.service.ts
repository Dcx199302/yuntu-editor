import { Injectable, TemplateRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FrameService {
  frameTemplate: TemplateRef<any>;
  constructor() {}
  setTemplate(template: TemplateRef<any>) {
    this.frameTemplate = template;
  }

  subject$ = new Subject<void>();

  selected() {
    // 通知 - 所有的组件关闭弹框~ 让被点击的显示
    this.subject$.next();
  }
}
