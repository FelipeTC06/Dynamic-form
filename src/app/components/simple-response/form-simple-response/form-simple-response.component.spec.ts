import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSimpleResponseComponent } from './form-simple-response.component';

describe('FormSimpleResponseComponent', () => {
  let component: FormSimpleResponseComponent;
  let fixture: ComponentFixture<FormSimpleResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSimpleResponseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormSimpleResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
