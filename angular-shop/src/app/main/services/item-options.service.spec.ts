import { TestBed } from '@angular/core/testing';

import { ItemOptionsService } from './item-options.service';

describe('ItemOptionsService', () => {
  let service: ItemOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
