import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksByIdComponent } from './books-by-id.component';

describe('BooksByIdComponent', () => {
  let component: BooksByIdComponent;
  let fixture: ComponentFixture<BooksByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksByIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BooksByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
