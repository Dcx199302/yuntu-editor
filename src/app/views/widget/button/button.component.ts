import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less'],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.name = {
      hello: 'world',
    };
  }
  name: any = {
    data: {
      title: '页面',
      child: [
        {
          title: '区域',
          child: [
            {
              title: '区块',
              child: [
                {
                  title: '行',
                  direction: 'horizontal',
                  child: [
                    { title: '盒子', component: 'Widget组件' },
                    { title: '盒子', component: 'Widget组件' },
                    { title: '盒子', component: 'Widget组件' },
                  ],
                },
              ],
            },
          ],
        },
        {
          title: '区域',
          child: [
            {
              title: '区块',
              child: [
                {
                  title: '行',
                  direction: 'horizontal',
                  child: [{ title: '盒子', component: 'Widget组件' }],
                },
                {
                  title: '行',
                  direction: 'horizontal',
                  child: [
                    { title: '盒子', component: 'Widget组件' },
                    { title: '盒子2', component: 'Widget组件' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  };
}
