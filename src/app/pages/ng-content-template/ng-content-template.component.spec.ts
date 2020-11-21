import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgContentTemplateComponent } from './ng-content-template.component';

describe('NgContentTemplateComponent', () => {
  let component: NgContentTemplateComponent;
  let fixture: ComponentFixture<NgContentTemplateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NgContentTemplateComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
