import { TestBed } from '@angular/core/testing';

import { MaleService } from './male.service';

describe('MaleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaleService = TestBed.get(MaleService);
    expect(service).toBeTruthy();
  });
});
