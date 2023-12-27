import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormThreadedResponseComponent } from './form-threaded-response.component';

describe('FormThreadedResponseComponent', () => {
  let component: FormThreadedResponseComponent;
  let fixture: ComponentFixture<FormThreadedResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormThreadedResponseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormThreadedResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
