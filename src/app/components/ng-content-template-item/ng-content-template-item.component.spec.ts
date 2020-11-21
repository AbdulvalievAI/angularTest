import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgContentTemplateItemComponent } from './ng-content-template-item.component';

describe('NgContentTemplateItemComponent', () => {
  let component: NgContentTemplateItemComponent;
  let fixture: ComponentFixture<NgContentTemplateItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NgContentTemplateItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentTemplateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
