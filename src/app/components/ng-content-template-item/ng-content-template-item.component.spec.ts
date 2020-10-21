import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentTemplateItemComponent } from './ng-content-template-item.component';

describe('NgContentTemplateItemComponent', () => {
  let component: NgContentTemplateItemComponent;
  let fixture: ComponentFixture<NgContentTemplateItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContentTemplateItemComponent ]
    })
    .compileComponents();
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
