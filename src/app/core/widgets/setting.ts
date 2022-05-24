import { Component, ComponentRef, Input } from '@angular/core';

@Component({
  selector: 'setting-abstract',
  template: ``,
})
export default abstract class SettingAbstract {
  constructor() {}

  @Input('instance')
  instance: ComponentRef<any>;
}
