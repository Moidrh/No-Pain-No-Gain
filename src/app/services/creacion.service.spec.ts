import { TestBed } from '@angular/core/testing';

import { CreacionService } from './creacion.service';

describe('CreacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreacionService = TestBed.get(CreacionService);
    expect(service).toBeTruthy();
  });
});
