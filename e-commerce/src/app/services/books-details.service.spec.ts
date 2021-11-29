import { TestBed } from '@angular/core/testing';

import { BooksDetailsService } from './books-details.service';

describe('BooksDetailsService', () => {
  let service: BooksDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
