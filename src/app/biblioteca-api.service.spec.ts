import { TestBed } from '@angular/core/testing';

import { BibliotecaApiService } from './biblioteca-api.service';

describe('BibliotecaApiService', () => {
  let service: BibliotecaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BibliotecaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
