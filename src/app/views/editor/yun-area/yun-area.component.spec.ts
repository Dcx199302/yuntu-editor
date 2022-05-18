import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YunAreaComponent } from './yun-area.component';

describe('YunAreaComponent', () => {
  let component: YunAreaComponent;
  let fixture: ComponentFixture<YunAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YunAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YunAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
