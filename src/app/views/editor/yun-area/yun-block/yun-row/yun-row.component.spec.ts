import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YunRowComponent } from './yun-row.component';

describe('YunRowComponent', () => {
  let component: YunRowComponent;
  let fixture: ComponentFixture<YunRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YunRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YunRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
