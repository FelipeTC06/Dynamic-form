import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListThreadedResponseComponent } from './list-threaded-response.component';

describe('ListThreadedResponseComponent', () => {
  let component: ListThreadedResponseComponent;
  let fixture: ComponentFixture<ListThreadedResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListThreadedResponseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListThreadedResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
