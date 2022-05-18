import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoLayoutComponent } from './a-demo/demo-layout.component';
import { ViewComponent } from './views/view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { DataDemoComponent } from './a-demo/data-demo/data-demo.component';
import { DemoDataViewComponent } from './a-demo/demo-data-view/demo-data-view.component';
import { DemoAreaComponent } from './a-demo/demo-data-view/demo-area/demo-area.component';
import { DemoBlockComponent } from './a-demo/demo-data-view/demo-area/demo-block/demo-block.component';
import { RowComponent } from './a-demo/demo-data-view/demo-area/demo-block/row/row.component';
import { BoxComponent } from './a-demo/demo-data-view/demo-area/demo-block/row/box/box.component';
import { EditorComponent } from './views/editor/editor.component';
import { SettingComponent } from './views/setting/setting.component';
import { WidgetComponent } from './views/widget/widget.component';
import { YunAreaComponent } from './views/editor/yun-area/yun-area.component';
import { YunBlockComponent } from './views/editor/yun-area/yun-block/yun-block.component';
import { YunRowComponent } from './views/editor/yun-area/yun-block/yun-row/yun-row.component';
import { YunBoxComponent } from './views/editor/yun-area/yun-block/yun-row/yun-box/yun-box.component';

// Material的组件
let Material = [MatExpansionModule, MatButtonModule, MatIconModule];
let DemoComponent = [
  DataDemoComponent,
  DemoDataViewComponent,
  DemoAreaComponent,
  DemoBlockComponent,
  RowComponent,
  BoxComponent,
];

let YUNTU = [
  YunAreaComponent,
  YunBlockComponent,
  YunRowComponent,
  YunBoxComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    DemoLayoutComponent,
    ViewComponent,
    ...DemoComponent,
    EditorComponent,
    SettingComponent,
    WidgetComponent,
    ...YUNTU, //云图编辑器的嵌套页面
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...Material,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
