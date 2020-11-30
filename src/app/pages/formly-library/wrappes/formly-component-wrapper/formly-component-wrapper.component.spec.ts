import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyComponentWrapperComponent } from './formly-component-wrapper.component';

describe('FormlyComponentWrapperComponent', () => {
  let component: FormlyComponentWrapperComponent;
  let fixture: ComponentFixture<FormlyComponentWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormlyComponentWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyComponentWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
