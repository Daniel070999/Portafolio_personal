import { TestBed } from '@angular/core/testing';

import { DataPortafolioService } from './data-portafolio.service';

describe('DataPortafolioService', () => {
  let service: DataPortafolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPortafolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
