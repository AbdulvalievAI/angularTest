import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LifeComponentsComponent } from './life-components.component';

describe('LifeComponentsComponent', () => {
  let component: LifeComponentsComponent;
  let fixture: ComponentFixture<LifeComponentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LifeComponentsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
