import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAreaComponent } from './demo-area.component';

describe('DemoAreaComponent', () => {
  let component: DemoAreaComponent;
  let fixture: ComponentFixture<DemoAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
