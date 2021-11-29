import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookuiComponent } from './bookui.component';

describe('BookuiComponent', () => {
  let component: BookuiComponent;
  let fixture: ComponentFixture<BookuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookuiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
