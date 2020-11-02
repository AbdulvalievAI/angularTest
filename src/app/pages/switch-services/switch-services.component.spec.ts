import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchServicesComponent } from './switch-services.component';

describe('SwitchServicesComponent', () => {
  let component: SwitchServicesComponent;
  let fixture: ComponentFixture<SwitchServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchServicesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
