import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeComponentsItemComponent } from './life-components-item.component';

describe('LifeComponentsItemComponent', () => {
  let component: LifeComponentsItemComponent;
  let fixture: ComponentFixture<LifeComponentsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LifeComponentsItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeComponentsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
