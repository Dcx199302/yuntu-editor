import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YunBlockComponent } from './yun-block.component';

describe('YunBlockComponent', () => {
  let component: YunBlockComponent;
  let fixture: ComponentFixture<YunBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YunBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YunBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
