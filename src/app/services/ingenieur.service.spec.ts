import { TestBed } from '@angular/core/testing';

import { IngenieurService } from './ingenieur.service';

describe('IngenieurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IngenieurService = TestBed.get(IngenieurService);
    expect(service).toBeTruthy();
  });
});
