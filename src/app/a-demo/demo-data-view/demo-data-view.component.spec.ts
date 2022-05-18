import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDataViewComponent } from './demo-data-view.component';

describe('DemoDataViewComponent', () => {
  let component: DemoDataViewComponent;
  let fixture: ComponentFixture<DemoDataViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoDataViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
