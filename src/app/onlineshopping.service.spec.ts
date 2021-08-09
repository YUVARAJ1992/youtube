import { TestBed } from '@angular/core/testing';

import { OnlineshoppingService } from './onlineshopping.service';

describe('OnlineshoppingService', () => {
  let service: OnlineshoppingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineshoppingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
