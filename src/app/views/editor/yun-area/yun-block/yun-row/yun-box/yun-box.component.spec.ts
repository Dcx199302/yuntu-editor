import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YunBoxComponent } from './yun-box.component';

describe('YunBoxComponent', () => {
  let component: YunBoxComponent;
  let fixture: ComponentFixture<YunBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YunBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YunBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
