import { TestBed } from '@angular/core/testing';

import { CartebankService } from './cartebank.service';

describe('CartebankService', () => {
  let service: CartebankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartebankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
