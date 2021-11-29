import { TestBed } from '@angular/core/testing';

import { OrderedBooksService } from './ordered-books.service';

describe('OrderedBooksService', () => {
  let service: OrderedBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderedBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
