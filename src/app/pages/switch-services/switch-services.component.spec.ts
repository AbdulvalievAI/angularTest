import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SwitchServicesComponent } from './switch-services.component';

describe('SwitchServicesComponent', () => {
  let component: SwitchServicesComponent;
  let fixture: ComponentFixture<SwitchServicesComponent>;

  beforeEach(waitForAsync(() => {
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
