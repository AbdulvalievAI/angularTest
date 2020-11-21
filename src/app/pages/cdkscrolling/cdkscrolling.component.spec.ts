import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CDKScrollingComponent } from './cdkscrolling.component';

describe('CDKScrollingComponent', () => {
  let component: CDKScrollingComponent;
  let fixture: ComponentFixture<CDKScrollingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CDKScrollingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CDKScrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
