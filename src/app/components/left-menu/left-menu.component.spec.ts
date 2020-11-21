import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LeftMenuComponent } from './left-menu.component';

describe('LeftMenuComponent', () => {
  let component: LeftMenuComponent;
  let fixture: ComponentFixture<LeftMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LeftMenuComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
