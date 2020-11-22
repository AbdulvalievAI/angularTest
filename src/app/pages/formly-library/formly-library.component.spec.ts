import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyLibraryComponent } from './formly-library.component';

describe('FormlyLibraryComponent', () => {
  let component: FormlyLibraryComponent;
  let fixture: ComponentFixture<FormlyLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormlyLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
