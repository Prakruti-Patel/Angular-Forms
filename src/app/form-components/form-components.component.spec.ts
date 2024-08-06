import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponentsComponent } from './form-components.component';

describe('FormComponentsComponent', () => {
  let component: FormComponentsComponent;
  let fixture: ComponentFixture<FormComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponentsComponent]
    });
    fixture = TestBed.createComponent(FormComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
