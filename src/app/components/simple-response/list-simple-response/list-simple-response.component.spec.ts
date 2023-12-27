import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSimpleResponseComponent } from './list-simple-response.component';

describe('ListSimpleResponseComponent', () => {
  let component: ListSimpleResponseComponent;
  let fixture: ComponentFixture<ListSimpleResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListSimpleResponseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListSimpleResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
