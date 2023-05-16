import { TestBed } from '@angular/core/testing';

import { CrudPruebaempService } from './crud-pruebaemp.service';

describe('CrudPruebaempService', () => {
  let service: CrudPruebaempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudPruebaempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
